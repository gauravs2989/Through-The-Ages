import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowbankComponent } from './yellowbank.component';

describe('YellowbankComponent', () => {
  let component: YellowbankComponent;
  let fixture: ComponentFixture<YellowbankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YellowbankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YellowbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
