import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addArray'
})
export class AddArrayPipe implements PipeTransform {

  transform(value: number[], args?: any): any {
    let avg;
    let x:number = 0;
    let y:number = 0;
    function getAvg(value){
      for(let i in value){
        x += +value[i]
        y++
      }
      avg = (+x / +y)
      return avg;
    }
    return getAvg(value);
  }
}
