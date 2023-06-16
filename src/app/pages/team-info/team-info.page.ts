import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticVariable } from 'src/shared/staticVariable';
import { Teams } from 'src/shared/teams';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.page.html',
  styleUrls: ['./team-info.page.scss'],
})
export class TeamInfoPage implements OnInit {
  teamInfo: any;
  teamName: any;

  constructor(private route: ActivatedRoute) {
    this.getTeamInfo(Teams.FC3Mien);
  }

  getTeamInfo(teamName: string) {
    switch (teamName) {
      case Teams.FC3Mien:
        this.teamInfo = {
          teamName: teamName,
          teamLogoUrl:  `${StaticVariable.ImagesPath}${StaticVariable.FC3MienLogo}`,
          teamMembers: [
            { playerName: 'Thinh Ngo (C)', playerNumber: 1 },
            { playerName: 'Thao Tran', playerNumber: 2 },
            { playerName: 'Ha Nguyen', playerNumber: 3 },
            { playerName: 'Truong Pham', playerNumber: 4 },
            //{ playerName: 'Cuong Nguyen', playerNumber: 5 },
            { playerName: 'Tung Nguyen', playerNumber: 6 },
            { playerName: 'Tung Uong', playerNumber: 7 },
            { playerName: 'Phuoc Nguyen', playerNumber: 8 },
            { playerName: 'Trung Kien Nguyen', playerNumber: 9 },
            { playerName: 'Bao Tran', playerNumber: 10 },
            { playerName: 'Phi Hung Phan', playerNumber: 11 },
            { playerName: 'Phu Nguyen', playerNumber: 12 },
            { playerName: 'Trong Luat Nguyen', playerNumber: 13 },
            { playerName: 'Hanh Van', playerNumber: 14 },
            { playerName: 'Xuan Nhu Le', playerNumber: 15 },
            { playerName: 'Huu Khoi Pham', playerNumber: 16 },
            { playerName: 'Quang Pham', playerNumber: 17 },
            { playerName: 'Vy To', playerNumber: 18 },
            //{ playerName: 'Hoang Lan Dinh', playerNumber: 19 }
          ].sort((a, b) => {
            return a.playerNumber - b.playerNumber;
          })
        };
        break;
      case Teams.BFC:
        this.teamInfo = {
          teamName: teamName,
          teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.BFCLogo}`,
          teamMembers: [
            { playerName: 'Name1', playerNumber: 1 },
            { playerName: 'Name1', playerNumber: 5 },
            { playerName: 'Name1', playerNumber: 9 },
            { playerName: 'Name1', playerNumber: 4 },
            { playerName: 'Name1', playerNumber: 7 },
            { playerName: 'Name1', playerNumber: 12 },
            { playerName: 'Name1', playerNumber: 8 },
            { playerName: 'Name1', playerNumber: 4 }
          ].sort((a, b) => {
            return a.playerNumber - b.playerNumber;
          })
        };
        break;
      case Teams.Stechco1:
        this.teamInfo = {
          teamName: teamName,
          teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.StechcoLogo}`,
          teamMembers: [
            { playerName: 'Name1', playerNumber: 1 },
            { playerName: 'Name1', playerNumber: 5 },
            { playerName: 'Name1', playerNumber: 9 },
            { playerName: 'Name1', playerNumber: 4 },
            { playerName: 'Name1', playerNumber: 7 },
            { playerName: 'Name1', playerNumber: 12 },
            { playerName: 'Name1', playerNumber: 8 },
            { playerName: 'Name1', playerNumber: 4 }
          ].sort((a, b) => {
            return a.playerNumber - b.playerNumber;
          })
        };
        break;
      case Teams.Stechco2:
        this.teamInfo = {
          teamName: teamName,
          teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.StechcoLogo}`,
          teamMembers: [
            { playerName: 'Name1', playerNumber: 1 },
            { playerName: 'Name1', playerNumber: 5 },
            { playerName: 'Name1', playerNumber: 9 },
            { playerName: 'Name1', playerNumber: 4 },
            { playerName: 'Name1', playerNumber: 7 },
            { playerName: 'Name1', playerNumber: 12 },
            { playerName: 'Name1', playerNumber: 8 },
            { playerName: 'Name1', playerNumber: 4 }
          ].sort((a, b) => {
            return a.playerNumber - b.playerNumber;
          })
        };
        break;      
      case Teams.VMU:
        this.teamInfo = {
          teamName: teamName,
          teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.VMULogo}`,
          teamMembers: [
            { playerName: 'Name1', playerNumber: 1 },
            { playerName: 'Name1', playerNumber: 5 },
            { playerName: 'Name1', playerNumber: 9 },
            { playerName: 'Name1', playerNumber: 4 },
            { playerName: 'Name1', playerNumber: 7 },
            { playerName: 'Name1', playerNumber: 12 },
            { playerName: 'Name1', playerNumber: 8 },
            { playerName: 'Name1', playerNumber: 4 }
          ].sort((a, b) => {
            return a.playerNumber - b.playerNumber;
          })
        };
        break;
      case Teams.ASVMU:
        this.teamInfo = {
          teamName: teamName,
          teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.VMULogo}`,
          teamMembers: [
            { playerName: 'Name1', playerNumber: 1 },
            { playerName: 'Name1', playerNumber: 5 },
            { playerName: 'Name1', playerNumber: 9 },
            { playerName: 'Name1', playerNumber: 4 },
            { playerName: 'Name1', playerNumber: 7 },
            { playerName: 'Name1', playerNumber: 12 },
            { playerName: 'Name1', playerNumber: 8 },
            { playerName: 'Name1', playerNumber: 4 }
          ].sort((a, b) => {
            return a.playerNumber - b.playerNumber;
          })
        };
        break;
      case Teams.RBJunior:
        this.teamInfo = {
          teamName: teamName,
          teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.RBJuniorLogo}`,
          teamMembers: [
            { playerName: 'Name1', playerNumber: 1 },
            { playerName: 'Name1', playerNumber: 5 },
            { playerName: 'Name1', playerNumber: 9 },
            { playerName: 'Name1', playerNumber: 4 },
            { playerName: 'Name1', playerNumber: 7 },
            { playerName: 'Name1', playerNumber: 12 },
            { playerName: 'Name1', playerNumber: 8 },
            { playerName: 'Name1', playerNumber: 4 }
          ].sort((a, b) => {
            return a.playerNumber - b.playerNumber;
          })
        };
        break;
      case Teams.U45FC:
        this.teamInfo = {
          teamName: teamName,
          teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.U45FCLogo}`,
          teamMembers: [
            { playerName: 'Name1', playerNumber: 1 },
            { playerName: 'Name1', playerNumber: 5 },
            { playerName: 'Name1', playerNumber: 9 },
            { playerName: 'Name1', playerNumber: 4 },
            { playerName: 'Name1', playerNumber: 7 },
            { playerName: 'Name1', playerNumber: 12 },
            { playerName: 'Name1', playerNumber: 8 },
            { playerName: 'Name1', playerNumber: 4 }
          ].sort((a, b) => {
            return a.playerNumber - b.playerNumber;
          })
        };
        break;
    }
  }

  ngOnInit() {
    this.teamName = this.route.snapshot.paramMap.get('teamName');
    console.log('this.teamName', this.teamName);
    this.getTeamInfo(this.teamName);
  }
}
