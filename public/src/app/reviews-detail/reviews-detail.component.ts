import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reviews-detail',
  templateUrl: './reviews-detail.component.html',
  styleUrls: ['./reviews-detail.component.css']
})
export class ReviewsDetailComponent implements OnInit {

  id : any;

  constructor(  private _router:Router,
                private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
  }

}
