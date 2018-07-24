import { BlueBankSectionComponent } from './bluebank/bluebanksection/bluebanksection.component';
import { BlueBankComponent } from './bluebank/bluebank.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BlueBankComponent,
        BlueBankSectionComponent
    ],
    exports: [
        BlueBankComponent
    ],
    providers: []
})
export class ResourcesModule {}