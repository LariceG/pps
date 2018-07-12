import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpordersComponent } from './sporders.component';

describe('SpordersComponent', () => {
  let component: SpordersComponent;
  let fixture: ComponentFixture<SpordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
