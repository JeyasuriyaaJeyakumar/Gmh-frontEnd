import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInFormVisible = true;

  name: string;
  email: string;
  password: string;
  router: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  
  }
  makeSignInFormVisible(){
    this.signInFormVisible = true;
  }
  makeSignUpFormVisible(){
    this.signInFormVisible = false;
  }

  signIn(){
    console.log('User tried to login!');
    this.userService.SignIn(this.email, this.password);
    this.email = "";
    this.password = "";
  }
  signUp(){
    console.log('User tried to sign Up!');
    console.log('Name in component = ', this.name);
    this.userService.SignUp(this.email, this.password, this.name);
    this.email = "";
    this.password = "";
    this.name = "";
  }
}
