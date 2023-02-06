import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  data : any;
  cocktail : any;

  constructor (public CocktailService : CocktailService){
  }

  ngOnInit(): void {
    
    this.CocktailService.getCocktail().subscribe({
      next: (data : any) => {this.data = data; this.cocktail = this.data.myCocktail; console.log(this.cocktail)},
      error: () => {console.log('erreur')},
      complete: () => {}

    })
  }

 
}
