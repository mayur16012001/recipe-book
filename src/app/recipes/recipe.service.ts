import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { HttpClient} from '@angular/common/http'
@Injectable()

export class RecipeService{
     recipes: Recipe[] =
    [
        new Recipe("Big Night Pizza",
        [
          "Add hot water to yeast in a large bowl and let sit for 15 minutes.",
          "Mix in oil, sugar, salt, and flour and let sit for 1 hour.",
          "Knead the dough and spread onto a pan.",
          "Spread pizza sauce and sprinkle cheese.",
          "Add any optional toppings as you wish.",
          "Bake at 400 deg Fahrenheit for 15 minutes.",
          "Enjoy!"
      ],
        'https://image.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg',
        [ new Ingredient('yeast',"5 teaspoons"),
          new Ingredient('flour',"5 cups"),
          new Ingredient('vegetable oil',"4 tablespoons"),
          new Ingredient('sugar',"2 tablespoons"),
          new Ingredient('pizza sauce',"1/4 cup"),
          new Ingredient('mozzarella cheese',"3/4 cup"),
          
        ]
        ),
        new Recipe('Roasted Asparagus',
        [
          "Preheat oven to 425°F.",
          "Cut off the woody bottom part of the asparagus spears and discard.",
          "With a vegetable peeler, peel off the skin on the bottom 2-3 inches of the spears (this keeps the asparagus from being all, and if you eat asparagus you know what I mean by that).",
          "Place asparagus on foil-lined baking sheet and drizzle with olive oil.",
          "Sprinkle with salt.",
          "With your hands, roll the asparagus around until they are evenly coated with oil and salt.",
          "Roast for 10-15 minutes, depending on the thickness of your stalks and how tender you like them.",
          "They should be tender when pierced with the tip of a knife.",
          "The tips of the spears will get very brown but watch them to prevent burning.",
          "They are great plain, but sometimes I serve them with a light vinaigrette if we need something acidic to balance out our meal."
      ],
        'https://d2zupx01utsj9r.cloudfront.net/media/filer_public/98/56/9856a34d-3eac-467a-892d-dab29c378b20/ov_recipe_asparagus_25.jpg',
        [ new Ingredient('asparagus',"1 lb"),
          new Ingredient('Condiments',"1 1/2 tbsp"),
          new Ingredient('kosher salt',"1/2 tsp")
        ]),
        new Recipe('Curried Lentils and Rice',
        [
          "Bring broth to a low boil.",
          "Add curry powder and salt.",
          "Cook lentils for 20 minutes.",
          "Add rice and simmer for 20 minutes.",
          "Enjoy!"
      ],
        'http://dagzhsfg97k4.cloudfront.net/wp-content/uploads/2012/05/lentils3.jpg',
        [ new Ingredient('dried green lentils',"1 lb"),
          new Ingredient('basmati rice',"1 1/2 tbsp"),
          new Ingredient('curry powder',"1/2 tsp"),
          new Ingredient('salt',"1 tsp"),
          new Ingredient('beef broth',"1 quart"),
        ]),
        new Recipe('Pumpkin Cake',
        ['Preheat oven to 350 degrees F (175 degrees C).',' Grease and flour a 12x18 inch pan.',' Sift together the flour, baking powder, baking soda, salt and cinnamon.',' Set aside, In a large bowl combine sugar and oil. Blend in vanilla and pumpkin, then beat in eggs one at a time. Gradually beat in flour mixture.',' Stir in nuts. Spread batter into prepared 12x18 inch pan,Bake in the preheated oven for 30 minutes, or until a toothpick inserted into the center of the cake comes out clean.',' Allow to cool. '],
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4122669.jpg&w=596&h=596&c=sc&poi=face&q=85',
        [ new Ingredient('white sugar',"2 Cups"),
          new Ingredient('vanilla extract',"1 tbsp"),
          new Ingredient('canned pumpkin',"2 cups"),
          new Ingredient('Eggs',"4 large"),
          new Ingredient('vegetable oil',"1 1/4 cups"),
          new Ingredient('all-purpose flour',"2 cups"),
          new Ingredient('Baking Sode',"2 tbsp"),
          new Ingredient('ground cinnamon',"2 tbsp")
        ]),
        new Recipe('Bleu Cheese Macaroni',
        ['Bring a large pot of lightly salted water to a boil. Add macaroni and cook for 8 to 10 minutes or until al dente; drain.','Meanwhile, in a medium saucepan over medium heat combine butter, salt, pepper and bell peppers. Simmer until heated through. Stir in cream, flour, yogurt, bleu cheese and Parmesan cheese.','Stir cooked macaroni into cheese mixture and serve hot.'],
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1105026.jpg',
        [ new Ingredient('elbow macaroni',"2 Cups"),
          new Ingredient('butter',"2 tbsp"),
          new Ingredient('salt',"1 tbsp"),
          new Ingredient('black pepper',"1/2 tbsp"),
          new Ingredient('sliced green bell peppe',"1/2 cup"),
          new Ingredient('sliced red bell pepper',"1/2 cup"),
          new Ingredient('heavy cream',"3/4 cup"),
          new Ingredient('plain yogurt',"1/2 cup"),
          new Ingredient('crumbled blue cheese',"1 cup"),
          new Ingredient('Parmesan cheese',"1/2 cup")
        ]),
        new Recipe('Roasted Beet Salad',
        ['Bring a large pot of lightly salted water to a boil. Add macaroni and cook for 8 to 10 minutes or until al dente; drain.','Meanwhile, in a medium saucepan over medium heat combine butter, salt, pepper and bell peppers. Simmer until heated through. Stir in cream, flour, yogurt, bleu cheese and Parmesan cheese.','Stir cooked macaroni into cheese mixture and serve hot.'],
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6423602.jpg',
        [ new Ingredient('trimmed and scrubbed',"6 medium beets"),
          new Ingredient('aged balsamic vinegar',"2 tbsp"),
          new Ingredient('real maple syrup',"2 tbsp"),
          new Ingredient('salt and ground black pepper to taste pepper',"")
        ])

      ];
      
      constructor(private slsService: ShoppingListService,private http:HttpClient){
        
      }
      
      getRecipes(){
        console.log(this.recipes)
          return this.recipes.slice(); 
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slsService.addMultipleIngredients(ingredients);
     }
     getRecipe(index: number){
       return this.recipes[index];
     }
}