import { BlueBankSectionComponent } from './bluebank/bluebanksection/bluebanksection.component';
import { BlueBankComponent } from './bluebank/bluebank.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { CorruptionComponent } from './bluebank/corruption/corruption.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BlueBankComponent,
        BlueBankSectionComponent,
        CorruptionComponent
    ],
    exports: [
        BlueBankComponent
    ],
    providers: []
})
export class ResourcesModule {}