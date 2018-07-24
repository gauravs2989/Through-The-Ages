import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[governmentHost]'
})
export class GovernmentHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
