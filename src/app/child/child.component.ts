import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() myinput: string | undefined;
  @Output() myOutput: EventEmitter<Object> = new EventEmitter<object>();
  // outputstring = 'It is child component';
  outputstring ={ name: 'Wasim Nahed', age: 26 };
  constructor() { }

  ngOnInit(): void {
    console.log(this.myinput);
  }


  SentData(){
    this.myOutput.emit(this.outputstring);
  }

}
