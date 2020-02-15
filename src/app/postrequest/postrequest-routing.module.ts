import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostrequestPage } from './postrequest.page';

const routes: Routes = [
  {
    path: '',
    component: PostrequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostrequestPageRoutingModule {}
