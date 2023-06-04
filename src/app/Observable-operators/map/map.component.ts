import { Component, OnInit } from '@angular/core';
import { from, map, of } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
     const source$ = of(1, 2, 3);

    source$.pipe(map(value => {
      return value * 10;
    })).subscribe(value => {
      console.log(value);
    });

    

    const users = [
      { id: 1, firstName: 'John', lastName:'Doe' },
      { id: 2, firstName: 'Jane', lastName:'White' },
      { id: 3, firstName: 'Foo', lastName:'Bar' },
      { id: 4, firstName: 'Mike', lastName:'Moon' },
    ];

    const source1$ = from(users);

    source1$.pipe(map(value => {
      return {
        id: value.id,
        fullName: `${value.firstName} ${value.lastName}`
      }
    })).subscribe(value => {
      console.log(value);
    });

    // let usersData = [
    //   { id: 1, name: 'aa1', sal: 200, gender: 'm' },
    //   { id: 2, name: 'aa2', sal: 100, gender: 'f' },
    //   { id: 3, name: 'aa3', sal: 190, gender: 'f' },
    //   { id: 4, name: 'aa4', sal: 250, gender: 'm' },
    //   { id: 5, name: 'aa5', sal: 310, gender: 'f' },
    //   { id: 6, name: 'aa6', sal: 20, gender: 'm' },
    //   { id: 7, name: 'aa7', sal: 5000, gender: 'f' },
    //   { id: 8, name: 'aa8', sal: 2010, gender: 'm' },
    //   { id: 9, name: 'aa9', sal: 2030, gender: 'f' },
    //   { id: 10, name: 'aa10', sal: 2070, gender: 'm' }
    // ]

    // usersData.sort((a, b) => {
    //   if (a.gender === 'm' && b.gender === 'm') {
    //     return a.sal - b.sal;
    //   } else if (a.gender === 'm' && b.gender === 'f') {
    //     return -1;
    //   } else if (a.gender === 'f' && b.gender === 'f') {
    //     return b.sal - a.sal;
    //   } else {
    //     return 1;
    //   }
    // })
    // console.log(usersData);
 
// usersData.sort((a, b) => {
//   if (a.gender === 'm' && b.gender === 'f') {
//     return -1; 
//   } else if (a.gender === 'f' && b.gender === 'm') {
//     return 1; 
//   } else {
//     return a.sal - b.sal;
//   }
// });

// console.log(usersData);

    }
  }


