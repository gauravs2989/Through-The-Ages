import { Component, OnInit, Input } from '@angular/core';
import { BlueBankSection } from './bluebanksection';

@Component({
  selector: 'bluebanksection',
  templateUrl: './bluebanksection.component.html',
  styleUrls: [
    './bluebanksection.component.css',
    './../../../common/styles/tokens.css'
  ]
})
export class BlueBankSectionComponent implements OnInit {

  @Input('section')section: BlueBankSection;
  
  constructor() { 
   
  }
  
  ngOnInit() {
  }
}
