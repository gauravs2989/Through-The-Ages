import { Component, OnInit } from '@angular/core';
import { CorruptionService } from '../../../common/services/corruption.service';

@Component({
  selector: 'corruption',
  templateUrl: './corruption.component.html',
  styleUrls: ['./corruption.component.css']
})
export class CorruptionComponent implements OnInit {

  constructor(private corruptionService: CorruptionService) { }

  ngOnInit() {
  }

  private hasCorruption() : boolean {
    return this.corruptionService.hasCorruption();
    // return false;
  }

}
