import { Component, Input } from '@angular/core';
import { Heroe } from '../../../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta-component',
  templateUrl: './heroe-tarjeta-component.component.html',
  styleUrls: ['./heroe-tarjeta-component.component.css']
})
export class HeroeTarjetaComponentComponent {

  @Input() heroe!: Heroe;
}
