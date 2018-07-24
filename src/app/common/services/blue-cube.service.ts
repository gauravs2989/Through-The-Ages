import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class BlueCubeService {

  private roundFinishedSubject = new Subject<any>();
  public roundFinished$;

  private blueCubeRemovedSubject = new Subject<any>();
  public blueCubeRemoved$;

  private blueCubeAddedSubject = new Subject<any>();
  public blueCubeAdded$;

  constructor() { 
    this.roundFinished$ = this.roundFinishedSubject.asObservable();
    this.blueCubeRemoved$ = this.blueCubeRemovedSubject.asObservable();
    this.blueCubeAdded$ = this.blueCubeAddedSubject.asObservable();
  }

  onRoundFinished() {
    this.roundFinishedSubject.next();
  }

  addBlueCubes(cubesToAdd) {
    this.blueCubeAddedSubject.next(cubesToAdd);
  }

  removeBlueCubes(cubesToRemove) {
    this.blueCubeRemovedSubject.next(cubesToRemove);
  }
}
