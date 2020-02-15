import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThreeNicPageRoutingModule } from './three-nic-routing.module';

import { ThreeNicPage } from './three-nic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThreeNicPageRoutingModule
  ],
  declarations: [ThreeNicPage]
})
export class ThreeNicPageModule {}
