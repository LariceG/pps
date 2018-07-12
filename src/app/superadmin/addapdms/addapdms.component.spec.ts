import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddapdmsComponent } from './addapdms.component';

describe('AddapdmsComponent', () => {
  let component: AddapdmsComponent;
  let fixture: ComponentFixture<AddapdmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddapdmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddapdmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
