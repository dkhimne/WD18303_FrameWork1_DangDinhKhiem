import { AuthService } from './../../@core/service/api/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;

  constructor(
    private authService : AuthService, private router : Router
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)])
    })
  }

  onSubmit(){
    console.log(this.loginForm.value);   
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).pipe(       
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

  pro() {
    this.router.navigate(['/unit']); 
  }

}


