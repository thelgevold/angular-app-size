import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ColorComponent } from './color.component';

const routes: Routes = [
  { path: '', component: ColorComponent },
  { path: 'color/:id',  component: ColorComponent },
  { path: 'color/:id', component: ColorComponent },
  { path: 'color/:id',     component: ColorComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}