import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterEvent, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private userService: UserService, private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    
    if(this.userService.isAuthenticated()){
      return true
    }
    else{

      console.log("Activated Route URL ",state.url);
      this.router.navigate(["/login", {redirectURL:state.url}]);
      return false;
    }
  }
}
