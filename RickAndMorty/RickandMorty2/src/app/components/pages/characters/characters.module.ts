import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersDetailsComponent } from './characters-details/characters-details.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { RouterModule } from '@angular/router';
import { CharacterComponent } from './character.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

const myComponents =[
  CharactersDetailsComponent, 
  CharactersListComponent,
  CharacterComponent
]
@NgModule({
  declarations: [...myComponents],
  imports: [CommonModule, RouterModule,InfiniteScrollModule ],
  exports:[...myComponents ],
})
export class CharactersModule { }
