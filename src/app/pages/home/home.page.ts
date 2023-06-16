import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from "@angular/router";
import { CommonFunctions } from '../../../shared/commonFunctions';
import { RoutesUrl } from 'src/shared/routesUrl';
import { Teams } from 'src/shared/teams';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{  
  showCongratulations = false;
  regenerateInterval: any;
  repetitions: number = 0;
  content: any;
  repeatTimes: number = 5;
  groupA: string[] = [];
  groupB: string[] = [];
  displayLogo: boolean = false;
  message: string = 'Hiển thị logo';

  teamsToShowA: string[] = []; // Teams to show for Group A
  teamsToShowB: string[] = []; // Teams to show for Group B
  countdown = 15;
  constructor(private navCtrl: NavController, public commonFunctions : CommonFunctions) {   }

  ngOnInit() {
    this.startCountdown();
  }

  startCountdown() {    
    const timer = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(timer);
        this.startGenerateTeams();
      }
    }, 1000); // Decrease the countdown every second (1000 milliseconds)
  }

  startGenerateTeams(){   
    this.showCongratulations = false;
    this.repetitions = 0; 
    this.generateTeams();
    this.regenerateInterval = setInterval(() => {
      this.generateTeams();
      console.log('startRegeneration', this.repetitions);
    }, 10000);
  }

  generateTeams()
  { 
    this.repetitions++;
    this.content = this.repetitions != this.repeatTimes ? 'Bốc thăm thử lần thứ ' + this.repetitions : 'Kết quả bốc thăm chính thức';
    this.showCongratulations = this.repetitions == this.repeatTimes;
    // Stop regenerating after 5 repetitions
    if (this.repetitions == this.repeatTimes) {
      clearInterval(this.regenerateInterval);
    }
      this.teamsToShowA = []; // Teams to show for Group A
      this.teamsToShowB = []; // Teams to show for Group B
      const teamAssignments: string[][] = this.generateTeamAssignments();
      this.groupA = teamAssignments[0];
      this.groupB = teamAssignments[1];    
      this.updateTeamsToShow();    
  }

  updateTeamsToShow() {
    if (this.teamsToShowA.length < this.groupA.length) {
      this.teamsToShowA.push(this.groupA[this.teamsToShowA.length]);
    }
    if (this.teamsToShowB.length < this.groupB.length) {
      this.teamsToShowB.push(this.groupB[this.teamsToShowB.length]);
    }
    if (
      this.teamsToShowA.length < this.groupA.length ||
      this.teamsToShowB.length < this.groupB.length
    ) {
      setTimeout(() => {
        this.updateTeamsToShow();
      }, 1000);
    }
  }

  generateTeamAssignments(): string[][] {
    const groups = {
      Group1: [Teams.Stechco1, Teams.Stechco2],
      Group2: [Teams.VMU, Teams.ASVMU],
      Group3: [Teams.FC3Mien, Teams.RBJunior],
      Group4: [Teams.U45FC, Teams.BFC]
    };  
    const teamsA: string[] = [];
    const teamsB: string[] = [];  
    for (const groupName in groups) {
      if (groups.hasOwnProperty(groupName)) {
        const teamGroup = groups[groupName as keyof typeof groups];
        this.shuffleArray(teamGroup); // Randomly shuffle teams within each group
        teamsA.push(teamGroup[0]);
        teamsB.push(teamGroup[1]);
      }
    }  
    this.shuffleArray(teamsA); // Randomly shuffle teams within group A
    this.shuffleArray(teamsB); // Randomly shuffle teams within group B  
    return [teamsA, teamsB];
  } 
  shuffleArray(array: any[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  } 

  getTeamImageStyle(team: string): any  {
    let imagePath: string = this.commonFunctions.getTeamImageStyle(team);    
    return {
      'background-image': `url(${imagePath})`,
    };
  }

  scheduleDetail(){
    this.navCtrl.navigateRoot(RoutesUrl.RoundRobin, this.getGroupData());
  }

  getGroupData() {
    const navData: NavigationExtras = {
      queryParams: {
        groupA: JSON.stringify(this.groupA),
        groupB: JSON.stringify(this.groupB)
      }
    }
    return navData;
  }

  
}
