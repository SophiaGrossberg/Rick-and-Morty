
import { RouterModule, Routes } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
const routes: Routes = [
{
  path: '',
  redirectTo:'home',
  pathMatch:'full',
},
  
  {
   path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) }, { path: 'character-list', loadChildren: () => import('./components/pages/characters/characters-list/characters-list.module').then(m => m.CharacterListModule) }, { path: 'character-details', loadChildren: () => import('./components/pages/characters/characters-details/characters-details.module').then(m => m.CharactersDetailsModule)
    },
  {
    path:'character-list',
    loadChildren:()=>
      import('./components/pages/characters/characters-list/characters-list.module'
      ).then((m)=>m.CharacterListModule),
  },
  {
    path:'character-details/:id',
    loadChildren:()=>
      import('./components/pages/characters/characters-details/characters-details.module'
      ).then((m)=>m.CharactersDetailsModule),
  }
  ];

    
@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
