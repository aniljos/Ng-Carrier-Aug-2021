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
  public errorMessage: string = "";
  public product: Product = new Product();
  public searchKey: string = "";

  private url : string;

  constructor(private httpClient: HttpClient) { 

    this.url = "http://localhost:9000/products";

    httpClient
          .get<Array<Product>>(this.url)
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

  save(){

    this.httpClient
            .post(this.url, this.product)
            .subscribe(() => {
              
              this.data.push(this.product);
              this.product = new Product();
              this.hasError = false;

            }, (err) => {

              console.log(err);
              alert("Failed to save...");
              // this.hasError = true;
              // this.errorMessage = err.message;
            });
  }

}
