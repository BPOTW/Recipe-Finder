// app/recipe/mockRecipe.ts
import { recipeData, Unit } from "../../recipe/[id]/data";

export const mockRecipe: recipeData = {
  id: 12345,
  image: "https://img.spoonacular.com/recipes/12345-636x393.jpg",
  imageType: "jpg",
  title: "Mock Spaghetti Bolognese",
  readyInMinutes: 45,
  servings: 4,
  sourceUrl: "https://example.com/mock-spaghetti",
  vegetarian: false,
  vegan: false,
  glutenFree: false,
  dairyFree: true,
  veryHealthy: false,
  cheap: true,
  veryPopular: true,
  sustainable: false,
  lowFodmap: false,
  weightWatcherSmartPoints: 12,
  gaps: "no",
  preparationMinutes: 15,
  cookingMinutes: 30,
  aggregateLikes: 456,
  healthScore: 72,
  creditsText: "Mock Kitchen",
  license: null,
  sourceName: "Mock Kitchen",
  pricePerServing: 250,
  nutrition: {
    nutrients: [
      { name: "Calories", amount: 500, unit: Unit.Kcal, percentOfDailyNeeds: 25 },
      { name: "Protein", amount: 20, unit: Unit.G, percentOfDailyNeeds: 40 },
    ],
    properties: [],
    flavonoids: [],
    ingredients: [
      { id: 1, name: "spaghetti", amount: 200, unit: "g", nutrients: [] },
      { id: 2, name: "ground beef", amount: 300, unit: "g", nutrients: [] },
      { id: 3, name: "tomato sauce", amount: 150, unit: "ml", nutrients: [] },
    ],
    caloricBreakdown: {
      percentProtein: 20,
      percentFat: 30,
      percentCarbs: 50,
    },
    weightPerServing: { amount: 250, unit: Unit.G },
  },
  summary:
    "This is a mock summary for a delicious Spaghetti Bolognese. Perfect for testing your UI without hitting the API.",
  cuisines: ["Italian"],
  dishTypes: ["main course", "dinner"],
  diets: [],
  occasions: ["mock occasion"],
  analyzedInstructions: [
    {
      name: "Main",
      steps: [
        { number: 1, step: "Boil water and cook spaghetti.", ingredients: [], equipment: [] },
        { number: 2, step: "Cook ground beef in a pan.", ingredients: [], equipment: [] },
        { number: 3, step: "Mix spaghetti with sauce and beef.", ingredients: [], equipment: [] },
      ],
    },
  ],
  spoonacularScore: 88,
  spoonacularSourceUrl: "https://spoonacular.com/mock-spaghetti-12345",
};
