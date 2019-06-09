import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesLogComponent } from './succes-log.component';

describe('SuccesLogComponent', () => {
  let component: SuccesLogComponent;
  let fixture: ComponentFixture<SuccesLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
