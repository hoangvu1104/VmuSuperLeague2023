"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7070],{7070:(M,u,n)=>{n.r(u),n.d(u,{PlayerResultPageModule:()=>f});var i=n(6895),d=n(433),l=n(8058),m=n(9430);let t=(()=>{class a{}return a.VMU="VMU",a.ASVMU="AS-VMU",a.Stechco1="Stechco1",a.Stechco2="Stechco2",a.RBJunior="RB Junior",a.BFC="BFC",a.FC3Mien="3 Mien FC",a.U45FC="U45 FC",a})();var e=n(1571);let g=(()=>{class a{constructor(){}ngOnInit(){}}return a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-toolbar-header"]],decls:4,vars:0,consts:[[1,"title"]],template:function(s,o){1&s&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title",0),e._uU(3," Viet Montreal United - Super League 2022-2023 "),e.qZA()()())},dependencies:[l.Gu,l.wd,l.sr],styles:[".title[_ngcontent-%COMP%]{text-align:center;font-size:small;font-weight:700}.logo-avatar[_ngcontent-%COMP%]{width:80px;height:80px}"]}),a})();function p(a,r){1&a&&(e.TgZ(0,"th",12),e._uU(1,"T\u1ed5ng \u0111i\u1ec3m (B\xe0n th\u1eafng + Ki\u1ebfn t\u1ea1o)"),e.qZA())}function y(a,r){1&a&&(e.TgZ(0,"th",12),e._uU(1,"B\xe0n th\u1eafng"),e.qZA())}function c(a,r){1&a&&(e.TgZ(0,"th",12),e._uU(1,"Ki\u1ebfn t\u1ea1o"),e.qZA())}function h(a,r){if(1&a&&(e.TgZ(0,"td",12),e._uU(1),e.qZA()),2&a){const s=e.oxw().$implicit;e.xp6(1),e.Oqu(s.goals+s.assists)}}function N(a,r){if(1&a&&(e.TgZ(0,"td",12),e._uU(1),e.qZA()),2&a){const s=e.oxw().$implicit;e.xp6(1),e.Oqu(s.goals)}}function C(a,r){if(1&a&&(e.TgZ(0,"td",12),e._uU(1),e.qZA()),2&a){const s=e.oxw().$implicit;e.xp6(1),e.Oqu(s.assists)}}function A(a,r){if(1&a&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.YNc(3,h,2,1,"td",5),e.YNc(4,N,2,1,"td",5),e.YNc(5,C,2,1,"td",5),e.qZA()),2&a){const s=r.$implicit,o=e.oxw();e.xp6(2),e.Oqu(s.playerName),e.xp6(1),e.Q6J("ngIf",o.isShownAll),e.xp6(1),e.Q6J("ngIf",o.isShownAll||o.showGoalsStatic),e.xp6(1),e.Q6J("ngIf",o.isShownAll||!o.showGoalsStatic)}}const w=[{path:"",component:(()=>{class a{constructor(){this.playerResults=[],this.isShownAll=!0,this.showGoalsStatic=!1,this.displayTitle="",this.showPlayersResult()}ngOnInit(){}changValue(s){"all"===s.detail.value?this.isShownAll=!0:(this.isShownAll=!1,this.showGoalsStatic="goals"===s.detail.value),this.showPlayersResult()}showPlayersResult(){this.displayTitle=this.isShownAll?"Danh s\xe1ch t\u1ed5ng h\u1ee3p b\xe0n th\u1eafng v\xe0 ki\u1ebfn t\u1ea1o":this.showGoalsStatic?"Danh s\xe1ch ghi b\xe0n":"Danh s\xe1ch ki\u1ebfn t\u1ea1o",this.playerResults=[{teamName:t.ASVMU,playerName:"Hoang Nhat",playerNumber:1,goals:17,assists:6,yellowCards:0,redCards:0},{teamName:t.ASVMU,playerName:"Vu Thang",playerNumber:2,goals:13,assists:12,yellowCards:0,redCards:0},{teamName:t.ASVMU,playerName:"An Vinh",playerNumber:3,goals:8,assists:9,yellowCards:0,redCards:0},{teamName:t.ASVMU,playerName:"Thai Son",playerNumber:4,goals:11,assists:5,yellowCards:0,redCards:0},{teamName:t.ASVMU,playerName:"Hoang Vu",playerNumber:1,goals:6,assists:3,yellowCards:0,redCards:0},{teamName:t.ASVMU,playerName:"Tuan Hao",playerNumber:1,goals:6,assists:6,yellowCards:0,redCards:0},{teamName:t.ASVMU,playerName:"Minh Luong",playerNumber:1,goals:6,assists:4,yellowCards:0,redCards:0},{teamName:t.ASVMU,playerName:"Ba Quang",playerNumber:1,goals:0,assists:1,yellowCards:0,redCards:0},{teamName:t.ASVMU,playerName:"Quang Huy",playerNumber:1,goals:1,assists:1,yellowCards:0,redCards:0},{teamName:t.ASVMU,playerName:"Minh Phat",playerNumber:1,goals:0,assists:4,yellowCards:0,redCards:0},{teamName:t.ASVMU,playerName:"Truong Nguyen",playerNumber:1,goals:1,assists:0,yellowCards:0,redCards:0},{teamName:t.ASVMU,playerName:"Quang Hien",playerNumber:1,goals:3,assists:1,yellowCards:0,redCards:0},{teamName:t.ASVMU,playerName:"Minh Triet",playerNumber:1,goals:5,assists:2,yellowCards:0,redCards:0},{teamName:t.ASVMU,playerName:"Viet Hung",playerNumber:1,goals:3,assists:1,yellowCards:0,redCards:0},{teamName:t.ASVMU,playerName:"Dinh Hoan",playerNumber:1,goals:3,assists:4,yellowCards:0,redCards:0},{teamName:t.ASVMU,playerName:"Duong Huy",playerNumber:1,goals:2,assists:1,yellowCards:0,redCards:0},{teamName:t.ASVMU,playerName:"Bui Tung",playerNumber:1,goals:0,assists:1,yellowCards:0,redCards:0},{teamName:t.ASVMU,playerName:"Cuong Nguyen",playerNumber:1,goals:1,assists:2,yellowCards:0,redCards:0},{teamName:t.ASVMU,playerName:"Cuong Le",playerNumber:1,goals:1,assists:1,yellowCards:0,redCards:0},{teamName:t.ASVMU,playerName:"Duan Nguyen",playerNumber:1,goals:1,assists:0,yellowCards:0,redCards:0},{teamName:t.ASVMU,playerName:"Duy Khanh",playerNumber:1,goals:2,assists:0,yellowCards:0,redCards:0},{teamName:t.ASVMU,playerName:"Thanh Tung",playerNumber:1,goals:2,assists:0,yellowCards:0,redCards:0},{teamName:t.ASVMU,playerName:"Kien Ho",playerNumber:1,goals:3,assists:2,yellowCards:0,redCards:0},{teamName:t.ASVMU,playerName:"Kevin Tran",playerNumber:1,goals:1,assists:1,yellowCards:0,redCards:0},{teamName:t.ASVMU,playerName:"Tuan Nguyen",playerNumber:1,goals:1,assists:0,yellowCards:0,redCards:0},{teamName:t.ASVMU,playerName:"Nguyen Nguyen",playerNumber:1,goals:0,assists:1,yellowCards:0,redCards:0}].filter(s=>!!this.isShownAll||(this.showGoalsStatic?s.goals>0:s.assists>0)).sort((s,o)=>this.showGoalsStatic?o.goals-s.goals:o.assists-s.assists)}}return a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-player-result"]],decls:38,vars:5,consts:[["size","3"],["src","/VmuSuperLeague2023/assets/images/VMU.jpg",2,"height","80px","width","80px","margin-bottom","-20px","margin-top","-30px"],["size","9"],[1,"team-name"],[1,"team-members"],["class","textDisplay",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"radioClass"],["value","all",3,"ionChange"],["slot","end","value","all"],["slot","end","value","goals"],["slot","end","value","assists"],[1,"textDisplay"]],template:function(s,o){1&s&&(e._UZ(0,"app-toolbar-header"),e.TgZ(1,"ion-content")(2,"ion-card")(3,"ion-card-header")(4,"ion-card-title")(5,"ion-grid")(6,"ion-row")(7,"ion-col",0),e._UZ(8,"ion-img",1),e.qZA(),e.TgZ(9,"ion-col",2)(10,"div",3),e._uU(11),e.qZA()()()()()(),e.TgZ(12,"ion-card-content")(13,"ion-list")(14,"table",4)(15,"thead")(16,"tr")(17,"th"),e._uU(18,"T\xean c\u1ea7u th\u1ee7"),e.qZA(),e.YNc(19,p,2,0,"th",5),e.YNc(20,y,2,0,"th",5),e.YNc(21,c,2,0,"th",5),e.qZA()(),e.TgZ(22,"tbody"),e.YNc(23,A,6,4,"tr",6),e.qZA()()()()(),e.TgZ(24,"ion-list",7)(25,"ion-radio-group",8),e.NdJ("ionChange",function(P){return o.changValue(P)}),e.TgZ(26,"ion-item")(27,"ion-label"),e._uU(28,"Danh s\xe1ch t\u1ed5ng h\u1ee3p b\xe0n th\u1eafng v\xe0 ki\u1ebfn t\u1ea1o"),e.qZA(),e._UZ(29,"ion-radio",9),e.qZA(),e.TgZ(30,"ion-item")(31,"ion-label"),e._uU(32,"Danh s\xe1ch ghi b\xe0n"),e.qZA(),e._UZ(33,"ion-radio",10),e.qZA(),e.TgZ(34,"ion-item")(35,"ion-label"),e._uU(36,"Danh s\xe1ch ki\u1ebfn t\u1ea1o"),e.qZA(),e._UZ(37,"ion-radio",11),e.qZA()()()()),2&s&&(e.xp6(11),e.Oqu(o.displayTitle),e.xp6(8),e.Q6J("ngIf",o.isShownAll),e.xp6(1),e.Q6J("ngIf",o.isShownAll||o.showGoalsStatic),e.xp6(1),e.Q6J("ngIf",o.isShownAll||!o.showGoalsStatic),e.xp6(2),e.Q6J("ngForOf",o.playerResults))},dependencies:[i.sg,i.O5,l.PM,l.FN,l.Zi,l.Dq,l.wI,l.W2,l.jY,l.Xz,l.Ie,l.Q$,l.q_,l.B7,l.se,l.Nd,l.U5,l.QI,g],styles:[".team-members[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.team-members[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .team-members[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:5px;text-align:center;border-bottom:1px solid #ddd}.team-members[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#f2f2f2}.team-name[_ngcontent-%COMP%]{font-size:25px;text-align:center;margin-top:-10px}"]}),a})()}];let S=(()=>{class a{}return a.\u0275fac=function(s){return new(s||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[m.Bz.forChild(w),m.Bz]}),a})(),f=(()=>{class a{}return a.\u0275fac=function(s){return new(s||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[i.ez,d.u5,l.Pc,S]}),a})()}}]);