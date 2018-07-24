import { MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsModule } from './../cards/cards.module';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { UrbanBuildingsComponent } from './urban-buildings/urban-buildings.component';
import { LabsComponent } from './components/labs.component';
import { TemplesComponent } from './components/temples.component';
import { TheatersComponent } from './components/theaters.component';
import { LibrariesComponent } from './components/libraries.component';
import { ArenasComponent } from './components/arenas.component';

@NgModule({
    imports: [
        CardsModule,
        CommonModule,
        BrowserAnimationsModule,
        MatMenuModule
    ],
    declarations: [
        UrbanBuildingsComponent,
        LabsComponent,
        TemplesComponent,
        TheatersComponent,
        LibrariesComponent,
        ArenasComponent
    ],
    providers: [],
    exports: [
        UrbanBuildingsComponent
    ]
})
export class UrbanBuildingsModule {}