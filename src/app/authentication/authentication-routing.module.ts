import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationPage } from './authentication.page';

const routes: Routes = [
  {
    path: 'step1',
    loadChildren: () => import('./one-phone/one-phone.module').then( m => m.OnePhonePageModule)
  },
  {
    path: 'step2',
    loadChildren: () => import('./two-otp/two-otp.module').then( m => m.TwoOtpPageModule)
  },
  {
    path: 'step3',
    loadChildren: () => import('./three-nic/three-nic.module').then( m => m.ThreeNicPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'choice',
    loadChildren: () => import('./choice/choice.module').then( m => m.ChoicePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationPageRoutingModule {}
