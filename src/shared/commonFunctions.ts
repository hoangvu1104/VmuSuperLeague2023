import { Injectable } from "@angular/core";
import { Teams } from "./teams";
import { MenuController } from "@ionic/angular";
import { StaticVariable } from "./staticVariable";

@Injectable({
  providedIn: 'root'
})
export class CommonFunctions {
  constructor(private menuCtrl: MenuController){}
  getTeamImageStyle(team: string, displayLogo = false): string {
    let imagePath: string;
    // Map each team to a CSS class based on the uniform color
    switch (team) {
      case Teams.Stechco1:
        imagePath = `${StaticVariable.ImagesPath}` + (displayLogo ? `${StaticVariable.BlueTeam}` : `${StaticVariable.StechcoLogo}`);
        break;
      case Teams.ASVMU:
        imagePath = `${StaticVariable.ImagesPath}` + (displayLogo ? `${StaticVariable.BlueTeam}` : `${StaticVariable.VMULogo}`);
        break;
      case Teams.Stechco2:
        imagePath = `${StaticVariable.ImagesPath}` + (displayLogo ? `${StaticVariable.RedTeam}` : `${StaticVariable.StechcoLogo}`);
        break;
      case Teams.FC3Mien:
        imagePath = `${StaticVariable.ImagesPath}` + (displayLogo ? `${StaticVariable.RedTeam}` : `${StaticVariable.FC3MienLogo}`);
        break;
      case Teams.U45FC:
        imagePath = `${StaticVariable.ImagesPath}` + (displayLogo ? `${StaticVariable.RedTeam}` : `${StaticVariable.U45FCLogo}`);        
        break;
      case Teams.VMU:
        imagePath = `${StaticVariable.ImagesPath}` + (displayLogo ? `${StaticVariable.PinkTeam}` : `${StaticVariable.VMULogo}`);          
        break;
      case Teams.RBJunior:
        imagePath = `${StaticVariable.ImagesPath}` + (displayLogo ? `${StaticVariable.OrangeTeam}` : `${StaticVariable.RBJuniorLogo}`);         
        break;
      case Teams.BFC:
        imagePath = `${StaticVariable.ImagesPath}` + (displayLogo ? `${StaticVariable.YellowTeam}` : `${StaticVariable.BFCLogo}`);         
        break;
      default:
        imagePath = `${StaticVariable.ImagesPath}` + (displayLogo ? `${StaticVariable.WhiteTeam}` : `${StaticVariable.CupLogo}`);         
        break;
    };
    return imagePath;
  }  

  enableMenuSwipe() {
    this.menuCtrl.swipeGesture(true, 'menu-content');
    this.menuCtrl.enable(true, 'menu-content');
  }
}

