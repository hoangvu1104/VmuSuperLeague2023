import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayoffPage } from './playoff.page';

const routes: Routes = [
  {
    path: '',
    component: PlayoffPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayoffPageRoutingModule {}
