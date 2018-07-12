import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaccountSettingsComponent } from './paccount-settings.component';

describe('PaccountSettingsComponent', () => {
  let component: PaccountSettingsComponent;
  let fixture: ComponentFixture<PaccountSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaccountSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaccountSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
