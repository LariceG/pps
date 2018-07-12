import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SporderDetailsComponent } from './sporder-details.component';

describe('SporderDetailsComponent', () => {
  let component: SporderDetailsComponent;
  let fixture: ComponentFixture<SporderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SporderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SporderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
