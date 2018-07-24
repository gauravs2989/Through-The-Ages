import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInRowComponent } from './cardinrow.component';

describe('CardInRowComponent', () => {
  let component: CardInRowComponent;
  let fixture: ComponentFixture<CardInRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
