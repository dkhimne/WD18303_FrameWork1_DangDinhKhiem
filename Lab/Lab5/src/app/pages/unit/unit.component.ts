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

  constructor(private unit: PostService , private router : Router) { }

  ngOnInit(): void {
    this.getUnit();
  }

  getUnit() {
    this.unit.getAllUnit().subscribe(data => {
      console.log(data); 
      this.listUnit = data.data;
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
}
