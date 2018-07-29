import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorruptionComponent } from './corruption.component';

describe('CorruptionComponent', () => {
  let component: CorruptionComponent;
  let fixture: ComponentFixture<CorruptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorruptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorruptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
