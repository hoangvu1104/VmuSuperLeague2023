import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayoffnormalPage } from './playoffnormal.page';

const routes: Routes = [
  {
    path: '',
    component: PlayoffnormalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayoffnormalPageRoutingModule {}
