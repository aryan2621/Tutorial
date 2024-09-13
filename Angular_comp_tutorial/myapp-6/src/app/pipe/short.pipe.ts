import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short',
})
export class ShortPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value.substr(0, 3)+" ...";
  }
}
