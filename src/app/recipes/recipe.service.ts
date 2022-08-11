import { EventEmitter } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model'

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
          'Hommus',
          'Who does not love a home made bowl of hommus',
          'https://imgs.search.brave.com/zckJLAXlOVUpLw_MfL0AutOZUjwEQh4Os2beI3QGQsM/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5n/N0U0WVVRMHpYZldF/bmpGbmo3V2RRSGFF/OCZwaWQ9QXBp',
          [
            new Ingredient('tbl spoon Oil', 2),
            new Ingredient('hommus', 2)

          ]
        ),
        new Recipe(
          'Shawarma',
          'Amazing for after parties',
          'https://imgs.search.brave.com/UjHopcU1i4xS6xlJJRCRdA5u8du8JC2-T8i1yT7uJNA/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5I/QUlvcGoxMC1IX0pW/TjNBUjByX3lRSGFG/aiZwaWQ9QXBp',
          [
            new Ingredient('tbl spoon Oil', 2),
            new Ingredient('fish', 1),

          ]
        ),
      ]

  getRecipes() {
    return this.recipes.slice()
  }
}
