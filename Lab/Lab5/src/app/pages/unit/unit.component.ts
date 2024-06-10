import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService, Iunit } from 'src/app/@core/service/api/post.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  listUnit: Iunit[] = [];
  postData: Iunit = { id: '', name: '', address: '', description: '', created_at: '', updated_at: '' };

  lastPage : number = 0;
  currentPage : number = 0;
  apiUrl = 'https://knowledgehub.demopolyct.online/api/unit';

  constructor(private unit: PostService , private router : Router) { }

  ngOnInit(): void {
    this.getUnit();
  }

  getUnit() {
    this.unit.getAllUnit().subscribe(data => {
      console.log(data); 
      this.listUnit = data.data;
      this.currentPage = data.meta.current_page;
      this.lastPage = data.meta.last_page;
    }, error => {
      console.error(error);
    });
  }

  formAdd() {
    this.router.navigate(['/add']); 
  }

  formEdit(id: string) {
    this.router.navigate(['/edit', id]);
  }
  
  deleteUnit(id: string) {
    this.unit.deleteUnit(id).subscribe(
      data => {
        this.listUnit = this.listUnit.filter(unit => unit.id !== id);
      },
      error => {
        console.error(error);
      }
    );
  }

  getPage(res:any){
    this.listUnit = res.data;
    this.currentPage = res.meta.current_page;
    this.lastPage = res.meta.last_page;    
  }
}
