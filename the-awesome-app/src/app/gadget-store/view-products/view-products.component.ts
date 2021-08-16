import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  public products: Array<Product> = new Array<Product>();
  constructor(private httpClient: HttpClient) { 

    const url  = "http://localhost:9000/products"
    this.httpClient
              .get<Array<Product>>(url)
              .subscribe((data) => {
                this.products = data;
              });

  }

  ngOnInit(): void {
  }

  add(product: Product, quantity: string){

  }

}
