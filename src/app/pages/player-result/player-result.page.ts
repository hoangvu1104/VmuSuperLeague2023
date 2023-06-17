import { Component, OnInit } from '@angular/core';
import { PlayerResult } from 'src/models/PlayerResult';
import { Teams } from 'src/shared/teams';

@Component({
  selector: 'app-player-result',
  templateUrl: './player-result.page.html',
  styleUrls: ['./player-result.page.scss'],
})
export class PlayerResultPage implements OnInit {
  playerResults: PlayerResult[] = [];
  isShownAll = true;
  showGoalsStatic = false;
  displayTitle = '';
  constructor() {
    this.showPlayersResult();
  }

  ngOnInit() {}

  changValue(event: any) {
    if (event.detail.value === 'all') {
      this.isShownAll = true;
    } else {
      this.isShownAll = false;
      this.showGoalsStatic = event.detail.value === 'goals';
    }
    this.showPlayersResult();
  }

  showPlayersResult() {
    if (this.isShownAll) {
      this.displayTitle = 'Danh sách tổng hợp bàn thắng và kiến tạo';
    } else {
      if (this.showGoalsStatic) {
        this.displayTitle = 'Danh sách ghi bàn';
      } else {
        this.displayTitle = 'Danh sách kiến tạo';
      }
    }

    this.playerResults = [
      {
        teamName: Teams.ASVMU,
        playerName: 'Hoang Nhat',
        playerNumber: 1,
        goals: 17,
        assists: 6,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Vu Thang',
        playerNumber: 2,
        goals: 13,
        assists: 12,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'An Vinh',
        playerNumber: 3,
        goals: 8,
        assists: 9,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Thai Son',
        playerNumber: 4,
        goals: 11,
        assists: 5,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Hoang Vu',
        playerNumber: 1,
        goals: 6,
        assists: 3,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Tuan Hao',
        playerNumber: 1,
        goals: 6,
        assists: 6,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Minh Luong',
        playerNumber: 1,
        goals: 6,
        assists: 4,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Ba Quang',
        playerNumber: 1,
        goals: 0,
        assists: 1,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Quang Huy',
        playerNumber: 1,
        goals: 1,
        assists: 1,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Minh Phat',
        playerNumber: 1,
        goals: 0,
        assists: 4,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Truong Nguyen',
        playerNumber: 1,
        goals: 1,
        assists: 0,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Quang Hien',
        playerNumber: 1,
        goals: 3,
        assists: 1,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Minh Triet',
        playerNumber: 1,
        goals: 5,
        assists: 2,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Viet Hung',
        playerNumber: 1,
        goals: 3,
        assists: 1,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Dinh Hoan',
        playerNumber: 1,
        goals: 3,
        assists: 4,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Duong Huy',
        playerNumber: 1,
        goals: 2,
        assists: 1,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Bui Tung',
        playerNumber: 1,
        goals: 0,
        assists: 1,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Cuong Nguyen',
        playerNumber: 1,
        goals: 1,
        assists: 2,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Cuong Le',
        playerNumber: 1,
        goals: 1,
        assists: 1,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Duan Nguyen',
        playerNumber: 1,
        goals: 1,
        assists: 0,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Duy Khanh',
        playerNumber: 1,
        goals: 2,
        assists: 0,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Thanh Tung',
        playerNumber: 1,
        goals: 2,
        assists: 0,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Kien Ho',
        playerNumber: 1,
        goals: 3,
        assists: 2,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Kevin Tran',
        playerNumber: 1,
        goals: 1,
        assists: 1,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Tuan Nguyen',
        playerNumber: 1,
        goals: 1,
        assists: 0,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Nguyen Nguyen',
        playerNumber: 1,
        goals: 0,
        assists: 1,
        yellowCards: 0,
        redCards: 0,
      },
    ]
      .filter((p) => {
        if (this.isShownAll) {
          return true;
        } else if (this.showGoalsStatic) {
          return p.goals > 0;
        } else {
          return p.assists > 0;
        }
      })
      .sort((a, b) => {
        if (this.isShownAll) {
          return b.goals + b.assists - (a.goals + a.assists);
        } else {
          if (this.showGoalsStatic) {
            return b.goals - a.goals;
          } else {
            return b.assists - a.assists;
          }
        }
      });
  }
}
