import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'player-result',
    pathMatch: 'full'
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: 'result',
  //   loadChildren: () => import('./pages/result/result.module').then( m => m.ResultPageModule)
  // },
  // {
  //   path: 'begin',
  //   loadChildren: () => import('./pages/begin/begin.module').then( m => m.BeginPageModule)
  // },
  // {
  //   path: 'playoff',
  //   loadChildren: () => import('./pages/playoff/playoff.module').then( m => m.PlayoffPageModule)
  // },
  // {
  //   path: 'playoffnormal',
  //   loadChildren: () => import('./pages/playoffnormal/playoffnormal.module').then( m => m.PlayoffnormalPageModule)
  // },
  // {
  //   path: 'team-info/:teamName',
  //   loadChildren: () => import('./pages/team-info/team-info.module').then( m => m.TeamInfoPageModule)
  // },
  // {
  //   path: 'tables',
  //   loadChildren: () => import('./pages/tables/tables.module').then( m => m.TablesPageModule)
  // },
  // {
  //   path: 'table-result',
  //   loadChildren: () => import('./pages/table-result/table-result.module').then( m => m.TableResultPageModule)
  // },
  {
    path: 'player-result',
    loadChildren: () => import('./pages/player-result/player-result.module').then( m => m.PlayerResultPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
