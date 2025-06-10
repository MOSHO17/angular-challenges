import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comput',
  standalone: true,
})
export class HeavyCompute implements PipeTransform {
  transform(name: string, index: number): string {
    // very heavy computation
    return `${name} - ${index}`;
  }
}
