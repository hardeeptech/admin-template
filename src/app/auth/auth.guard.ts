import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserdataService } from '../shared/userdata/userdata.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{

    constructor(private router: Router, private userService: UserdataService) { }

    canActivate(): boolean {
        if (this.userService.getUserData() != null) {
            return true
        } else {
            this.router.navigate(['/user/login'])
            return false
        }
    }

}