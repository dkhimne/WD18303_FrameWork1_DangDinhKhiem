import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Output() dataList: EventEmitter<any> = new EventEmitter();
  @Input() apiUrl! : string;
  @Input() current_page! : number;
  @Input() last_page! : number;
  indexPage : number = 1;
  hasPreviousPage : boolean = true;
  hasNextPage : boolean = false;

  constructor(
    private http : HttpClient
  ) { }

  ngOnInit(): void {
  }

  getPaginator(): Observable<any>{
    return this.http.get(`${this.apiUrl}?page=${this.indexPage}`)
  }

  getData(){
    this.getPaginator().subscribe(res =>{
      this.dataList.emit(res);
    },error => console.error(error))
  }

  goFirstPage(){
    this.indexPage = 1;
    this.getData();
    this.hasPreviousPage = true;
    this.hasNextPage = false;    
  }

  goLastPage(){
    this.indexPage = this.last_page;
    this.getData();
    this.hasPreviousPage = false;
    this.hasNextPage = true;    
  }
  goPreviousPage() {
    if (this.indexPage <= this.last_page && this.indexPage > 1) {
      this.hasNextPage = false;
      this.indexPage--;
      if (this.indexPage === 1) {
        this.hasPreviousPage = true;
      }
      this.getData();
    }
  }

  goNextPage() {
    if (this.indexPage < this.last_page) {
      this.hasPreviousPage = false;
      this.indexPage++;
      if (this.indexPage === this.last_page) {
        this.hasNextPage = true;
      }
      this.getData();
    }
  }
}
