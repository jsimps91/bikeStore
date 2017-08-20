import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { BikeService } from './../bike.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent implements OnInit {
  passwordValid = false;
  currentUser;
  loginMessage = null;
  regMessage = null;
  user = new User()
  constructor(private _router: Router, private _bikeService: BikeService){}

  ngOnInit() {
  }
  passwordCheck(){
    if(this.user.password != this.user.passwordConfirmation){
      this.passwordValid = false;
    }
    else{
      this.passwordValid = true;
    }
  }
  createUser(){
    console.log("ABOUT TO CREATE USER:", this.user);
    this._bikeService.createUser(this.user)
      .then((response) => {
        console.log("HTTP RESPONSE:", response);
        if(response.loggedIn === true){
        this.user = new User();
        this.currentUser = response.user
        this._router.navigateByUrl('/bikes/show');
        }
      else{
        this.user = new User();
        this.regMessage=response.message
      }
      });
  }
  login(){
    console.log("ABOUT TO LOGIN");
    this._bikeService.login(this.user)
    .then((response)=> {
      console.log("HTTP RESPONSE:", response);
      if(response.loggedIn === true){
      this.currentUser = response.user
      this._router.navigateByUrl('/bikes/show')        
      }
      else{
        console.log("ERROR MESSAGE", response.message)
        this.loginMessage = response.message
      }
    })
  } 

}
