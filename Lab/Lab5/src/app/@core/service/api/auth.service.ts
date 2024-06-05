import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt'

export interface Ilogin {
  email : string;
  password : string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private jwtHelperService = new JwtHelperService();
  loginForm! : Ilogin;

  constructor(
    private _http: HttpClient
  ) { }
  
  login(data : Ilogin) : Observable<any> {
    return this._http.post('https://knowledgehub.demopolyct.online/api/auth/login',{
      email : data.email,
      password : data.password      
    });
  }

  isLoggedIn():boolean{
    if(this.getToken()){
      const expried = this.jwtHelperService.isTokenExpired(this.getToken());
      if(expried){
        localStorage.clear();
      }
      return !expried;
    }
    return false;
  }

  getToken(){
    return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MTc1NjUzODMsImV4cCI6MTcxNzU2NjU4NSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.IsXt7V_IBLO8bTMZGuQ9UvE5lCCaFU6LBqtmm179jP4';
  }

}
