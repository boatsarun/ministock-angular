import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

   // 1 way data binding
  m:string = "aaaaaaaaaa";

  profile = {
    "name":"Boat",
    "tel":"0922221212",
    "sex":"Man"
  }

  // 2 way data binding
  userData = {
    "email": "",
    "password": ""
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitLogin(){

    if(this.userData.email == "boatsarun@gmail.com" && this.userData.password == "1234"){
      alert("Login Success");
      this.router.navigate(["backend"]);
    }else{
      alert("Login Fail");
    }
  }
}


