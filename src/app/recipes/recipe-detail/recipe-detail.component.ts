import { Component } from '@angular/core';
import {Recipe} from '../../recipes/recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent {
  id:number;
  recipe: Recipe;
  constructor(private recipeService: RecipeService,
              private router:ActivatedRoute,
              private route: Router) {}
  ngOnInit(){
    this.router.params.subscribe(
        (params: Params) => {
          this.id =+ params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
    );
  }
  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe(){
    this.route.navigate(['edit'],{relativeTo: this.router})
  }
}
