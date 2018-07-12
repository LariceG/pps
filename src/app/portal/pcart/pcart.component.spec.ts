import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcartComponent } from './pcart.component';

describe('PcartComponent', () => {
  let component: PcartComponent;
  let fixture: ComponentFixture<PcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
