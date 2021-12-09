import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ProductComponent } from './product/product.component';
import { ReviewComponent } from './review/review.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AuthorComponent } from './author/author.component';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';
import { ReviewsDetailComponent } from './reviews-detail/reviews-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ReviewComponent,
    BrandComponent,
    CategoryComponent,
    ProductDetailComponent,
    AuthorComponent,
    AllReviewsComponent,
    ReviewsDetailComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
