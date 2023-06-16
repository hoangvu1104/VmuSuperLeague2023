import { Component, OnInit } from '@angular/core';
import { TeamResult } from 'src/models/TeamResult';
import { CommonFunctions } from 'src/shared/commonFunctions';
import { Teams } from 'src/shared/teams';

@Component({
  selector: 'app-table-result',
  templateUrl: './table-result.page.html',
  styleUrls: ['./table-result.page.scss'],
})
export class TableResultPage implements OnInit {
  teamResultGroupA: TeamResult[] = [];
  teamResultGroupB: TeamResult[] = [];
  displayLogo: boolean = false;
  message: string = 'Hiển thị logo';
  constructor(public commonFunctions : CommonFunctions) { }

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

  ngOnInit() {
    this.teamResultGroupA = [
      {
        teamName : Teams.VMU,
        point: 0,
        won: 0,
        lost: 0,
        draw: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        yellowCards: 0,
        redCards: 0
      },
      {
        teamName : Teams.Stechco2,
        point: 0,
        won: 0,
        lost: 0,
        draw: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        yellowCards: 0,
        redCards: 0
      },
      {
        teamName : Teams.U45FC,
        point: 0,
        won: 0,
        lost: 0,
        draw: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        yellowCards: 0,
        redCards: 0
      },
      {
        teamName : Teams.RBJunior,
        point: 0,
        won: 0,
        lost: 0,
        draw: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        yellowCards: 0,
        redCards: 0
      }
    ].sort((a, b) => {
      return b.point - a.point ||
            (b.goalsFor - b.goalsAgainst) - (a.goalsFor - a.goalsAgainst) ||
            b.goalsFor - a.goalsFor;
    });    

    this.teamResultGroupB = [
      {
        teamName : Teams.FC3Mien,
        point: 0,
        won: 0,
        lost: 0,
        draw: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        yellowCards: 0,
        redCards: 0
      },
      {
        teamName : Teams.BFC,
        point: 0,
        won: 0,
        lost: 0,
        draw: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        yellowCards: 0,
        redCards: 0
      },
      {
        teamName : Teams.Stechco1,
        point: 0,
        won: 0,
        lost: 0,
        draw: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        yellowCards: 0,
        redCards: 0
      },
      {
        teamName : Teams.ASVMU,
        point: 0,
        won: 0,
        lost: 0,
        draw: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        yellowCards: 0,
        redCards: 0
      }
    ].sort((a, b) => {
      return b.point - a.point ||
            (b.goalsFor - b.goalsAgainst) - (a.goalsFor - a.goalsAgainst) ||
            b.goalsFor - a.goalsFor;
    });  
  }
}
