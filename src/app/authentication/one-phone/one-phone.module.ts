import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnePhonePageRoutingModule } from './one-phone-routing.module';

import { OnePhonePage } from './one-phone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnePhonePageRoutingModule
  ],
  declarations: [OnePhonePage]
})
export class OnePhonePageModule {}
