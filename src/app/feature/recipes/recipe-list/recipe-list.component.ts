import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  @Output()
  public recipeWasSelected: EventEmitter<Recipe> = new EventEmitter();

  recipes: Recipe[] = [
    new Recipe(
      'Tacos',
      'Mexican Tacos',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2017/02/quick-peach-melba-crumbles.jpg'
    ),
    new Recipe(
      'Chicken',
      'Chicken Carbonara',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2017/02/quick-peach-melba-crumbles.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
