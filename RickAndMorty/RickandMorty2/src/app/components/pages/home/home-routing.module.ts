import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CharactersModule } from '../characters/characters.module';
const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes),CharactersModule],
  exports: [RouterModule,]
})
export class HomeRoutingModule { }
