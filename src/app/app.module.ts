import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './shared/header-component/header-component.component';
import { ShoppingListComponent } from './feature/shoppingList/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './feature/shoppingList/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './feature/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './feature/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './feature/recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './feature/recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
