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
  public selectedProduct: Product|null = null;

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

  edit(product:Product){

   // debugger;
    this.selectedProduct = product;
  }

  editCancelled(message: string){
    alert(message);
    this.selectedProduct = null;
  }

  editSaved(updatedProduct: Product){

    this.httpClient
            .put(this.url + "/" + updatedProduct.id, updatedProduct)
            .subscribe(() => {

              const index = this.data.findIndex(item => item.id === updatedProduct.id);
              this.data[index] = updatedProduct;
              this.selectedProduct = null;

            }, () => {

              alert("Failed to update");
            })

  }

}
