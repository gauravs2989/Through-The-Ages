import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BluebankComponent } from './bluebank.component';

describe('BluebankComponent', () => {
  let component: BluebankComponent;
  let fixture: ComponentFixture<BluebankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluebankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluebankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
