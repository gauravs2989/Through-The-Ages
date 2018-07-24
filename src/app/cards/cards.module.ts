import { MatMenuModule } from '@angular/material';
import { UnitCardComponent } from './unitcard/unit-card.component';
import { CardStackComponent } from './card-stack/card-stack.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimplecardComponent } from './simplecard/simplecard.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  declarations: [
    CardStackComponent,
    UnitCardComponent,
    SimplecardComponent
  ],
  providers: [],
  exports: [
    CardStackComponent,
    SimplecardComponent
  ]
})
export class CardsModule { }
