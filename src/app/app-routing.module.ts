import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth/step1', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import ('./authentication/authentication.module').then( m => m.AuthenticationPageModule)
  },
  {
    path: 'postrequest',
    loadChildren: () => import('./postrequest/postrequest.module').then( m => m.PostrequestPageModule)
  },
  {
    path: 'seller-profile',
    loadChildren: () => import('./seller-profile/seller-profile.module').then( m => m.SellerProfilePageModule)
  },
  {
    path: 'account-settings',
    loadChildren: () => import('./account-settings/account-settings.module').then( m => m.AccountSettingsPageModule)
  }
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
