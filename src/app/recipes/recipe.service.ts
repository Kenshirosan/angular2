import { EventEmitter, Injectable } from '@angular/core';
import{ Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test',
                    'Another test',
                    'https://cdn.pixabay.com/photo/2017/04/04/01/08/fruit-2200001_960_720.jpg',
                    [
                        new Ingredient('Meat', 1),
                        new Ingredient('French Fries', 20)
                    ]
                    ),
        new Recipe('A second test',
                    'Another second test',
                    'http://knowledgeoverflow.com/wp-content/uploads/2013/03/food_photography_burger_by_masterdev777-d3h1ryk.jpg',
                    [
                        new Ingredient('Buns', 2),
                        new Ingredient('Meat', 2)
                    ]
                    )
    ];

    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}