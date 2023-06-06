import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  inputstring:string="It is parent component";
  
  apiMenu: string ='';
  apiMenu2: string ='';
  constructor() { }

  ngOnInit(): void {
  }

  getData(value:any){
    this.apiMenu=value.name;
    this.apiMenu2=value.age;
    console.log('The name is ',this.apiMenu);
    console.log('and age is',this.apiMenu2);
    
  }

}
