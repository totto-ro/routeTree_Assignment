import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { BrandComponent } from '../brand/brand.component';
import { CategoryComponent } from '../category/category.component';
import { ReviewComponent } from '../review/review.component';
import { AuthorComponent } from '../author/author.component';
import { AllReviewsComponent } from '../all-reviews/all-reviews.component';
import { ReviewsDetailComponent } from '../reviews-detail/reviews-detail.component';



let routes: Routes = [
  { 
    path: 'products',
    component: ProductComponent, children: [
      { 
        path: 'details/:id', 
        component: ProductDetailComponent 
      },
      { 
        path: 'brand/:brand', 
        component: BrandComponent 
      },
      { 
        path: 'category/:cat', 
        component: CategoryComponent 
      }
    ]
  },
  { 
    path: 'reviews',
    component: ReviewComponent, children: [
      { 
        path: 'details/:id', 
        component: ReviewsDetailComponent 
      },
      { 
        path: 'author/:id', 
        component: AuthorComponent 
      },
      { 
        path: 'all/:id', 
        component: AllReviewsComponent 
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'/'
  },
  {
    path: '**',
    redirectTo: '/'
  }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
