import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonFunctions } from 'src/shared/commonFunctions';
import { RoutesUrl } from 'src/shared/routesUrl';
import { Teams } from 'src/shared/teams';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.page.html',
  styleUrls: ['./tables.page.scss'],
})
export class TablesPage implements OnInit {  
  groupA = [Teams.VMU, Teams.Stechco2, Teams.U45FC, Teams.RBJunior];
  groupB = [Teams.FC3Mien, Teams.BFC, Teams.Stechco1, Teams.ASVMU];
  displayLogo: boolean = false;
  message: string = 'Hiển thị logo';

  constructor(public commonFunctions : CommonFunctions, private navCtrl: NavController) { }

  ngOnInit() {
  }

  getTeamImageStyle(team: string): any  {
    return this.commonFunctions.getTeamImageStyle(team, this.displayLogo);    
  }

  loadTeamInfo(teamName: string){
    console.log('teamName', teamName);
    this.navCtrl.navigateRoot(['/', RoutesUrl.TeamInfo, teamName]);
  }

  changeDisplayImages()
  {
    this.displayLogo = !this.displayLogo;
    if (this.displayLogo)
    {
      this.message = 'Hiển thị logo';
    }
    else
    {
      this.message = 'Hiển thị màu áo';
    }
  }

}
