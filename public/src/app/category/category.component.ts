import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category : any;

  constructor(  private _router:Router,
                private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.category = this._route.snapshot.paramMap.get('cat');
  }

}
