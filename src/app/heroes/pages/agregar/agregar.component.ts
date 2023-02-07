import { Component } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  publishers = [
    {
      id: 'Dc Comics',
      desc: 'DC-Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel-Comics',
    },
  ];
  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };
  constructor(private heroesService: HeroesService) {}

  guardar() {
    if (this.heroe.superhero.trim().length === 0) return;
    this.heroesService.agregarHeroe(this.heroe).subscribe((heroe) => {
      console.log('heroe', heroe);
    });
  }
}
