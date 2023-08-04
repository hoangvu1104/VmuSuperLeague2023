import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenSinglePageRoutingModule } from './men-single-routing.module';

import { MenSinglePage } from './men-single.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenSinglePageRoutingModule
  ],
  declarations: [MenSinglePage]
})
export class MenSinglePageModule {}
