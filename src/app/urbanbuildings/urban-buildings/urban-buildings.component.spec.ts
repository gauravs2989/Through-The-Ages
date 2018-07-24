import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanBuildingsComponent } from './urban-buildings.component';

describe('UrbanBuildingsComponent', () => {
  let component: UrbanBuildingsComponent;
  let fixture: ComponentFixture<UrbanBuildingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrbanBuildingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrbanBuildingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
