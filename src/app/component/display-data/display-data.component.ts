import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

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

  constructor() { }

  switchButton(){
    this.stateButton=!this.stateButton;
  }

  ngOnInit() {
  }

}
