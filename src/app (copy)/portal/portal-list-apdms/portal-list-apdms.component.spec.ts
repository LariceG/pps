import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalListApdmsComponent } from './portal-list-apdms.component';

describe('PortalListApdmsComponent', () => {
  let component: PortalListApdmsComponent;
  let fixture: ComponentFixture<PortalListApdmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalListApdmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalListApdmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
