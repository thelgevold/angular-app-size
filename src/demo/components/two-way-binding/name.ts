import {Component} from '@angular/core';

@Component({
  template: `<h1>Two-Way Binding</h1>
             <input [(ngModel)]="firstName"> {{firstName}}`
})
export class Name {
  firstName = 'Torgeir';
}