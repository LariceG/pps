import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignExAplsComponent } from './asign-ex-apls.component';

describe('AsignExAplsComponent', () => {
  let component: AsignExAplsComponent;
  let fixture: ComponentFixture<AsignExAplsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignExAplsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignExAplsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
