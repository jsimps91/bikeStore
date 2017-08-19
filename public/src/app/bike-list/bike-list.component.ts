import { Component, OnInit } from '@angular/core';
import { BikeService } from './../bike.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {

  currentUser 

  constructor(private _router: Router, private _bikeService: BikeService){}

  ngOnInit() {
    
  }


  }
