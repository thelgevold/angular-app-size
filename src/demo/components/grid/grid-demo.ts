import {Component} from '@angular/core';
import {Column} from './column';
import {Person} from './person';

@Component({
  selector: 'grid-demo',
  template:'<grid name="person grid" [rows]="people" [columns]="columns"></grid>'
})

export class GridDemo {
  people: Person[];
  columns: Column[];

  constructor() {
    this.people = this.getPeople();
    this.columns = this.getColumns();
  }

  getPeople(): Person[] {
    let people: Person[] = [
      this.createRow('Joe', 'Jackson', 20),
      this.createRow('Jack', 'Smith', 20),
      this.createRow('Tim', 'Jackson', 20),
      this.createRow('Jane', 'Doe', 40)
    ];
    return people;
  }

  createRow(firstName, lastName, age): Person {
    return {'firstName': firstName, 'lastName': lastName, 'age': age};
  }

  getColumns(): Column[] {
    return [
      new Column('firstName', 'First Name'),
      new Column('lastName', 'Last Name'),
      new Column('age', 'Age')
    ];
  }
}