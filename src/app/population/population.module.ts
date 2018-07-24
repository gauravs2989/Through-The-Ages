import { CommonModule } from '@angular/common';
import { WorkerPoolComponent } from './worker-pool/worker-pool.component';
import { YellowBankComponent } from './yellowbank/yellowbank.component';
import { YellowBankSectionComponent } from './yellowbank/yellowbanksection/yellowbanksection.component';
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        YellowBankComponent,
        YellowBankSectionComponent,
        WorkerPoolComponent,
    ],
    providers: [],
    exports: [
        YellowBankComponent,
        WorkerPoolComponent
    ]
})
export class PopulationModule {}