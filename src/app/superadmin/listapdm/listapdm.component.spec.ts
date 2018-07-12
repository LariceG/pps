import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadpmComponent } from './listadpm.component';

describe('ListadpmComponent', () => {
  let component: ListadpmComponent;
  let fixture: ComponentFixture<ListadpmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadpmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
