import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGalleryImgComponent } from './add-gallery-img.component';

describe('AddGalleryImgComponent', () => {
  let component: AddGalleryImgComponent;
  let fixture: ComponentFixture<AddGalleryImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGalleryImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGalleryImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
