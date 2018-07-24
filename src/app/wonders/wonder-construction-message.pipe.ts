import { BuildOption } from './build-option';
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'WonderConstructionMessage'
})
export class WonderConstructionMessage implements PipeTransform {
    
    transform(option: BuildOption) {
        let stages = option.stages;
        let stagesString = stages > 1 ? " stages " : " stage ";
        let resourceString = option.resourceCost > 1 ? " resources" : " resource";
        return "Build " + option.stages + stagesString + "for " + option.resourceCost + resourceString;
    }
}