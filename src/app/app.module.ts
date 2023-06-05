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
import { BufferCountComponent } from './Observable-operators/buffer-count/buffer-count.component';
import { IntervalComponent } from './Observable-operators/interval/interval.component';
import { BufferComponent } from './Observable-operators/buffer/buffer.component';
import { DelayComponent } from './Observable-operators/delay/delay.component';
import { LastComponent } from './Observable-operators/last/last.component';
import { MapToComponent } from './Observable-operators/map-to/map-to.component';
import { SkipComponent } from './Observable-operators/skip/skip.component';
import { SkipLastComponent } from './Observable-operators/skip-last/skip-last.component';
import { SkipUntilComponent } from './Observable-operators/skip-until/skip-until.component';
import { SkipWhileComponent } from './Observable-operators/skip-while/skip-while.component';
import { StartWithComponent } from './Observable-operators/start-with/start-with.component';
import { TakeLastComponent } from './Observable-operators/take-last/take-last.component';
import { TakeUntilComponent } from './Observable-operators/take-until/take-until.component';
import { TakeWhileComponent } from './Observable-operators/take-while/take-while.component';
import { TimeOutComponent } from './Observable-operators/time-out/time-out.component';
import { TimeOutWithComponent } from './Observable-operators/time-out-with/time-out-with.component';
import { TimerComponent } from './Observable-operators/timer/timer.component';
import { TakeComponent } from './Observable-operators/take/take.component';

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
    BufferCountComponent,
    IntervalComponent,
    BufferComponent,
    DelayComponent,
    LastComponent,
    MapToComponent,
    SkipComponent,
    SkipLastComponent,
    SkipUntilComponent,
    SkipWhileComponent,
    StartWithComponent,
    TakeLastComponent,
    TakeUntilComponent,
    TakeWhileComponent,
    TimeOutComponent,
    TimeOutWithComponent,
    TimerComponent,
    TakeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
