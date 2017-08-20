import { Component, OnInit } from '@angular/core';
import { BikeService } from './../bike.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Bike } from '../bike'


@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {

  currentUser;
  bikes = []

  constructor(private _router: Router, private _bikeService: BikeService) { }

  ngOnInit() {

    this.getCurrentUser()


  }

  getCurrentUser() {
    console.log("ABOUT TO GET CURRENT USER")
    this._bikeService.getCurrentUser()
      .then((response) => {
        if (response.currentUser == "undefined") {
          this._router.navigateByUrl('/')
        }
        else {
          this.currentUser = response.currentUser
        }
      })

  }




  logout() {
    console.log("LOGGING OUT")
    this._bikeService.logout()
      .then((response) => {
        console.log("logged out")
        this._router.navigateByUrl('/');
      })
  }


}
