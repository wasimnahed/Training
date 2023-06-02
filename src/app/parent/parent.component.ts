import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  inputstring:string="It is parent component";
  apiMenu: string ='';
  constructor() { }

  ngOnInit(): void {
  }

  getData(value:any){
    this.apiMenu=value
    console.log(this.apiMenu);
    
  }

}
