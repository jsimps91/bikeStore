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
        this.user = new User();
        this._router.navigateByUrl('/bikes');
      });
  }

}
