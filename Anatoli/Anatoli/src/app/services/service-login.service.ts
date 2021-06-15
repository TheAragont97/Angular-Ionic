import { Injectable } from '@angular/core';
import { User } from '../shared/user.interface';
import { AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import { first} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ServiceLoginService {
  public nombre:string="";
  public user$:Observable<User>;
  constructor(private afAuth:AngularFireAuth,private afs:AngularFirestore) {
    this.user$=this.afAuth.authState.pipe(
      switchMap((user)=>{
        if(user){
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        else{
          return of(null);//observable nulo
        }
      })
    )
   }
  
  //metodo para resetear la contraseña
  async resetPassword(email:string):Promise<void>{
    try{
      return this.afAuth.sendPasswordResetEmail(email);
    }
    catch(error){
      console.log(error);
    }
  }

  //metodo para loguearse
  async login(email:string, password:string): Promise<User>{
    try{
      const {user} = await this.afAuth.signInWithEmailAndPassword(email,password);
      //console.log(result);
      this.updateUserData(user);
      return user;
    }
    catch(error){
      console.log(error);
    }
  }

  //metodo para loguearse con google
  async loginGoogle():Promise<User>{
    try{
      const{user}= await this.afAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider());
      this.updateUserData(user);
      return user;
    } 
    catch(error){console.log(error);}
  }

  //metodo para enviar un mensaje de verificacion
  async sendVerificationEmail():Promise<void>{
    try{
      return (await this.afAuth.currentUser).sendEmailVerification();
    } 
    catch(error){console.log(error);}
  }

  //verifica si está logueado
  isEmailVerified(user:User):boolean{
    return user.emailVerified === true ? true : false;
  }

  //metodo para registarse
  async register(email:string, password:string):Promise<User>{
    //añadir los demas campos 
    try{
      const {user} = await this.afAuth.createUserWithEmailAndPassword(email,password);
      await this.sendVerificationEmail();
      return user;
    }
    catch(error){console.log(error);}
  }
  
  //metodo para cerrar sesion
  async logout(): Promise<void>{
    try{
      await this.afAuth.signOut();
      //redirigir al home
    }
    catch(error){console.log(error);}
  }

  //metodo para saber que usuario está logueado
  async getCurrentUser(){
    return await this.afAuth.authState.pipe(first()).toPromise();
  }

  async nombreUser(nombre:string){
    this.nombre= await nombre;
    //console.log(this.nombre);
    //console.log(nombre);
  }
  //este metodo guarda en FireBase el usuario con todos los datos añadidos
  private updateUserData(user:User){
    const userRef:AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    //console.log(this.nombre);
    const data:User={
      uid:user.uid,
      email:user.email,
      emailVerified:user.emailVerified,
      displayName:user.displayName,
    };
    return userRef.set(data, {merge:true});

  }
}
