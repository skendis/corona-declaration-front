import {Component, OnInit} from '@angular/core';
import {Person} from './models/person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  persons: Person[] = [
    new Person('sergei', 'kendis', '02111111',
      new Date(1, 2, 1985), 'p1First', 'p1Last',
      'p2First', 'p2Last',
      '0525938007', '0525938001',
      new Date(1, 2, 1985),
      'urlstring', 'male'),
    new Person('oren', 'tzezana', '02111111',
      new Date(1, 2, 1985), 'p1First', 'p1Last',
      'p2First', 'p2Last',
      '0525938007', '0525938001',
      new Date(1, 2, 1985),
      'urlstring', 'female'),
    new Person('ehud', 'perlman', '02111111',
      new Date(1, 2, 1985), 'p1First', 'p1Last',
      'p2First', 'p2Last',
      '0525938007', '0525938001',
      new Date(1, 2, 1985),
      'urlstring', 'female')
  ];


  constructor() {
  }

  ngOnInit(): void {
  }

}
