import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ServiceLoginService } from '../services/service-login.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.page.html',
  styleUrls: ['./cita.page.scss'],
})
export class CitaPage implements OnInit {
  //Variables
  public url:string;
  private idCita:string;
  private titulo:string="Cita Peluquería";
  private localizacion:string="Jerez de la Frontera";
  private descripcion:string="Cita Peluquería";
  private nombre:string="MiPelu";
  public usuario:string;
  public user:any;
  public fecha:string;
  public hora_fin:string;
  public hora:string;
  public citaSioNo:string;

  constructor(private nav:NavController,private auth:ServiceLoginService,private afs:AngularFirestore) { }

  prueba(){
   /* <a href="https://outlook.office.com/calendar/0/deeplink/compose?body=Learn%20all%20about%20the%20rules%20of%20the%20Motorway%20and%20how%20to%20access%20the%20fast%20lane.%0A%0Ahttps%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGridlock_%28Doctor_Who%29&enddt=2022-01-12T20%3A00%3A00%2B00%3A00&location=New%20Earth&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2022-01-12T18%3A00%3A00%2B00%3A00&subject=Welcome%20to%20the%20Motorway" target="_blank" style="color: #fdfdfd; text-decoration: underline;">Outlook.com</a> |
                          
          <a href="https://outlook.office.com/calendar/0/deeplink/compose?body=Learn%20all%20about%20the%20rules%20of%20the%20Motorway%20and%20how%20to%20access%20the%20fast%20lane.%0A%0Ahttps%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGridlock_%28Doctor_Who%29&enddt=2022-01-12T20%3A00%3A00%2B00%3A00&location=New%20Earth&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2022-01-12T18%3A00%3A00%2B00%3A00&subject=Welcome%20to%20the%20Motorway" target="_blank" style="color: #fdfdfd; text-decoration: underline;">Office 365</a> |
                          
          <a href="https://campaigns.litmus.com/_email/test/newnewyork.ics" target="_blank" style="color: #fdfdfd; text-decoration: underline;">Apple Mail/Outlook Desktop</a>
     </p>
</div>                     
<!--<![endif]-->
*/
  }

  volver(){
    this.nav.navigateForward("/tabs");
  }
  //actualizar campos de la cita del usuario
  update(){
    //en vez de update el set elimina todo lo demas
    this.afs.collection('citasUsuarios')
            .doc('id')
            .update({
              idusuario: "id",
              fecha: "fecha",
              inicio: "hora inicio",
              fin: "hora fin"
            }).then(docRef=>{
              console.log(docRef);
            })
            .catch(e=>console.log('error',e));
  }
  //funcion para borrar la cita del usuario
  delete(){
    //si manda un undefined se ha borrado
    this.afs.collection('citasUsuarios')
            .doc(this.idCita)
            .delete()
            .then(docRef=>{
              //console.log(docRef);
            })
            .catch(e=>console.log('error',e));
    this.nav.navigateForward("/tabs");
  }
  //funcion para borrar la cita del usuario
  /*async deleteCita(){
    //si manda un undefined se ha borrado
    this.afs.collection('citasUsuarios')
            .doc('id')
            .delete()
            .then(docRef=>{
              console.log(docRef);
            })
            .catch(e=>console.log('error',e));
    console.log("User->",this.user);
    this.user= await this.auth.getCurrentUser();
    if(this.user){
      this.usuario=this.user.uid;
    }
    console.log(this.usuario);
    this.afs.collection('citasUsuarios')
    .ref
    .where('idusuario','==',this.usuario)
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
    });
  }*/
  //funcion para select * from citasUsuario
  select(){
    //con esto sacamos el id de la cita
    this.afs.collection('citasUsuarios')
    .ref.onSnapshot(snap=>{
      snap.forEach(snapHijo=>{
        console.log(snapHijo);
      });
    });
    //con esto sacamos los datos de la cita
    //consulta en tiempo real
    this.afs.collection('citasUsuarios')
    .ref.onSnapshot(snap=>{
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
      console.log(datosCitas);
    });
    //con esto sacamos los datos de la cita con get
    this.afs.collection('citasUsuarios')
    .ref.get().then(snap=>{
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
      console.log(datosCitas);
    });
  }
  async where(){
    //console.log("User->",this.user);
    this.user= await this.auth.getCurrentUser();
    if(this.user){
      this.usuario=this.user.uid;
    }
    //console.log(this.usuario);
    this.afs.collection('citasUsuarios')
    .ref
    .where('idusuario','==',this.usuario)
    .get()
    .then(snap=>{
      const datosCitas : any = [];
      let datos :Object;
      snap.forEach(snapHijo => {
        //esto es super importante sino da error
        datos=snapHijo.data();
        this.idCita=snapHijo.id;
        datosCitas.push({
          id: snapHijo.id,
          ...datos
        });
        
      });
      //recorremos el array para sacar la hora y el dia de la cita
      datosCitas.forEach(element => {
        if(element.id=="" || element.id==null){
          this.citaSioNo="NO";
        }
        else{
          this.citaSioNo="SI";
        }
        this.fecha=element.fecha;
        this.hora=element.inicio;
        this.hora_fin=element.fin;
        this.botonCalendar(this.fecha,this.hora,this.hora_fin);
      });
      
    });
    
  }
  //boton para añadir la cita en google calendar
  botonCalendar(fecha:string, hora:string, hora_fin:string){
    //variables formato date
    const fecha_inicio=(fecha.replace('-','')).replace('-','')+"T"+hora.replace(':','')+"00";

    const fecha_fin=(fecha.replace('-','')).replace('-','')+"T"+hora_fin.replace(':','')+"00";

    const dates=fecha_inicio+"%2F"+fecha_fin;
    //console.log(dates);

    const desc=this.descripcion+" el dia "+fecha+" a las "+hora+" hasta las "+hora_fin;
    const url="http://www.google.com/calendar/event?action=TEMPLATE&text="+this.titulo+"&dates="+dates+"&details="+desc+"&location="+this.localizacion+"&trp=false&sprop=www.google.com&sprop=name:"+this.nombre;
    this.url=url;
    console.log(this.url)
  }

  ngOnInit(){
    this.where();
  }
  /*ngOnInit() {
    this.usuarios();
    this.where();
  }*/

}

