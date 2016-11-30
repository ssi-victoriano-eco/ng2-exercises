/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DndMainComponent } from './dnd-main.component';

describe('DndMainComponent', () => {
  let component: DndMainComponent;
  let fixture: ComponentFixture<DndMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
