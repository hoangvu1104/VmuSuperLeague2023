import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerResultPageRoutingModule } from './player-result-routing.module';

import { PlayerResultPage } from './player-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerResultPageRoutingModule
  ],
  declarations: []
})
export class PlayerResultPageModule {}
