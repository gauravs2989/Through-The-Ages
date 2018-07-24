import { MosesComponent } from './components/moses.component';
import { JuliusCaesarComponent } from './components/julius.component';
import { NoLeaderComponent } from './components/no-leader.component';
import { HomerComponent } from './components/homer.component';
import { AlexanderTheGreatComponent } from './components/alexander.component';
import { Injectable } from "@angular/core";
import { HammurabiComponent } from './components/hammurabi.components';
import { AristotleComponent } from './components/aristotle.component';

@Injectable()
export class LeadersService {

    private components = {
        "Homer": HomerComponent,
        "Alexander the Great": AlexanderTheGreatComponent,
        "Julius Caesar": JuliusCaesarComponent,
        "Moses": MosesComponent,
        "Hammurabi": HammurabiComponent,
        "Aristotle": AristotleComponent
    }

    getComponent(name) {
        if (!name) {
            return NoLeaderComponent;
        }
        return this.components[name];
    }

}