import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dnd-item',
  templateUrl: './dnd-item.component.html',
  styleUrls: ['./dnd-item.component.css']
})
export class DndItemComponent implements OnInit {
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
