import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStorComponent } from './update-stor.component';

describe('UpdateStorComponent', () => {
  let component: UpdateStorComponent;
  let fixture: ComponentFixture<UpdateStorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
