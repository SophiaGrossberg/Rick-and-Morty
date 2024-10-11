import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../rick-and-morty.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.css']
})
export class RickAndMortyComponent implements OnInit {

  characters:any[]=[];
  constructor(private RickAndMortyService:RickAndMortyService) { }


 

  ngOnInit(): void {
    this.RickAndMortyService.getCharacter().subscribe((data:any)=>{
      this.characters=data.results;
    })
  }

}
