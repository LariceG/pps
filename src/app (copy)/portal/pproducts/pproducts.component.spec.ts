import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PproductsComponent } from './pproducts.component';

describe('PproductsComponent', () => {
  let component: PproductsComponent;
  let fixture: ComponentFixture<PproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
