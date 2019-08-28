import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.sass']
})
export class RecipeItemComponent implements OnInit {
  @Input()
  public recipe: Recipe;


  // type is set to void b/c it will contain no information
  @Output()
  public recipeSelected: EventEmitter<void> = new EventEmitter();

  onSelected() {
    this.recipeSelected.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
