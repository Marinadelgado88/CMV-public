/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UpperLowerComponent } from './upper-lower.component';

describe('UpperLowerComponent', () => {
  let component: UpperLowerComponent;
  let fixture: ComponentFixture<UpperLowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpperLowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperLowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
