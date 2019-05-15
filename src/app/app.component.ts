
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './app';
import { LoginService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // user: Login;

  // submitted: boolean;

  // constructor(private router: Router, private loginService: LoginService) { }

  // ngOnInit() {
  //   this.user = new Login();
  // }

  // loginUser() {
  //   alert("login method");
  //   //  this.submitted = true;
  //   console.log("form");
  //   console.log(this.user);

  //   let password = (<HTMLInputElement>document.getElementById("password")).value;
  //   let email = (<HTMLInputElement>document.getElementById("email")).value;

  //   this.loginService.loginUser(email, password).subscribe((data) => {
  //     alert("Login Successful");
  //     console.log(data);
  //     alert(data.email);
  //     if (data != null) {
  //       if(data.email == "admin" && data.password == "admin"){
  //         this.router.navigate(["admin"]);
  //       }else{
  //       this.router.navigate(["user"]);
  //       }
  //     }

  //   });
  //   //alert("enter correct credentials");
  // }

  // abc() {
  //   this.submitted = true;
  // }


}
