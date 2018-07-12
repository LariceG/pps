import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderdetailsComponent } from './customer-orderdetails.component';

describe('CustomerOrderdetailsComponent', () => {
  let component: CustomerOrderdetailsComponent;
  let fixture: ComponentFixture<CustomerOrderdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerOrderdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOrderdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
