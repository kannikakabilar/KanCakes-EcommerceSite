import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    const [canada] = args;
    if (canada == 1){
      return value*1.36;
    } else {
      return value;
    }
    
  }

}
