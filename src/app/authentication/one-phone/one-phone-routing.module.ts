import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnePhonePage } from './one-phone.page';

const routes: Routes = [
  {
    path: '',
    component: OnePhonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnePhonePageRoutingModule {}
