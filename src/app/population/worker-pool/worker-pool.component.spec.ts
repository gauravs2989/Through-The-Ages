import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerPoolComponent } from './worker-pool.component';

describe('WorkerPoolComponent', () => {
  let component: WorkerPoolComponent;
  let fixture: ComponentFixture<WorkerPoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerPoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
