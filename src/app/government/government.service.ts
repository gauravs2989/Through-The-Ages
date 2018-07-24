import { FundamentalismComponent } from './components/fundamentalism.component';
import { CommunismComponent } from './components/communism.component';
import { BaseGovernmentComponent } from './components/basegovernment.component';
import { TheocracyComponent } from './components/theocracy.component';
import { Injectable } from '@angular/core';
import { DemocracyComponent } from './components/democracy.component';

@Injectable()
export class GovernmentService {
    
    private componentList = {
        "Despotism": BaseGovernmentComponent,
        "Theocracy": TheocracyComponent,
        "Monarchy": BaseGovernmentComponent,
        "Republic": BaseGovernmentComponent,
        "Constitutional Monarchy": BaseGovernmentComponent,
        "Democracy": DemocracyComponent,
        "Communism": CommunismComponent,
        "Fundamentalism": FundamentalismComponent
    }

    getComponent(name) {
        return this.componentList[name];
    }
}
