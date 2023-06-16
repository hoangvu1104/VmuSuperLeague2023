import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayoffnormalPageRoutingModule } from './playoffnormal-routing.module';

import { PlayoffnormalPage } from './playoffnormal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayoffnormalPageRoutingModule
  ],
  declarations: []
})
export class PlayoffnormalPageModule {}
