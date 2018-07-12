import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreaccessrequestsComponent } from './storeaccessrequests.component';

describe('StoreaccessrequestsComponent', () => {
  let component: StoreaccessrequestsComponent;
  let fixture: ComponentFixture<StoreaccessrequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreaccessrequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreaccessrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
