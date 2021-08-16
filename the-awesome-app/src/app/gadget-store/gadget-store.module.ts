import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { HomeComponent } from './home/home.component';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: "store", component: HomeComponent, children: [
    {path: "viewproducts", component: ViewProductsComponent},
    {path: "viewcart", component: ViewCartComponent}
  ]},
 
]

@NgModule({
  declarations: [
    ViewProductsComponent,
    ViewCartComponent,
    HomeComponent
  ],
  imports: [
    CommonModule, 
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class GadgetStoreModule { }
