import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorderDetailsComponent } from './porder-details.component';

describe('PorderDetailsComponent', () => {
  let component: PorderDetailsComponent;
  let fixture: ComponentFixture<PorderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
