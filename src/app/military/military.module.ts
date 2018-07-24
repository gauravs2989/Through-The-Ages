import { MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardsModule } from './../cards/cards.module';
import { MilitaryTechsComponent } from './military-techs/military-techs.component';
import { TacticsComponent } from './tactics/tactics.component';

@NgModule({
    imports: [
        CardsModule,
        CommonModule,
        BrowserAnimationsModule,
        MatMenuModule
    ],
    declarations: [
        MilitaryTechsComponent,
        TacticsComponent
    ],
    providers: [],
    exports: [
        MilitaryTechsComponent,
        TacticsComponent
    ]
  })
export class MilitaryModule { }