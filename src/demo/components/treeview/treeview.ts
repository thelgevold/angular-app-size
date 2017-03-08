import {Component, Injectable, Input} from '@angular/core';

import {Directory} from './directory';

@Component({
  selector: 'treeview',
  templateUrl: './treeview.html'
})

export class Treeview {
  @Input() directories: Array<Directory>;
}