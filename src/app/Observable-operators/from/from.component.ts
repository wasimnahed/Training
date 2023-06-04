import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source$ = from([10, 20, 30]);

    source$.subscribe(value => {
      console.log(value);
    });

    const source1$ = from("Hello world!");

    source1$.subscribe(value => {
      console.log(value);
    });

    const countries = new Map();

    countries.set('in', 'India');
    countries.set('np', 'Nepal');
    countries.set('jp', 'Japan');
    countries.set('br', 'Brazil');

    const source2$ = from(countries);

    source2$.subscribe(value => {
      console.log(value);
    });
  }
  }


