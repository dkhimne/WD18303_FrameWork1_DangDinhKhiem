import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iunit , PostService } from 'src/app/@core/service/api/post.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private unit: PostService , private router : Router) { }

  ngOnInit(): void {
  }

  deleteUnit(id: string) {
    this.unit.deleteUnit(id).subscribe(
      data => {
        console.log('Unit deleted', data);
        this.router.navigate(['/unit']);
      },
      error => {
        console.error(error);
      }
    );
  }
}
