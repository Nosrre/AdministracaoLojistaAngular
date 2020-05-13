import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // constructor(private router:Router, private user:UserService) { }
  constructor(private router:Router) {   }

  ngOnInit(): void {
  }
  
  loginUser(e) {  
    debugger;  
  	e.preventDefault();
    console.log(e);
    let username = ((document.getElementById("userName")) as HTMLInputElement).value;
    let password = ((document.getElementById("password")) as HTMLInputElement).value;
  	debugger;
  	if(username == 'admin' && password == 'admin') {
      this.router.navigate(['home']);
      return;
    }
    this.router.navigate(['cadastrarLocatario']);
  }

}
