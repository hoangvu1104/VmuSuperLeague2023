import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RoundRobinComponent } from './components/round-robin/round-robin.component';

import { ToolbarHeaderComponent } from './components/toolbar-header/toolbar-header.component';
import { ResultPage } from './pages/result/result.page';
import { HomePage } from './pages/home/home.page';
import { PlayoffPage } from './pages/playoff/playoff.page';
import { BeginPage } from './pages/begin/begin.page';
import { PlayoffnormalPage } from './pages/playoffnormal/playoffnormal.page';
import { MenuComponent } from './components/menu/menu.component';
import { TeamInfoPage } from './pages/team-info/team-info.page';
import { TablesPage } from './pages/tables/tables.page';
import { TableResultPage } from './pages/table-result/table-result.page';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PlayerResultPage } from './pages/player-result/player-result.page';



@NgModule({
  declarations: [
    AppComponent,
    RoundRobinComponent,
    ToolbarHeaderComponent,
    MenuComponent,
    PlayoffPage,
    PlayoffnormalPage,
    PlayerResultPage,
    BeginPage,
    ResultPage,
    TeamInfoPage,
    TablesPage,
    TableResultPage,
    HomePage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, NavParams],
  bootstrap: [AppComponent],
})
export class AppModule {}
