import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DndItemComponent } from './dnd-item/dnd-item.component';
import { DndTargetComponent } from './dnd-target/dnd-target.component';
import { DndMainComponent } from './dnd-main/dnd-main.component';

@NgModule({
  declarations: [
    DndItemComponent,
    DndTargetComponent,
    DndMainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [DndMainComponent]
})
export class AppModule { }
