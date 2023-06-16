import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayoffPageRoutingModule } from './playoff-routing.module';

import { PlayoffPage } from './playoff.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayoffPageRoutingModule
  ],
  declarations: []
})
export class PlayoffPageModule {}
