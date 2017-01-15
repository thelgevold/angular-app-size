import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  template: 'The color is: {{color}}'
})
export class ColorComponent implements OnInit {
  color: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.color = params['id'] || 'Yellow';
    });
  }
}