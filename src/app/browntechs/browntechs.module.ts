import { BrownTechsComponent } from './brown-techs/brown-techs.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { CardsModule } from './../cards/cards.module';
import { FarmsComponent } from './farms/farms.component';
import { MinesComponent } from './mines/mines.component';

@NgModule({
    imports: [
        CommonModule,
        CardsModule
    ],
    declarations: [
        BrownTechsComponent,
        FarmsComponent,
        MinesComponent
    ],
    providers: [],
    exports: [
        BrownTechsComponent
    ]
})
export class BrownTechsModule {}