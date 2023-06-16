import { Component, OnInit } from '@angular/core';
import { Division } from 'src/models/Division';
import { CommonFunctions } from 'src/shared/commonFunctions';
import { Fields } from 'src/shared/fields';

@Component({
  selector: 'app-playoffnormal',
  templateUrl: './playoffnormal.page.html',
  styleUrls: ['./playoffnormal.page.scss'],
})
export class PlayoffnormalPage implements OnInit {
  semifinals: Division[] = [];
  finals: Division[] = [];
  finalD1: Division[] = [];
  time1: string = '13h-14h';
  time2: string = '14h15-15h15';
  time3: string = '15h15-16h15';
  time4: string = '16h15-17h';
  displayLogo: boolean = false;
  message: string = 'Hiển thị logo';
  constructor(public commonFunctions: CommonFunctions) { 
    this.commonFunctions.enableMenuSwipe();
    this.initData();
  }

  ngOnInit() {
  }

  initData()
  {
     //get group A and B from page home
     this.semifinals = [
      // Semi Final
      {
        time: this.time1, field: Fields.Field1,
        teamA: 'Nhất A', teamB: 'Nhì B'
      },
      {
        time: this.time1, field: Fields.Field2,
        teamA: 'Nhì A', teamB: 'Nhất B'
      },
      {
        time: this.time1, field: Fields.Field3,
        teamA: 'Ba A', teamB: 'Bốn B'
      },
      {
        time: this.time1, field: Fields.Field4,
        teamA: 'Bốn A', teamB: 'Ba B'
      }
    ];
    // Final
    this.finals= [      
      {
        time: this.time2, field: Fields.Field1,
        teamA: 'Thua BK1 (D1)', teamB: 'Thua BK2 (D1)'
      },
      {
        time: this.time2, field: Fields.Field2,
        teamA: 'Thua BK1 (D2)', teamB: 'Thua BK2 (D2)'
      },
      {
        time: this.time2, field: Fields.Field3,
        teamA: 'Thắng BK1 (D2)', teamB: 'Thắng BK2 (D2)'
      }      
    ];
    this.finalD1 = [{
      time: this.time3, field: Fields.Field1,
      teamA: 'Thắng BK1 (D1)', teamB: 'Thắng BK2 (D1)'
    }];
  }

  changeDisplayImages()
  {
    if (this.displayLogo)
    {
      this.message = 'Logo';
    }
    else
    {
      this.message = 'Màu áo';
    }
    this.displayLogo = !this.displayLogo;    
  }
}
