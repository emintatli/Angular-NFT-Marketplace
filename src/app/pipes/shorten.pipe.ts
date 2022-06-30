import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string): string {
    return value?(value.substring(0,4)+"..."+ value.substring(value.length-4,value.length)):"";
  }

}
