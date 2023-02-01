import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class HeroeComponent implements OnInit {
  heroe!: Heroe;
  constructor(
    private route: ActivatedRoute,
    private heroeServicio: HeroesService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      let id = data.get('id');
      this.heroeServicio
        .getHeroePorId(id)
        .subscribe((heroe) => (this.heroe = heroe));
    });
  }

  regresar(){
    this.router.navigate(['/heroes/listado'])
  }
}
