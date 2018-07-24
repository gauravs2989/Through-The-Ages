import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[leaderHost]'
})
export class LeaderHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
