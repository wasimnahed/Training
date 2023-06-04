import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FromComponent } from './Observable-operators/from/from.component';
import { OfComponent } from './Observable-operators/of/of.component';
import { MapComponent } from './Observable-operators/map/map.component';
import { FilterComponent } from './Observable-operators/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TodoListComponent,
    FromComponent,
    OfComponent,
    MapComponent,
    FilterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
