import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dnd-target',
  templateUrl: './dnd-target.component.html',
  styleUrls: ['./dnd-target.component.css']
})
export class DndTargetComponent implements OnInit {
  @Input() header: string;

  constructor() { }

  ngOnInit() {
  }

}
