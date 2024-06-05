import {Injectable} from '@angular/core';
import {CanActivate , Router} from '@angular/router';
import {AuthService} from '../service/api/auth.service';

@Injectable ({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(
        private readonly router: Router, 
        private readonly authService: AuthService
    ) { }

    canActivate():boolean{
        if(this.authService.isLoggedIn()){
            return true;
        }else{
            this.router.navigate(['/login']).then();
            return false;
        }                     
    }

    canActivateChild():boolean{
        return this.canActivate()
    }
}