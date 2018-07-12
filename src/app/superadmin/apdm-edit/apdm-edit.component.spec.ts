import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApdmEditComponent } from './apdm-edit.component';

describe('ApdmEditComponent', () => {
  let component: ApdmEditComponent;
  let fixture: ComponentFixture<ApdmEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApdmEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApdmEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
