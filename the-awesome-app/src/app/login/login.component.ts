import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;
  public message = "";

  constructor(private router: Router, private userService: UserService) { 
    this.formGroup = new FormGroup({
        name: new FormControl("", [Validators.required]),
        password: new FormControl("", [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  login(){

    const nameControl = this.formGroup.get('name');
    const pwdControl = this.formGroup.get('password');

    if(this.formGroup.valid){
      this.message = "";

      if(nameControl?.value === "abc" && pwdControl?.value == "abc"){
        this.message = "";
       /// window.sessionStorage.setItem("isAuthenticated", "true");
       this.userService.setAuthenticated(true);
        this.router.navigate(["/products"]);
      }
      else{
        this.message = "Invalid Credentials";
       // window.sessionStorage.setItem("isAuthenticated", "false");
       this.userService.setAuthenticated(false);
      }
    }
    else{

      this.message = "Please provide the inputs...";
     // window.sessionStorage.setItem("isAuthenticated", "false");
     this.userService.setAuthenticated(false);
    }

    console.log(nameControl?.value, pwdControl?.value);

  }

}
