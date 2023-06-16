import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Division } from 'src/models/Division';
import { Fields } from '../../../shared/fields';
import { RoutesUrl } from 'src/shared/routesUrl';


@Component({
  selector: 'app-begin',
  templateUrl: './begin.page.html',
  styleUrls: ['./begin.page.scss'],
})
export class BeginPage implements OnInit {
  countdown = 10;
  teamAssignments: any;
  groupA: string[] = [];
  groupB: string[] = [];
  divisions: Division[] = [];
  playoffs: Division[] = [];
  time1: string = '8h30-9h30';
  time2: string = '9h45-10h45';
  time3: string = '11h-12h';

  constructor(private route: ActivatedRoute,    
    private navCtrl: NavController) {   
    this.groupA = ['Team A1', 'Team A2', 'Team A3', 'Team A4'];
    this.groupB = ['Team B1', 'Team B2', 'Team B3', 'Team B4'];   
  }

  ngOnInit() {
    this.generateDivisions(this.groupA, this.groupB);
    this.startCountdown();
  }

  startCountdown() {    
    const timer = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(timer);
        this.generateTeams();
      }
    }, 1000); // Decrease the countdown every second (1000 milliseconds)
  }

  generateTeams()
  {
    this.navCtrl.navigateRoot(RoutesUrl.Home);
  }

  generateDivisions(groupA: string[], groupB: string[]) {
    //get group A and B from page home
    this.divisions = [
      {
        time: this.time1, field: Fields.Field1,
        teamA: groupA[0], teamB: groupA[1]
      },
      {
        time: this.time1, field: Fields.Field2,
        teamA: groupA[2], teamB: groupA[3]
      },
      {
        time: this.time1, field: Fields.Field3,
        teamA: groupB[0], teamB: groupB[1]
      },
      {
        time: this.time1, field: Fields.Field4,
        teamA: groupB[2], teamB: groupB[3] 
      },
      {
        time: this.time2, field: Fields.Field1,
        teamA: groupA[0], teamB: groupA[2]
      },
      {
        time: this.time2, field: Fields.Field2,
        teamA: groupA[1], teamB: groupA[3]
      },
      {
        time: this.time2, field: Fields.Field3,
        teamA: groupB[0], teamB: groupB[2]
      },
      {
        time: this.time2, field: Fields.Field4,
        teamA: groupB[1], teamB: groupB[3]
      },
      {
        time: this.time3, field: Fields.Field1,
        teamA: groupA[0], teamB: groupA[3]
      },
      {
        time: this.time3, field: Fields.Field2,
        teamA: groupA[1], teamB: groupA[2]
      },
      {
        time: this.time3, field: Fields.Field3,
        teamA: groupB[0], teamB: groupB[3]
      },
      {
        time: this.time3, field: Fields.Field4,
        teamA: groupB[1], teamB: groupB[2]
      }
      // Add more divisions as needed
    ];
  }

}
