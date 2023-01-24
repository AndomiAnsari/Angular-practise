import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { PassDataToChildComponent } from './pass-data-to-child/pass-data-to-child.component';
import { ParentToChildComponent } from './parent-to-child/parent-to-child.component';
import { ChildComponent } from './child/child.component';
import { ToWayBindingComponent } from './to-way-binding/to-way-binding.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { UsdInrPipe } from './currencyPipes/usd-inr.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    PassDataToChildComponent,
    ParentToChildComponent,
    ChildComponent,
    ToWayBindingComponent,
    PipesComponent,
    UsdInrPipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
