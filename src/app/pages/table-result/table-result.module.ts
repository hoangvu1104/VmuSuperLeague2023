import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableResultPageRoutingModule } from './table-result-routing.module';

import { TableResultPage } from './table-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableResultPageRoutingModule
  ],
  declarations: []
})
export class TableResultPageModule {}
