/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DndTargetComponent } from './dnd-target.component';

describe('DndTargetComponent', () => {
  let component: DndTargetComponent;
  let fixture: ComponentFixture<DndTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
