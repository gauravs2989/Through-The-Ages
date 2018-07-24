import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrownTechsComponent } from './brown-techs.component';

describe('BrownTechsComponent', () => {
  let component: BrownTechsComponent;
  let fixture: ComponentFixture<BrownTechsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrownTechsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrownTechsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
