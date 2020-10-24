import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe','This is a sample recipe',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chicken-fajitas-horizontal-jpg-1522721531.jpg',
        [ new Ingredient('Meat',1),new Ingredient('Chips',10)]),
        new Recipe('Another Test Recipe',
        'This is a another recipe','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/salmonpasta-7845868.jpg?quality=90&resize=960,872',
        [ new Ingredient('Fish',3),
          new Ingredient('Buns',2)
        ])
      ];

      constructor(private slsService: ShoppingListService){

      }
      
      getRecipes(){
          return this.recipes.slice(); 
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slsService.addMultipleIngredients(ingredients);
     }
     getRecipe(index: number){
       return this.recipes[index];
     }
}