import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroDescribe1Component } from './intro-describe1.component';

describe('IntroDescribe1Component', () => {
  let component: IntroDescribe1Component;
  let fixture: ComponentFixture<IntroDescribe1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroDescribe1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroDescribe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
