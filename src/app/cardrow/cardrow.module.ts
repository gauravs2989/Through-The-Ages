import { CardInRowComponent } from './cardinrow/cardinrow.component';
import { CardRowComponent } from './cardrow.component';

import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { CardsModule } from 'cards/cards.module';

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