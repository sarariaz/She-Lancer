import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwoOtpPage } from './two-otp.page';

const routes: Routes = [
  {
    path: '',
    component: TwoOtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwoOtpPageRoutingModule {}
