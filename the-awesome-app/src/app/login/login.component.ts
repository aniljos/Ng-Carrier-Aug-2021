import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;
  public message = "";
  private redirectURL: string = "";

  constructor(private router: Router, private userService: UserService,
    private activatedRoute: ActivatedRoute) {
    this.formGroup = new FormGroup({
      name: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });

    activatedRoute.params.subscribe((params) => {
      console.log("param", params);
      this.redirectURL = params.redirectURL;
    })
  }

  ngOnInit(): void {
  }

  login() {

    const nameControl = this.formGroup.get('name');
    const pwdControl = this.formGroup.get('password');

    if (this.formGroup.valid) {
      this.message = "";

      if (nameControl?.value === "abc" && pwdControl?.value == "abc") {
        this.message = "";
        /// window.sessionStorage.setItem("isAuthenticated", "true");
        this.userService.setAuthenticated(true);
        if(this.redirectURL){
          this.router.navigate([this.redirectURL]);
        }
        else{
          this.router.navigate(["/home"]);
        }
        
      }
      else {
        this.message = "Invalid Credentials";
        // window.sessionStorage.setItem("isAuthenticated", "false");
        this.userService.setAuthenticated(false);
      }
    }
    else {

      this.message = "Please provide the inputs...";
      // window.sessionStorage.setItem("isAuthenticated", "false");
      this.userService.setAuthenticated(false);
    }

    console.log(nameControl?.value, pwdControl?.value);

  }

}
