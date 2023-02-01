import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit{
  
  constructor( private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(data =>{
      let id = data.get("id")
      console.log(id)
    })
  }

  
}
