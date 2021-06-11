/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ForComponent } from './for.component';

describe('ForComponent', () => {
  let component: ForComponent;
  let fixture: ComponentFixture<ForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
