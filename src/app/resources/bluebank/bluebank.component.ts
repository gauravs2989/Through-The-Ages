import { BlueBankSection } from './bluebanksection/bluebanksection';
import { Component, OnInit } from '@angular/core';
import { BlueCubeService } from '../../common/services/blue-cube.service';
import { CorruptionService } from '../../common/services/corruption.service';

@Component({
  selector: 'bluebank',
  templateUrl: './bluebank.component.html',
  styleUrls: ['./bluebank.component.css']
})
export class BlueBankComponent implements OnInit {

  sections: BlueBankSection[] = [];
  private sectionIndex: number = 0;
  private activeSection: BlueBankSection;
  private initialCapacity: number = 16;

  constructor(private blueCubeService: BlueCubeService, private corruptionService: CorruptionService) { 
    this.sections.push(new BlueBankSection(5, -6));
    this.sections.push(new BlueBankSection(5, -4));
    this.sections.push(new BlueBankSection(6, -2));

    this.activeSection = this.sections[this.sectionIndex];

    this.blueCubeService.blueCubeRemoved$.subscribe((cubesToRemove) => {
      this.removeCubes(cubesToRemove);
    });

    this.blueCubeService.blueCubeAdded$.subscribe((cubesToAdd)=> {
      this.addCubes(cubesToAdd)
    });
  }

  ngOnInit() {
    this.addCubes(this.initialCapacity);
  }

  private removeCubes(cubesToRemove) {
    for(let i = 0; i < cubesToRemove; i++) {
      this.remove();
    }
  }

  private addCubes(cubesToAdd) {
    for(let i = 0; i < cubesToAdd; i++) {
      this.add();
   }
  }

  private add() {
    if(this.activeSection.isFull()) {
      this.sectionIndex++;
      this.activeSection = this.sections[this.sectionIndex];

      if (!this.activeSection) {
        this.appendToLastSection();
        return;
      }
    }
    this.activeSection.add();
  }

  private remove() {
    this.activeSection.remove();

    if(this.activeSection.isEmpty()) {
      this.corruptionService.setCorruption(this.activeSection.getCorruption());
      let isFirstSection = (this.sections.indexOf(this.activeSection) === 0);
      if(isFirstSection) {
        return;
      }
      this.sectionIndex--;
      this.activeSection = this.sections[this.sectionIndex];
    }
  }

  private appendToLastSection() {
    this.activeSection = this.getLastSection();
    this.sectionIndex = this.sections.indexOf(this.activeSection);
    this.activeSection.append();
  }

  private getLastSection() {
    return this.sections[this.sections.length - 1];
  }
}