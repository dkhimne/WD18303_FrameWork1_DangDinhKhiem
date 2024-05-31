import { AuthService } from './../../../@core/service/api/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iunit, PostService } from 'src/app/@core/service/api/post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  addForm!:FormGroup;
  listUnit: Iunit[] = [];
  postData: Iunit = { id: '', name: '', address: '', description: '', created_at: '', updated_at: '' };

  constructor(private unit: PostService , private router : Router , private authService : AuthService) { }
  
  //validator
  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(2), Validators.maxLength(20)]),
      address: new FormControl('',[Validators.required,Validators.minLength(5)]),
      description: new FormControl('',[Validators.required,Validators.minLength(5)])
    })
  }

  onSubmit(){
    console.log(this.addForm.value);   
    if(this.addForm.valid){
      this.authService.login(this.addForm.value).pipe(       
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


  //add
  addPost() {
    this.unit.postUnit(this.postData).subscribe(data => {
      console.log(data);
      this.router.navigate(['/unit']);
    }, error => {
      console.error(error);
    });
  }  
}
