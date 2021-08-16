import { Component, Input, OnInit, OnChanges, SimpleChanges, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public product: Product = new Product();
  public temp: Product = new Product();

  @Output() public saved: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() public cancelled: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    console.log("EditProductComponent constructor")
  }
  

  ngOnInit(): void {
    console.log("EditProductComponent ngOnInit")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("EditProductComponent ngOnChanges", changes);
    Object.assign(this.temp, this.product);
  }

  ngOnDestroy(): void {
    console.log("EditProductComponent ngOnDestroy")
  }

  save(){
    this.saved.emit(this.temp);
  }

  cancel(){
    this.cancelled.emit("Operation cancelled");
  }

}
