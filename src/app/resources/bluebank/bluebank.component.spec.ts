import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueBankComponent } from './bluebank.component';

describe('BlueBankComponent', () => {
  let component: BlueBankComponent;
  let fixture: ComponentFixture<BlueBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
