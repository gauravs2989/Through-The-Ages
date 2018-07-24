import { RatingsComponent } from './ratings/ratings.component';
import { TacticsService } from './common/services/tactics.service';
import { HappinessService } from './common/services/happiness.service';
import { CultureService } from './common/services/culture.service';
import { StrengthService } from './common/services/strength.service';
import { ColonizationService } from './common/services/colonization.service';
import { ScienceService } from './common/services/science.service';
import { YellowCubeService } from './common/services/yellow-cube.service';
import { ActionsService } from './common/services/actions.service';
import { WondersService } from './common/services/wonders.service';
import { BuildService } from './common/services/build.service';
import { UpgradeService } from './common/services/upgrade.service';
import { TransactionService } from './common/services/transaction.service';
import { ResourceService } from './common/services/resource.service';
import { FoodService } from './common/services/food.service';
import { BlueCubeService } from './common/services/blue-cube.service';
import { DiscoveredTechsService } from './common/services/discovered-techs.service';

import { CardsModule } from './cards/cards.module';
import { GovernmentModule } from './government/government.module';
import { ResourcesModule } from './resources/resources.module';
import { PopulationModule } from './population/population.module';
import { MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MilitaryModule } from './military/military.module';
import { UrbanBuildingsModule } from './urbanbuildings/urbanbuildings.module';
import { WondersModule } from './wonders/wonders.module';
import { BrownTechsModule } from './browntechs/browntechs.module';
import { CardRowModule } from './cardrow/cardrow.module';
import { BrowserModule } from '@angular/platform-browser';
import { LeadersModule } from './leaders/leaders.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CardService } from './cards/card.service';
import { CardRowService } from './common/services/cardrow.service';

@NgModule({
  declarations: [
    AppComponent,
    RatingsComponent
  ],
  imports: [
    CardsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    CardRowModule,
    BrownTechsModule,
    PopulationModule,
    ResourcesModule,
    WondersModule,
    UrbanBuildingsModule,
    GovernmentModule,
    LeadersModule,
    MilitaryModule
  ],
  providers: [
    CardService,
    CardRowService,
    ActionsService,
    FoodService,
    ResourceService,
    CultureService,
    StrengthService,
    ColonizationService,
    ScienceService,
    HappinessService,
    YellowCubeService,
    BlueCubeService,
    TransactionService,
    UpgradeService,
    BuildService,
    WondersService,
    DiscoveredTechsService,
    TacticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
