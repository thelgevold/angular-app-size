import {Component, Input, OnInit} from '@angular/core';
import {Column} from './column';
import {Sorter} from './sorter';
import {Person} from './person';

@Component({
  selector: 'grid',
  templateUrl: './grid.html'
})

export class Grid implements OnInit{

  @Input() columns: Column[];
  @Input() rows: Person[];

  @Input() name:string;

  sorter = new Sorter();

  sort(key){
    this.sorter.sort(key, this.rows);
  }

  ngOnInit(){
    console.log(this.name);
  }
}
