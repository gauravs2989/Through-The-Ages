import { CardsModule } from '../cards/cards.module';
import { AristotleComponent } from './components/aristotle.component';
import { HammurabiComponent } from './components/hammurabi.components';
import { JuliusCaesarComponent } from './components/julius.component';
import { MosesComponent } from './components/moses.component';
import { NoLeaderComponent } from './components/no-leader.component';
import { AlexanderTheGreatComponent } from './components/alexander.component';
import { HomerComponent } from './components/homer.component';
import { LeadersComponentService } from './leaders-component.service';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { LeaderComponent } from "./leader.component";
import { LeaderHostDirective } from './leader-host.directive';

@NgModule({
    imports: [
        CommonModule,
        CardsModule
    ],
    declarations: [
        LeaderComponent,
        LeaderHostDirective,
        NoLeaderComponent,
        HomerComponent,
        AlexanderTheGreatComponent,
        JuliusCaesarComponent,
        MosesComponent,
        HammurabiComponent,
        AristotleComponent
    ],
    providers: [
        LeadersComponentService
    ],
    exports: [
        LeaderComponent
    ],
    entryComponents: [
        NoLeaderComponent,
        HomerComponent,
        AlexanderTheGreatComponent,
        JuliusCaesarComponent,
        MosesComponent,
        HammurabiComponent,
        AristotleComponent
    ]
})
export class LeadersModule {}