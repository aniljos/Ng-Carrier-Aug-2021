import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  public data: Array<Product> = new Array<Product>();
  public hasError: boolean = false;

  constructor(private httpClient: HttpClient) { 

    const url = "http://localhost:9000/products";
    httpClient
          .get<Array<Product>>(url)
          .subscribe((data) => {
            console.log("success", data);
            this.data = data;
            this.hasError = false;
          }, (error) => {
            console.log("error", error);
            this.hasError = true;
          });
  }

  ngOnInit(): void {
  }

}
