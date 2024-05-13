import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab2',
  templateUrl: './lab2.component.html',
  styleUrls: ['./lab2.component.css']
})
export class Lab2Component implements OnInit {
  title : string = 'Dang.Dinh.Khiem ';
  age : string = '20 tuoi';
  country : string = 'Bac.Lieu';
  isCheck : boolean = false;

  arrStudent = [
    { name: 'khiem', age: 10},
    { name: 'khiem', age: 12},
    { name: 'khiem', age: 14},
    { name: 'khiem', age: 12},
    { name: 'khiem', age: 12},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  open(){
    this.isCheck=true;
  }

  
  close(){
    this.isCheck=false;
  }

  getTitle(name:string){
    console.log('DangDinhKhiem' + name);    
  }

}
