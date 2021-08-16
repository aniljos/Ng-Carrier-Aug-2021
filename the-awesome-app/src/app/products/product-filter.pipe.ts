import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(input: Array<Product>, searchKey: string ): Array<Product> {
    
    if(!searchKey){
      return input;
    }
    else{

      return input.filter(
          productItem => productItem.id?.toString() == searchKey 
                          || productItem.name?.toLowerCase().includes(searchKey.toLowerCase())
                          || productItem.description?.toLowerCase().includes(searchKey.toLowerCase())
                          || productItem.price?.toString() == searchKey
          );

    }
    

  }

}
