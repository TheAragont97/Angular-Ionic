import { ServiceLoginService } from './../services/service-login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InicioGuard implements CanActivate {
  constructor(private auth:ServiceLoginService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.user$.pipe(
      take(1),
      map(user=>{
        //lo utilizamos para ver por consola si existe o no
        //console.log('User->',user);
        if(user){
          return true;
        }
        else{
          this.router.navigate(['/home']);
          this.auth.logout();
          return false;
        }
      })
    )
  }
  
}
