import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { CharacterService } from './../../../../shared/services/character.service';
import {take,filter} from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Character } from '@app/shared/interfaces/character.interface';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
type RequestInfo ={
  next: string;
}
@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {
  characters: Character[]=[];
  info: RequestInfo = {
    next:"null",
  };

  private pageNum=1;
  private query:string="";
  private hideSrollHeight=200;
  private showScrollHeight=500;
  showGoUpButton: boolean =false;
 

  constructor(
  @Inject(DOCUMENT) private document:Document,
  private characterSvc: CharacterService,
  private route:ActivatedRoute,
  private router:Router,

  
) { 
  this.onUrlChanged();
}

  ngOnInit(): void {
    this.getCharactersByQuery();
  }

  @HostListener('window:scroll',[])
  onWindowScroll():void{
    const yOffSet=window.pageYOffset;
    if((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop)>this.showScrollHeight){
      this.showGoUpButton= true;
    }else if(this.showGoUpButton &&(yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop)<this.hideSrollHeight){

      this.showGoUpButton=false;

    }

  }

  onScrollDown():void{
    if(this.info.next){
      this.pageNum++;
      this.getDataFromService();
    }
  }
  onScrollTop() :void{
    this.document.body.scrollTop =0;
    this.document.documentElement.scrollTop=0;
  }
  
  private onUrlChanged():void{
    this.router.events.pipe(
      filter((event)=>event instanceof NavigationEnd)).subscribe
      (()=>{
        this.characters=[];
        this.pageNum=1;
        this.getCharactersByQuery();
      });
  }


  private getCharactersByQuery(): void {
    this.route.queryParams.pipe(take(1)).subscribe(params => {
      console.log('Params=>',params)
      this.query = params['q'];
      this.getDataFromService();
    });
  }


  private getDataFromService():void{
    this.characterSvc.searchCharacters(this.query, this.pageNum)
    .pipe(take(1))
      .subscribe((res:any)=>{
        if(res?.results?.length){
          const{info,results}=res;
      this.characters=[...this.characters, ...results];
      this.info = info;
        }else{
          this.characters=[];
        }
      
      });
  }
}
