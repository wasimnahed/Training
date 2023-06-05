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




  //   const cities = [
  //     {
  //       name: 'Bangalore',
  //       country: 'India'
  //     },
  //     {
  //       name: 'Mumbai',
  //       country: 'India'
  //     },
  //     {
  //       name: 'Kathmandu',
  //       country: 'Nepal'
  //     },
  //     {
  //       name: 'Pokhara',
  //       country: 'Nepal'
  //     }
  //   ];

  //   const source$ = from(cities);

  //   source$.pipe(filter(value => {
  //     return value.country === 'Nepal' ;
  //   })).subscribe(value => {
  //     console.log(value);
  //   });



  //  let emplist:string[];
  //   emplist=["wasim","nahed","rarial"];
  //   console.log(emplist);

    // let numlist:Array<number>
    // numlist =[1,2,3,4,5];
    // console.log(numlist);
    // let results = numlist.filter((num)=>num>2);
    // console.log(results);


    // let numlist:Array<number>
    // numlist =[1,2,3,4,5];
    

    // let numlist:Array<number>
    // numlist =[1,2,3,4,5];
    // console.log(numlist);
    // let results = numlist.reduce((acc,num) => acc+num);
    // console.log(results);

  }

}
