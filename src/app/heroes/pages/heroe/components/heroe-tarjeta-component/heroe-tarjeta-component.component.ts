import { Component, Input } from '@angular/core';
import { Heroe } from '../../../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta-component',
  templateUrl: './heroe-tarjeta-component.component.html',
  styles: [
    `
      mat-card {
        margin-top: 20px;
      }
    `,
  ],
})
export class HeroeTarjetaComponentComponent {
  @Input() heroe!: Heroe;
}
