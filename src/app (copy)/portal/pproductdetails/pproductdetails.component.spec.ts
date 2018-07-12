import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PproductdetailsComponent } from './pproductdetails.component';

describe('PproductdetailsComponent', () => {
  let component: PproductdetailsComponent;
  let fixture: ComponentFixture<PproductdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PproductdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PproductdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
