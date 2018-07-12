import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignApdmComponent } from './asign-apdm.component';

describe('AsignApdmComponent', () => {
  let component: AsignApdmComponent;
  let fixture: ComponentFixture<AsignApdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignApdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignApdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
