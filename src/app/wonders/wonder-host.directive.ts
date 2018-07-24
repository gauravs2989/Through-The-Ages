import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[wonderHost]'
})
export class WonderHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
