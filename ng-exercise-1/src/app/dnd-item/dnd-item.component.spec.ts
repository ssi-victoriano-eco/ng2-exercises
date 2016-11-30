/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DndItemComponent } from './dnd-item.component';

describe('DndItemComponent', () => {
  let component: DndItemComponent;
  let fixture: ComponentFixture<DndItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
