import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerResultPage } from './player-result.page';

const routes: Routes = [
  {
    path: '',
    component: PlayerResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerResultPageRoutingModule {}
