"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[869],{4869:(x,g,e)=>{e.r(g),e.d(g,{WattsHappenedModule:()=>T});var m=e(6814),d=e(95),s=e(5562),v=e(1272),p=e(1303),f=e(3692),a=e(9468),u=e(3110),C=e(3513);let b=(()=>{var t;class o{constructor(){this.mainChart={},this.initMainChart()}random(r,c){return Math.floor(Math.random()*(c-r+1)+r)}initMainChart(r="Month"){(0,u.Z)("--cui-success");const l=(0,u.Z)("--cui-info")??"#20a8d8",U=(0,C.Z)(l,10);(0,u.Z)("--cui-danger");this.mainChart.elements="Month"===r?12:27,this.mainChart.Data1=[],this.mainChart.Data2=[],this.mainChart.Data3=[];for(let n=0;n<=this.mainChart.elements;n++)this.mainChart.Data1.push(this.random(50,240)),this.mainChart.Data2.push(this.random(20,160)),this.mainChart.Data3.push(65);let h=[];if("Month"===r)h=["January","February","March","April","May","June","July","August","September","October","November","December"];else{const n=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];h=n.concat(n,n,n)}const w=[{data:this.mainChart.Data1,label:"Current",backgroundColor:U,borderColor:l,pointHoverBackgroundColor:l,borderWidth:2,fill:!0}],k={maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{callbacks:{labelColor:function(n){return{backgroundColor:n.dataset.borderColor}}}}},scales:{x:{grid:{drawOnChartArea:!1}},y:{beginAtZero:!0,max:250,ticks:{maxTicksLimit:5,stepSize:Math.ceil(50)}}},elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}};this.mainChart.type="bar",this.mainChart.options=k,this.mainChart.data={datasets:w,labels:h}}}return(t=o).\u0275fac=function(r){return new(r||t)},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"any"}),o})();const Z=function(){return{"marginTop.px":40}},A=[{path:"",component:(()=>{var t;class o{constructor(r){this.chartsData=r,this.months=["January","February","March","April","May","June","July","August","September","October","November","December"],this.chartBarData={labels:[...this.months].slice(0,7),datasets:[{label:"GitHub Commits",backgroundColor:"#f87979",data:[40,20,12,39,17,42,65]}]},this.users=[{name:"Yiorgos Avraamu",state:"New",registered:"Jan 1, 2021",country:"Us",usage:50,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Mastercard",activity:"10 sec ago",avatar:"./assets/img/avatars/1.jpg",status:"success",color:"success"},{name:"Avram Tarasios",state:"Recurring ",registered:"Jan 1, 2021",country:"Br",usage:10,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Visa",activity:"5 minutes ago",avatar:"./assets/img/avatars/2.jpg",status:"danger",color:"info"},{name:"Quintin Ed",state:"New",registered:"Jan 1, 2021",country:"In",usage:74,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Stripe",activity:"1 hour ago",avatar:"./assets/img/avatars/3.jpg",status:"warning",color:"warning"},{name:"En\xe9as Kwadwo",state:"Sleep",registered:"Jan 1, 2021",country:"Fr",usage:98,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Paypal",activity:"Last month",avatar:"./assets/img/avatars/4.jpg",status:"secondary",color:"danger"},{name:"Agapetus Tade\xe1\u0161",state:"New",registered:"Jan 1, 2021",country:"Es",usage:22,period:"Jun 11, 2021 - Jul 10, 2021",payment:"ApplePay",activity:"Last week",avatar:"./assets/img/avatars/5.jpg",status:"success",color:"primary"},{name:"Friderik D\xe1vid",state:"New",registered:"Jan 1, 2021",country:"Pl",usage:43,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Amex",activity:"Yesterday",avatar:"./assets/img/avatars/6.jpg",status:"info",color:"dark"}],this.mainChart={},this.chart=[],this.trafficRadioGroup=new d.nJ({trafficRadio:new d.p4("Month")})}ngOnInit(){this.initCharts()}initCharts(){this.mainChart=this.chartsData.mainChart}setTrafficPeriod(r){this.trafficRadioGroup.setValue({trafficRadio:r}),this.chartsData.initMainChart(r),this.initCharts()}}return(t=o).\u0275fac=function(r){return new(r||t)(a.Y36(b))},t.\u0275cmp=a.Xpm({type:t,selectors:[["ng-component"]],decls:49,vars:9,consts:[[1,"mb-4"],["sm","5"],["id","traffic",1,"card-title","mb-0"],[1,"small","text-medium-emphasis"],["sm","7",1,"d-none","d-md-block"],[3,"formGroup"],[3,"data","height","ngStyle","options","type"],[1,"text-center",3,"md","xs"],[1,"mb-sm-2","mb-0"],[1,"text-medium-emphasis"],["thin","",1,"mt-2"],["color","success","value","40"],["color","info","value","20"],["color","warning","value","60"],["color","danger","value","80"],["value","40"]],template:function(r,c){1&r&&(a.TgZ(0,"c-card",0)(1,"c-card-body")(2,"c-row")(3,"c-col",1)(4,"h4",2),a._uU(5,"Traffic"),a.qZA(),a.TgZ(6,"div",3),a._uU(7,"January - December 2021"),a.qZA()(),a.TgZ(8,"c-col",4),a._UZ(9,"form",5),a.qZA()(),a.TgZ(10,"c-chart",6),a._uU(11," Main chart "),a.qZA()(),a.TgZ(12,"c-card-footer")(13,"c-row",7)(14,"c-col",8)(15,"div",9),a._uU(16,"Visits"),a.qZA(),a.TgZ(17,"strong"),a._uU(18,"29.703 Users (40%)"),a.qZA(),a.TgZ(19,"c-progress",10),a._UZ(20,"c-progress-bar",11),a.qZA()(),a.TgZ(21,"c-col",8)(22,"div",9),a._uU(23,"Unique"),a.qZA(),a.TgZ(24,"strong"),a._uU(25,"24.093 Users (20%)"),a.qZA(),a.TgZ(26,"c-progress",10),a._UZ(27,"c-progress-bar",12),a.qZA()(),a.TgZ(28,"c-col",8)(29,"div",9),a._uU(30,"Page views"),a.qZA(),a.TgZ(31,"strong"),a._uU(32,"78.706 Views (60%)"),a.qZA(),a.TgZ(33,"c-progress",10),a._UZ(34,"c-progress-bar",13),a.qZA()(),a.TgZ(35,"c-col",8)(36,"div",9),a._uU(37,"New Users"),a.qZA(),a.TgZ(38,"strong"),a._uU(39,"22.123 Users (80%)"),a.qZA(),a.TgZ(40,"c-progress",10),a._UZ(41,"c-progress-bar",14),a.qZA()(),a.TgZ(42,"c-col",8)(43,"div",9),a._uU(44,"Bounce Rate"),a.qZA(),a.TgZ(45,"strong"),a._uU(46,"Average Rate (40.15%)"),a.qZA(),a.TgZ(47,"c-progress",10),a._UZ(48,"c-progress-bar",15),a.qZA()()()()()),2&r&&(a.xp6(9),a.Q6J("formGroup",c.trafficRadioGroup),a.xp6(1),a.Q6J("data",c.mainChart.data)("height",300)("ngStyle",a.DdM(8,Z))("options",c.mainChart.options)("type",c.mainChart.type),a.xp6(3),a.Q6J("md",5)("xs",1))},dependencies:[s.AkF,s.yue,s.xUh,m.PC,s.Yp0,s.iok,s.t15,s.RIQ,d._Y,d.JL,d.sg,p.d],styles:["[_nghost-%COMP%]   .legend[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:x-small}"]}),o})(),data:{title:$localize`WattsHappened`}}];let J=(()=>{var t;class o{}return(t=o).\u0275fac=function(r){return new(r||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[f.Bz.forChild(A),f.Bz]}),o})();var D=e(9775),M=e(6118);let T=(()=>{var t;class o{}return(t=o).\u0275fac=function(r){return new(r||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[J,s.dTQ,s.dGk,v.QX,s.P4_,m.ez,s.zE6,s.qek,d.UX,s.hJ1,s.ejP,s.hJ1,s.ga2,p.N,s.FxY,s.U$I,D.WidgetsModule,M.ChartsModule]}),o})()}}]);