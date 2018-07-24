import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BluebanksectionComponent } from './bluebanksection.component';

describe('BluebanksectionComponent', () => {
  let component: BluebanksectionComponent;
  let fixture: ComponentFixture<BluebanksectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluebanksectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluebanksectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
