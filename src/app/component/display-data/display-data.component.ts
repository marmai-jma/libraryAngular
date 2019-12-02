import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit {
  name = "TOTO";
  nbr = 3+5;
  stateButton = false;
  srcImg = 'assets/index.jpg';
  variable ='';
  values='';
  myProperty='';

  constructor() { }

  switchButton(){
    this.stateButton=!this.stateButton;
  }

  onClickMe(){
    this.variable='bonjour la promo';
  }

  onKey(event:any)
  {
    this.variable += event.target.value + '|';
  }
  ngOnInit() {
  }

}
