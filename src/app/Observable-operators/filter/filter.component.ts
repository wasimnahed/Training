import { Component, OnInit } from '@angular/core';
import { filter, from, interval } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //  const source$ = interval(1000);
    // source$.pipe(filter(value => {
    //   return value % 2 === 0;
    // })).subscribe(value => {
    //   console.log(value);
    // });




    const cities = [
      {
        name: 'Bangalore',
        country: 'India'
      },
      {
        name: 'Mumbai',
        country: 'India'
      },
      {
        name: 'Kathmandu',
        country: 'Nepal'
      },
      {
        name: 'Pokhara',
        country: 'Nepal'
      }
    ];

    const source$ = from(cities);

    source$.pipe(filter(value => {
      return value.country === 'Nepal' ;
    })).subscribe(value => {
      console.log(value);
    });
  }

}
