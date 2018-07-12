import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpsettingsComponent } from './spsettings.component';

describe('SpsettingsComponent', () => {
  let component: SpsettingsComponent;
  let fixture: ComponentFixture<SpsettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpsettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
