import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is just a test',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2017/02/quick-peach-melba-crumbles.jpg'
    ),
    new Recipe(
      'Test Recipe',
      'This is just a test',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2017/02/quick-peach-melba-crumbles.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
