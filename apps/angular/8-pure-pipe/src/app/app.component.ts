import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyCompute } from './Heavycompute';

@Component({
  standalone: true,
  imports: [NgFor, HeavyCompute],
  selector: 'app-root',
  template: `
    <div *ngFor="let person of persons; let index = index">
      {{ person | comput: index }}
    </div>
  `,
})
export class AppComponent {
  persons = ['toto', 'jack'];
}
