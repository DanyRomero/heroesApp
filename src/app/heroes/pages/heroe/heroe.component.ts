import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit{
  heroe!: Heroe
  constructor( private route: ActivatedRoute, private heroeServicio: HeroesService){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(data =>{
      let id = data.get("id")
      this.heroeServicio.getHeroePorId(id).subscribe(heroe => this.heroe = heroe)
    })
  }

  
}
