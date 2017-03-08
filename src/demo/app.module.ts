import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {Demo} from './demo';

import {GridDemo} from './components/grid/grid-demo';
import {Grid} from './components/grid/grid';
import {Treeview, TreeviewDemo} from './components/treeview';
import {Survey, SurveyDemo} from './components/dynamic-form';
import {InputControls} from './components/input-controls/input-controls';
import {Name} from './components/two-way-binding/name';
import {Numbers} from './components/insertion-sort/numbers';

import {routing} from './app.routes';

@NgModule({
  declarations: [Demo, GridDemo, Grid, 
                 Treeview, TreeviewDemo,
                 Survey, SurveyDemo, 
                 InputControls,
                 Name,
                 Numbers
                 ],
  bootstrap: [Demo],
  imports: [BrowserModule, 
            routing, 
            FormsModule,
            ReactiveFormsModule],
})
export class AppModule {}
