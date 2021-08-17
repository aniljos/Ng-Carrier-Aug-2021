//import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../model/product";
import {ReplaySubject, Subject} from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
export class CartItem{

  constructor(public product: Product, public quantity: number){}
} 

@Injectable()
export class CartService {

  private cart: Array<CartItem> = new Array<CartItem>();
  //public subject: Subject<Array<CartItem>> = new Subject<Array<CartItem>>();
  public subject: ReplaySubject<Array<CartItem>> = new ReplaySubject<Array<CartItem>>();
  //public subject
  constructor(private httpClient: HttpClient) { }

  add(cartItem: CartItem){
    this.cart.push(cartItem);

    //publish
    this.subject.next([...this.cart]);

  }

  get(): Array<CartItem>{
    return [...this.cart];
  }
}
