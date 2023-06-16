import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableResultPage } from './table-result.page';

const routes: Routes = [
  {
    path: '',
    component: TableResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableResultPageRoutingModule {}
