import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LisstoreComponent } from './lisstore.component';

describe('LisstoreComponent', () => {
  let component: LisstoreComponent;
  let fixture: ComponentFixture<LisstoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisstoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
