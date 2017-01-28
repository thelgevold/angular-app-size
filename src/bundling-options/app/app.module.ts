import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import {Survey, SurveyDemo} from './dynamic-form';
import {Treeview, TreeviewDemo} from './treeview'

@NgModule({
  declarations: [AppComponent, Treeview, TreeviewDemo, Survey, SurveyDemo],
  bootstrap: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule],
})
export class AppModule {}
