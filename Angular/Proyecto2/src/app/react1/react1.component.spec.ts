/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { React1Component } from './react1.component';

describe('React1Component', () => {
  let component: React1Component;
  let fixture: ComponentFixture<React1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ React1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(React1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
