import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }  from './app.component';
import { FriendService } from './friend-service';

import { ColorComponent } from './color.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, AppRoutingModule ],
  declarations: [ AppComponent, ColorComponent ],
  bootstrap:    [ AppComponent ],
  providers: [FriendService]
})
export class AppModule { 
    
}