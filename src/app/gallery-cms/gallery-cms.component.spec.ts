import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryCmsComponent } from './gallery-cms.component';

describe('GalleryCmsComponent', () => {
  let component: GalleryCmsComponent;
  let fixture: ComponentFixture<GalleryCmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryCmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
