import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonFunctions } from '../../../shared/commonFunctions';
import { NavController } from '@ionic/angular';
import { Division } from 'src/models/Division';
import { Fields } from 'src/shared/fields';
import { Teams } from 'src/shared/teams';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})

export class ResultPage implements OnInit {
  teamAssignments: any;
  groupA: string[] = [];
  groupB: string[] = [];
  divisions: Division[] = [];
  playoffs: Division[] = [];
  time1: string = '8h30-9h30';
  time2: string = '9h45-10h45';
  time3: string = '11h-12h';
  time4: string = '13h-14h';
  displayLogo: boolean = false;
  message: string = 'Hiển thị logo';

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

    //get group A and B from page home
    this.playoffs = [
      {
        time: this.time4, field: Fields.Field1,
        teamA: '1st A', teamB: '2nd B'
      },
      {
        time: this.time4, field: Fields.Field2,
        teamA: '2nd A', teamB: '1st B'
      },
      {
        time: this.time4, field: Fields.Field3,
        teamA: '3rd A', teamB: '4th B'
      },
      {
        time: this.time4, field: Fields.Field4,
        teamA: '4th A', teamB: '3rd B'
      }
      // Add more divisions as needed
    ];
  }

  constructor(private route: ActivatedRoute, private commonFunctions: CommonFunctions, private navCtrl: NavController) {
    /*only use when starting from page home
    
    this.teamAssignments = this.route.snapshot.queryParams;
    //this.teamAssignments = JSON.parse(data);
    //this.route.queryParams['groupA']
    console.log('this.teamAssignments', this.teamAssignments);
    this.groupA = JSON.parse(this.teamAssignments?.groupA);
    this.groupB = JSON.parse(this.teamAssignments?.groupB);  

    */  
    this.commonFunctions.enableMenuSwipe();
    this.groupA = [Teams.VMU, Teams.Stechco2, Teams.U45FC, Teams.RBJunior];
    this.groupB = [Teams.FC3Mien, Teams.BFC, Teams.Stechco1, Teams.ASVMU];
  }

  ngOnInit() {
    this.generateDivisions(this.groupA, this.groupB);
  }

  generateTeams()
  {
    this.navCtrl.navigateRoot('home');
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
