import { AuthService } from './../../../@core/service/api/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iunit, PostService } from 'src/app/@core/service/api/post.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm!:FormGroup;

  postData: Iunit = { id: '', name: '', address: '', description: '', created_at: '', updated_at: '' };

  constructor(private unit: PostService, private router: Router, private route: ActivatedRoute , private authService : AuthService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.unit.getUnitById(+id).subscribe(
        data => {
          this.postData = data.data;
        },
        error => {
          console.error(error);
        }
      );
    }
    this.editForm = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(2), Validators.maxLength(20)]),
      address: new FormControl('',[Validators.required,Validators.minLength(5)]),
      description: new FormControl('',[Validators.required,Validators.minLength(5)])
    })
  }

  onSubmit(){
    console.log(this.editForm.value);   
    if(this.editForm.valid){
      this.authService.login(this.editForm.value).pipe(       
      ).subscribe({
          next : this.handleLoginSuccess.bind(this),
          error : this.handleLoginFailed.bind(this)
        }
      )
    } 
  }

  protected handleLoginSuccess(res : any) {
    console.log(res);    
  }

  protected handleLoginFailed() {} 
  editPost() {
    this.unit.putUnit(this.postData, this.postData.id).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/unit']);
      },
      error => {
        console.error(error);
      }
    );
  }
}
