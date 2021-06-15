import { InicioGuard } from './guards/inicio.guard';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule),
    canActivate:[InicioGuard],
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule),
    canActivate:[InicioGuard],
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule),
    canActivate:[InicioGuard],
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule),
    canActivate:[InicioGuard],
  },
  {
    path: 'menu-hombre',
    loadChildren: () => import('./menu-hombre/menu-hombre.module').then( m => m.MenuHombrePageModule),
    canActivate:[InicioGuard],
  },
  {
    path: 'menu-mujer',
    loadChildren: () => import('./menu-mujer/menu-mujer.module').then( m => m.MenuMujerPageModule),
    canActivate:[InicioGuard],
  },
  {
    path: 'verificado-email',
    loadChildren: () => import('./verificado-email/verificado-email.module').then( m => m.VerificadoEmailPageModule)
  },
  {
    path: 'recuperar-pass',
    loadChildren: () => import('./recuperar-pass/recuperar-pass.module').then( m => m.RecuperarPassPageModule)
  },
  {
    path: 'cita',
    loadChildren: () => import('./cita/cita.module').then( m => m.CitaPageModule),
    canActivate:[InicioGuard],
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule),
    canActivate:[InicioGuard],
  },
  {
    path: 'modal2',
    loadChildren: () => import('./modal2/modal2.module').then( m => m.Modal2PageModule),
    canActivate:[InicioGuard],
  },
  {
    path: 'modal3',
    loadChildren: () => import('./modal3/modal3.module').then( m => m.Modal3PageModule),
    canActivate:[InicioGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    BrowserModule,
    IonicModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
