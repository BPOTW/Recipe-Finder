"use server"
// lib/getRecipe.ts

import { recipeData } from "@/app/recipe/[id]/data";
import {Recipe} from '../ui/item_card';


const API_KEY = process.env.SPOONACULAR_KEY;

export async function getRecipeData(id: string): Promise<recipeData> {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${API_KEY}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch recipe");
  return res.json();
}


interface FetchRecipesResponse {
  results: Recipe[];
  offset: number;
  number: number;
  totalResults: number;
}

export async function fetchRecipes(
  query: string,
  number = 12,
  offset = 0
): Promise<FetchRecipesResponse> {
  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(
    query
  )}&number=${number}&offset=${offset}&addRecipeInformation=true&apiKey=${API_KEY}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }

  const data: FetchRecipesResponse = await res.json();
  return data;
}

export async function fetchTopRecipes(): Promise<Recipe[]> {
  const url = `https://api.spoonacular.com/recipes/complexSearch?includeItems=eggs%2Csugar%2Cbreadflour%2Csalt%2Choney%2Cwater%2C&number=8&addRecipeInformation=true&apiKey=${API_KEY}`;

  const res = await fetch(url);


  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }

  const data: FetchRecipesResponse = await res.json();
  return data.results;
}

