import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostrequestPageRoutingModule } from './postrequest-routing.module';

import { PostrequestPage } from './postrequest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostrequestPageRoutingModule
  ],
  declarations: [PostrequestPage]
})
export class PostrequestPageModule {}
