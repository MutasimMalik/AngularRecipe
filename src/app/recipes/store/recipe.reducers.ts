import { Recipe } from '../recipes.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers'

export interface FeatureState extends fromApp.AppState{
    recipes: State
}

export interface State{
    recipes: Recipe[];
}

const initialState: State = {
    recipes: [
        new Recipe('A Test Recipe', 
        'This is simply a test', 
        'https://assets.epicurious.com/photos/5d49f1ea888da200097dce24/6:4/w_620%2Ch_413/TomatoesHerbs_RECIPE_073119_278.jpg',
        [
            new Ingredient('Meat',1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Another Test Recipe',
         'This is simply a test', 
         'https://assets.epicurious.com/photos/5d49f1ea888da200097dce24/6:4/w_620%2Ch_413/TomatoesHerbs_RECIPE_073119_278.jpg',
         [
             new Ingredient('Buns',2),
             new Ingredient('Meat',2)
         ])
      ]
};

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions){
    switch(action.type){
        case(RecipeActions.SET_RECIPES):
        return {
            ...state,
            recipes: [...action.payload]
        };
        case(RecipeActions.ADD_RECIPE):
        return{
            ...state,
            recipes: [...state.recipes, action.payload]
        };
        case(RecipeActions.UPDATE_RECIPE):
        const recipe = state.recipes[action.payload.index];
        const updatedRecipe = {
            ...recipe,
            ...action.payload.updatedRecipe
        };
        const recipes = [...state.recipes];
        recipes[action.payload.index]=updatedRecipe;  
        return{
            ...state,
            recipes: recipes
        };
        case(RecipeActions.DELETE_RECIPE):
        const oldRecipes = [...state.recipes];
        oldRecipes.splice(action.payload, 1);
        return{
            ...state,
            recipes: oldRecipes
        } ;
        default:
            return state;

    }
    return state;
}