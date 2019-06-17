import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RailwaysPage } from './railways.page';

describe('RailwaysPage', () => {
  let component: RailwaysPage;
  let fixture: ComponentFixture<RailwaysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RailwaysPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RailwaysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
