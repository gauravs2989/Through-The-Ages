import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowbanksectionComponent } from './yellowbanksection.component';

describe('YellowbanksectionComponent', () => {
  let component: YellowbanksectionComponent;
  let fixture: ComponentFixture<YellowbanksectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YellowbanksectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YellowbanksectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
