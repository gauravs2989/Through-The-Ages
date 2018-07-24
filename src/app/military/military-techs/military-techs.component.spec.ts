import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitaryTechsComponent } from './military-techs.component';

describe('MilitaryTechsComponent', () => {
  let component: MilitaryTechsComponent;
  let fixture: ComponentFixture<MilitaryTechsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilitaryTechsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilitaryTechsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
