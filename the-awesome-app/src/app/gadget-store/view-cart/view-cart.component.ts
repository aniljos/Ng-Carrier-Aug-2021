import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartItem, CartService } from '../cart.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  public cart: Array<CartItem> = new Array<CartItem>();

  constructor(private cartService: CartService) {
      this.cart = cartService.get();
   }

  ngOnInit(): void {
  }


  remove(product: Product){

  }
}
