import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() rating : number = 0;
  starWidth : number= 0;
  
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { 
    this.starWidth=this.rating*90/5;
  }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.starWidth=this.rating*90/5;
  }
  onClick(): void {
    this.ratingClicked.emit(`Đánh giá của sản phẩm ${this.rating} sao`);
  }
}
