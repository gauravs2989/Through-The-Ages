import { CardsModule } from 'cards/cards.module';
import { FundamentalismComponent } from './components/fundamentalism.component';
import { BaseGovernmentComponent } from './components/basegovernment.component';
import { TheocracyComponent } from './components/theocracy.component';
import { DemocracyComponent } from './components/democracy.component';
import { CommunismComponent } from './components/communism.component';
import { GovernmentService } from './government.service';
import { GovernmentComponent } from './government.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { GovernmentHostDirective } from './government-host.directive';

@NgModule({
    imports: [
        CommonModule,
        CardsModule
    ],
    declarations: [
        GovernmentComponent,
        GovernmentHostDirective,
        BaseGovernmentComponent,
        TheocracyComponent,
        DemocracyComponent,
        CommunismComponent, 
        FundamentalismComponent
    ],
    providers: [
        GovernmentService
    ],
    exports: [
        GovernmentComponent
    ],
    entryComponents: [
        BaseGovernmentComponent,
        TheocracyComponent,
        DemocracyComponent,
        CommunismComponent,
        FundamentalismComponent
    ]
})
export class GovernmentModule {}