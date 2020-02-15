import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TwoOtpPageRoutingModule } from './two-otp-routing.module';

import { TwoOtpPage } from './two-otp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TwoOtpPageRoutingModule
  ],
  declarations: [TwoOtpPage]
})
export class TwoOtpPageModule {}
