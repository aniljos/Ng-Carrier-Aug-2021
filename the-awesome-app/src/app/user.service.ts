import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isAuth: boolean = false;
  constructor() { 
  }

  public isAuthenticated(): boolean{
    return this.isAuth;
  }

  public setAuthenticated(isAuth: boolean): void{
    this.isAuth = isAuth;
  }
}
