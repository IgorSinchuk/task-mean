import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../../../../server/model/User';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: String;
  passsword: String;

  public router: Router;
  loginUserData = {}
  constructor(private _auth: AuthService) { }


  ngOnInit() {
  }

  loginUser() {
    // this._auth.loginUser(this.loginUserData).subscribe(
    //   res => location.href = '/home',  // add alert 
    //   err => alert('Something went wrong(')
    //   )  

  
      }
  }
