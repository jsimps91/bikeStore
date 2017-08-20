import { Component, OnInit } from '@angular/core';
import { BikeService } from './../../bike.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  bikes;
  currentUser;
  constructor(private _router: Router, private _bikeService: BikeService) { }

  ngOnInit() {
    this.getBikes()
    this.getCurrentUser()
  }

  
  getBikes(){
    console.log("ABOUT TO GET BIKES")
    this._bikeService.getBikes()
    .then(response => this.bikes = response.bikes).catch(err => console.log(err));

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

    deleteBike(id){
      console.log("ABOUT TO DELETE BIKE WITH ID", id)
      this._bikeService.deleteBike(id)
      .then(response => this.getBikes()).catch(err => console.log(err));
  
    }
}
