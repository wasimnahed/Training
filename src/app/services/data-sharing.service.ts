import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  // private subject = new Subject<any>();
  
  constructor() { }
  
//   sendData(data: any) {
//     this.subject.next({ text: data });
// }

// clearData() {
//     this.subject.next(0);
// }

// getData(): Observable<any> {
//     return this.subject.asObservable();
// }
}
