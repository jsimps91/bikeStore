import { Component, OnInit } from '@angular/core';
import { Bike } from '../../bike'
import { BikeService } from './../../bike.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bike-form',
  templateUrl: './bike-form.component.html',
  styleUrls: ['./bike-form.component.css']
})
export class BikeFormComponent implements OnInit {

  constructor(private _router: Router, private _bikeService: BikeService) { }

  ngOnInit() {
  }

}
