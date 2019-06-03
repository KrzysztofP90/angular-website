import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsRecordComponent } from './cms-record.component';

describe('CmsRecordComponent', () => {
  let component: CmsRecordComponent;
  let fixture: ComponentFixture<CmsRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
