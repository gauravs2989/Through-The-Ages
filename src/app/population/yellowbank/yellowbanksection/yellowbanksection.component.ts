import { YellowBankSection } from './yellowbanksection';
import { Component, OnInit, Input } from '@angular/core';
import { Token } from '../../../common/Token';

@Component({
  selector: 'yellowbanksection',
  templateUrl: './yellowbanksection.component.html',
  styleUrls: [
    './yellowbanksection.component.css',
    './../../../common/styles/tokens.css'
  ]
})
export class YellowBankSectionComponent implements OnInit {

  @Input('section') private section: YellowBankSection;
  
  constructor() {
  }

  ngOnInit() {
  }
}
