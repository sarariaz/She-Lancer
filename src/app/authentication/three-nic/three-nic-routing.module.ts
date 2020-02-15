import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThreeNicPage } from './three-nic.page';

const routes: Routes = [
  {
    path: '',
    component: ThreeNicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThreeNicPageRoutingModule {}
