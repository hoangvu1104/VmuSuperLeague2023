import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { RoutesUrl } from 'src/shared/routesUrl';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private navCtrl: NavController,private menuCtrl: MenuController) { }

  ngOnInit() {}

  loadRoundRobin()
  {
    this.navCtrl.navigateRoot(RoutesUrl.RoundRobin);
    this.menuCtrl.close();
    
  }
  loadPlayOff(){
    this.navCtrl.navigateRoot(RoutesUrl.PlayOff);
    this.menuCtrl.close();
  }

  loadTables()
  {
    this.navCtrl.navigateRoot(RoutesUrl.Tables);
    this.menuCtrl.close();
  }

  loadTablesResult()
  {
    this.navCtrl.navigateRoot(RoutesUrl.TablesResult);
    this.menuCtrl.close();
  }

}
