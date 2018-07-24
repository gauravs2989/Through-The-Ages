import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class RatingService {

  private score: number;
  private scoreSubject: Subject<number>;
  public scoreChanged$;

  private rating: number;
  private ratingSubject: Subject<number>;
  public ratingChanged$;

  constructor() {
    this.score = 0;
    this.scoreSubject = new Subject<number>();
    this.scoreChanged$ = this.scoreSubject.asObservable();

    this.rating = 0;
    this.ratingSubject = new Subject<number>();
    this.ratingChanged$ = this.ratingSubject.asObservable();
  }

  updateRating(newRating) {
    this.rating = newRating;
    this.ratingSubject.next(this.rating);
  }

  updateScore(newScore) {
    this.score = newScore;
    this.scoreSubject.next(this.score);
  }

  getRating() {
    return this.rating;
  }

  getScore() {
    return this.score;
  }
}
