import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WonderGalleryComponent } from './wonder-gallery.component';

describe('WonderGalleryComponent', () => {
  let component: WonderGalleryComponent;
  let fixture: ComponentFixture<WonderGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WonderGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WonderGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
