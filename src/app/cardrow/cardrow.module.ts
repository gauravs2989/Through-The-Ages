import { CardInRowComponent } from './cardinrow/cardinrow.component';
import { CardRowComponent } from './cardrow.component';

import { CardsModule } from 'cards/cards.module';

import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        CommonModule, 
        CardsModule
    ],
    declarations: [
        CardRowComponent,
        CardInRowComponent
    ],
    exports: [
        CardRowComponent
    ],
    providers: []
})
export class CardRowModule {}