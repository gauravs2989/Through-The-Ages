import { HangingGardensComponent } from './components/hanginggardens.component';
import { ColossusComponent } from './components/colossus.component';
import { PyramidsComponent } from './components/pyramids.component';
import { LibraryOfAlexandriaComponent } from './components/libraryofalexandria.component';

import { Injectable } from '@angular/core';

@Injectable()
export class WondersComponentService {
    
    private components = {
        "Pyramids": PyramidsComponent,
        "Colossus": ColossusComponent,
        "Hanging Gardens": HangingGardensComponent,
        "Library of Alexandria": LibraryOfAlexandriaComponent
    }

    constructor() {}

    getComponent(cardname) {
        return this.components[cardname];
    }

}