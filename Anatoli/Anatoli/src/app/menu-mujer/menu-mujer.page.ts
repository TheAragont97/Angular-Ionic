import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceLoginService } from '../services/service-login.service';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { isEmpty } from 'rxjs/operators';
import { ModalPage } from '../modal/modal.page';
import { Modal2Page } from '../modal2/modal2.page';
import { Modal3Page } from '../modal3/modal3.page';
@Component({
  selector: 'app-menu-mujer',
  templateUrl: './menu-mujer.page.html',
  styleUrls: ['./menu-mujer.page.scss'],
})
export class MenuMujerPage implements OnInit {
  public loginForm:FormGroup;
  public fecha:boolean=false;
  public todayTotal:string="";
  public horaValidacion:'SI'|'NO';
  public hora:string="00:00";
  public citaComprobacion:'SI'|'NO'='NO';
  public usuario:string;
  public usuarioID:string;
  public bool:'si'|'no'='no';
  //esta variable sirve para mostrar el boton de finalizar pago una vez se guarden los datos
  public finalizado:boolean=false;
  //public peinado:boolean=false;
  //public tinte:boolean=false;
  public user:any;
  public payPalConfig ? : IPayPalConfig;
  constructor(private modalController:ModalController,private nav:NavController,private auth:ServiceLoginService,private afs:AngularFirestore) {
    this.loginForm= new FormGroup({
      inputFecha:new FormControl("",[Validators.required]),
      inputHora: new FormControl("",[Validators.required]),
      valorCorte: new FormControl("",[Validators.required]),
      valorTinte: new FormControl("",[Validators.required]),
      valorPeinado: new FormControl("",[Validators.required])
    });
   }

   async openModal(){
    const modal = await this.modalController.create({
      component:ModalPage
    });
    return await modal.present();
  }
  async openModal2(){
    const modal = await this.modalController.create({
      component:Modal2Page
    });
    return await modal.present();
  }
  async openModal3(){
    const modal = await this.modalController.create({
      component:Modal3Page
    });
    return await modal.present();
  }
  //con esta funcion vamos a calcular el tiempo que se va a tardar para hacer lo pedido
  //lo que devuelve se calculará y se pondrá en la fecha fin
  calculoTiempo(){
    let tiempo_min=0;
    if(this.loginForm.controls.valorCorte.value!=""){
      tiempo_min+=30;
    }
    if(this.loginForm.controls.valorPeinado.value=="SI"){
      tiempo_min+=30;
    }
    if(this.loginForm.controls.valorTinte.value=="SI"){
      tiempo_min+=180;
    }
    return tiempo_min;
  }
  //funcion para calcular el precio final que va a tener que pagar
  calculoPrecio(): number{
    let precio=0;
    if(this.loginForm.controls.valorCorte.value!=""){
      precio+=18;
      //console.log("Corte: ",precio);
    }
    if(this.loginForm.controls.valorPeinado.value=="SI"){
      precio+=30;
      //console.log("Peinado: ",precio);
    }
    if(this.loginForm.controls.valorTinte.value=="SI"){
      precio+=15;
      //console.log("Tinte: ",precio);
    }
    return precio;
  }
  
  private initConfig(): void {
    this.payPalConfig = {
        currency: 'EUR',
        clientId: 'ATIx9LXx4fb44UPJf9KFbkOf2n3WrkKXdOrCt9kmUFQzXBel0maexlmsAcgSNePYe0umNo0t3juNOdyK',
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'EUR',
                    value: this.calculoPrecio().toString(),
                    breakdown: {
                        item_total: {
                            currency_code: 'EUR',
                            value: this.calculoPrecio().toString()
                        }
                    }
                },
                items: [{
                    name: 'Peluquería Anatoli S.A.',
                    quantity: '1',
                    category: 'DIGITAL_GOODS',
                    unit_amount: {
                        currency_code: 'EUR',
                        value: this.calculoPrecio().toString(),
                    },
                }]
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
        onApprove: (data, actions) => {
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            actions.order.get().then(details => {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
            });

        },
        onClientAuthorization: (data) => {
          this.insertar();
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);

        },
        onError: err => {
            console.log('OnError', err);
        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);
        },
    };
  }
  //inserta los datos del formulario y hace los calculos de los precios y el tiempo
  //una vez haga todo, muestras el boton de paypal para que se realice el pago
  recargarDatos(){
    this.where();
    if(this.horaValidacion!='SI'){
      //console.log("Datos incorrectos");
      if(this.citaComprobacion=='NO'){
        this.openModal2()
        this.nav.navigateForward("/tabs");
      }
    }else{
      this.initConfig();
    }
  }
  //con esta funcion vamos a calcular en condiciones
  //la hora final de lo que ponemos en el formulario y el tiempo que se tarda en realizar el servicio
  calculoTotalHoraFinal(){
    console.log(this.hora);
    let minutoMin="";
    let horaMin="";
    let horas =this.hora;
    let posicion = this.hora.indexOf(":");
    console.log(posicion);
    let tiempo= this.calculoTiempo();
    let contHora=0;
    if(tiempo > 180){
      tiempo-=180;
      contHora+=3;
    }
    console.log(horas.substring(posicion+1,horas.length));
    let minutos = (parseInt(horas.substring(posicion+1,horas.length)))+(tiempo);
    console.log(minutos);

    if(minutos>=60){
      minutos-=60;
      contHora+=1;
    }
    else if(minutos<10){
      minutoMin="0";
    }
    console.log(horas.substring(0,posicion));
    let hora = (parseInt(horas.substring(0,posicion)))+(contHora);
    if(hora<10){
      horaMin="0";
    }
    console.log(hora);
    return horaMin+""+hora+":"+minutoMin+""+minutos;
  }

  //comporbamos si existen citas del usuario, si esa así te manda al listado de citas
  async citasExistentes(){
    //console.log("User->",this.user);
    this.user= await this.auth.getCurrentUser();
    if(this.user){
      this.usuario=this.user.uid;
    }
    //console.log(this.usuario);
    this.afs.collection('citasUsuarios')
    .ref
    .where('idusuario','==',this.usuario)
    .onSnapshot(snap=>{
      if(snap.empty){
        //console.log("Esta vacio")
        this.citaComprobacion= "SI";
      }
      else{
        //console.log("No esta vacio");
        this.citaComprobacion="NO";
      }
    });
  }
  //pagamos con paypal pero antes hacemos una llamada al backend para ver la ultima cita
  //insertamos los datos despues del pago en la BD y redirigimos al menú
  insertar(){
    //una vez confirmado el pago meter en el back-end la cita
    if(this.user){
      const usuario_cita={
        idusuario: this.user.uid,
        fecha: this.loginForm.controls.inputFecha.value,
        inicio: this.hora,
        fin: (this.calculoTotalHoraFinal()),
        precio_final:(this.calculoPrecio())
      }
      if(this.citaComprobacion== "SI"){
        this.afs.collection('citasUsuarios')
              .add(usuario_cita)
              .then(docRef=>{
                console.log(docRef);
              })
              .catch(e=>console.log('error',e));
        //redirigimos al menu
        this.nav.navigateForward("/tabs");
      }
    }
    //despues redirigir al menu
    this.openModal();
    this.nav.navigateForward("/cita");
  }
  
  //sacar hora disponible
  where(){
    const horaElegida=this.loginForm.controls.inputHora.value;
    this.afs.collection('citasUsuarios')
    .ref
    .where('fecha','==',this.loginForm.controls.inputFecha.value)
    .get()
    .then(snap=>{
      const datosCitas : any = [];
      let datos :Object;
      snap.forEach(snapHijo => {
        //esto es super importante sino da error
        datos=snapHijo.data();
        datosCitas.push({
          id: snapHijo.id,
          ...datos
        });
      });
      //console.log("llego");
      if(datos!=null){
        //recorremos el array para sacar la hora y el dia de la cita
        datosCitas.forEach(element => {
          //console.log("entro1");
          //comporbamos si existe o no citas en esta fecha
          //si no existe le añadimos la cita el dia 9
          if(element.inicio!=null || element.inicio!=""){
            //si exite miramos que sea a las 9 o despues sino se le coge la cita a primera hora
            if(parseInt(element.inicio.substring(0,2))>=9){
              //si es despues de las 9 miramos si esta entre el rango de las 14 y las 16
              if(parseInt(element.fin.substring(0,2))>=14 &&  parseInt(element.fin.substring(0,2))<=16){
                //como no se puede se le muestra el mensaje
                this.horaValidacion='NO';
                this.openModal3();
              }
              else{
                //si intenta coger la cita a partir de las 22 le salta el error ya que a esa hora cierra
                if(parseInt(element.inicio.substring(0,2))>=22){
                  this.horaValidacion='NO';
                  this.openModal3();
                }
                else{
                  //si la hora elegida es menor a la de la BD se mira si el tiempo que se va a emplear en la peluqueria esta entre el rango de horas permitido
                  if(parseInt(element.inicio.substring(0,2))>=parseInt(horaElegida.substring(0,2))){
                    if((parseInt(element.inicio.substring(0,2))-parseInt(horaElegida.substring(0,2)))>=parseInt(this.calculoTotalHoraFinal().substring(0,2))){
                      this.hora=horaElegida;
                      this.horaValidacion='SI';
                    }
                    else{
                      this.horaValidacion='NO';
                      this.openModal3();
                    }
                  }
                  else{
                    //si la hora elegida es menor a la hora fin de la cita anterior no se puede
                    if(parseInt(element.fin.substring(0,2))>=parseInt(horaElegida.substring(0,2))){
                      this.horaValidacion='NO';
                      this.openModal3();
                    }
                    else{
                      this.hora=horaElegida;
                      this.horaValidacion='SI';
                    }
                  }
                }
              }
            }
            else{
              this.hora="09:00";
              this.horaValidacion='SI';
            }
          }//fin primer if
          else{
            this.hora="09:00";
            this.horaValidacion='SI';
          }//fin primer else
          /*console.log(this.hora);
          console.log(element.fin);
          console.log(element.fecha);
          console.log(element.inicio);
          console.log(element.idusuario);*/
        });
      }
      else{
        //console.log("entro2");
        this.hora="09:00";
        this.horaValidacion='SI';
      }
    });
    //console.log('HORA->',this.horaValidacion);
    
  }
  async ngOnInit() {
    var today = new Date();
    this.todayTotal =today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    console.log(this.todayTotal);
    this.horaValidacion='NO';
    this.citasExistentes();
    //console.log(this.citaComprobacion);
    //console.log("User->",this.user);
    this.user= await this.auth.getCurrentUser();
    if(this.user){
      this.usuarioID=this.user.uid;
    }
  }

}
