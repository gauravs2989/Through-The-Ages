import { CardsModule } from 'cards/cards.module';
import { MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HangingGardensComponent } from './components/hanginggardens.component';
import { ColossusComponent } from './components/colossus.component';
import { PyramidsComponent } from './components/pyramids.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { WondersComponent } from './wonders.component';
import { WondersComponentService } from './wonders.components.service';
import { WonderHostDirective } from './wonder-host.directive';
import { LibraryOfAlexandriaComponent } from './components/libraryofalexandria.component';
import { WonderGalleryComponent } from './wonder-gallery/wonder-gallery.component';
import { WonderConstructionMessage } from './wonder-construction-message.pipe';

@NgModule({
    imports: [
        CommonModule,
        CardsModule,
        BrowserAnimationsModule,
        MatMenuModule
    ],
    declarations: [
        WondersComponent,
        PyramidsComponent,
        ColossusComponent,
        LibraryOfAlexandriaComponent,
        HangingGardensComponent,
        WonderHostDirective,
        WonderGalleryComponent,
        WonderConstructionMessage
    ],
    providers: [
        WondersComponentService
    ],
    exports: [
        WondersComponent
    ],
    entryComponents: [
        PyramidsComponent,
        ColossusComponent,
        HangingGardensComponent, 
        LibraryOfAlexandriaComponent
    ]
})
export class WondersModule {}