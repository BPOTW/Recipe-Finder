"use client"
import { useState, useEffect } from 'react';
import { fetchTopRecipes } from '../lib/fetch';
import RecipeCard, { Recipe } from './item_card';
export default function RandomItemSection() {
const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTopRecipes()
      .then(setRecipes)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
    return (
        <div className="w-[98vw] mt-15 mb-20">
            <div className="text-center text-xl font-semibold"><p>Top Recipes</p></div>
            <div className="text-center text-lg font-medium text-neutral-400 mt-2"><p>Most Popular Recipes Just For You</p></div>
            <div className="w-[95vw] h-fit mt-20 mx-auto grid grid-cols-4 gap-4 ">
                {
                    recipes.map((data)=>(
                        <RecipeCard key={data.id} recipe={data}/>
                    ))
                }
            </div>
        </div>
    )
}

// Example usage with your data
const sampleData = {
    "results": [
        {
            "id": 715415,
            "image": "https://img.spoonacular.com/recipes/715415-312x231.jpg",
            "imageType": "jpg",
            "title": "Red Lentil Soup with Chicken and Turnips",
            "readyInMinutes": 55,
            "servings": 8,
            "sourceUrl": "https://www.pinkwhen.com/red-lentil-soup-with-chicken-and-turnips/",
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": true,
            "cheap": false,
            "veryPopular": true,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 11,
            "gaps": "no",
            "preparationMinutes": 10,
            "cookingMinutes": 45,
            "aggregateLikes": 1866,
            "healthScore": 100.0,
            "creditsText": "pinkwhen.com",
            "license": null,
            "sourceName": "pinkwhen.com",
            "pricePerServing": 300.45,
            "summary": "Red Lentil Soup with Chicken and Turnips might be a good recipe to expand your main course repertoire. This recipe serves 8 and costs $3.0 per serving. One serving contains <b>477 calories</b>, <b>27g of protein</b>, and <b>20g of fat</b>. It is brought to you by Pink When. 1866 people have tried and liked this recipe. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. From preparation to the plate, this recipe takes approximately <b>55 minutes</b>. It is a good option if you're following a <b>gluten free and dairy free</b> diet. Head to the store and pick up salt and pepper, canned tomatoes, flat leaf parsley, and a few other things to make it today. Overall, this recipe earns a <b>spectacular spoonacular score of 99%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-682185\">Red Lentil and Chicken Soup</a>, <a href=\"https://spoonacular.com/recipes/red-lentil-and-chicken-soup-1058971\">Red Lentil and Chicken Soup</a>, and <a href=\"https://spoonacular.com/recipes/red-lentil-soup-34121\">Red-Lentil Soup</a>.",
            "cuisines": [],
            "dishTypes": [
                "lunch",
                "soup",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [
                "gluten free",
                "dairy free"
            ],
            "occasions": [
                "fall",
                "winter"
            ],
            "spoonacularScore": 99.42810821533203,
            "spoonacularSourceUrl": "https://spoonacular.com/red-lentil-soup-with-chicken-and-turnips-715415"
        },
        {
            "id": 716406,
            "image": "https://img.spoonacular.com/recipes/716406-312x231.jpg",
            "imageType": "jpg",
            "title": "Asparagus and Pea Soup: Real Convenience Food",
            "readyInMinutes": 20,
            "servings": 2,
            "sourceUrl": "https://fullbellysisters.blogspot.com/2011/03/asparagus-and-pea-soup-real-convenience.html",
            "vegetarian": true,
            "vegan": true,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": true,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 2,
            "gaps": "GAPS_4",
            "preparationMinutes": null,
            "cookingMinutes": null,
            "aggregateLikes": 207,
            "healthScore": 100.0,
            "creditsText": "Full Belly Sisters",
            "license": "CC BY-SA 3.0",
            "sourceName": "Full Belly Sisters",
            "pricePerServing": 178.37,
            "summary": "Asparagus and Pea Soup: Real Convenience Food requires approximately <b>20 minutes</b> from start to finish. Watching your figure? This gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe has <b>217 calories</b>, <b>11g of protein</b>, and <b>8g of fat</b> per serving. This recipe serves 2. For <b>$1.78 per serving</b>, this recipe <b>covers 25%</b> of your daily requirements of vitamins and minerals. <b>Autumn</b> will be even more special with this recipe. It works well as a hor d'oeuvre. 207 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. A mixture of vegetable broth, evoo, garlic, and a handful of other ingredients are all it takes to make this recipe so yummy. All things considered, we decided this recipe <b>deserves a spoonacular score of 96%</b>. This score is outstanding. Try <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1393979\">Asparagus and Pea Soup: Real Convenience Food</a>, <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1376201\">Asparagus and Pea Soup: Real Convenience Food</a>, and <a href=\"https://spoonacular.com/recipes/asparagus-and-pea-soup-real-convenience-food-1362341\">Asparagus and Pea Soup: Real Convenience Food</a> for similar recipes.",
            "cuisines": [],
            "dishTypes": [
                "antipasti",
                "soup",
                "starter",
                "snack",
                "appetizer",
                "antipasto",
                "hor d'oeuvre"
            ],
            "diets": [
                "gluten free",
                "dairy free",
                "paleolithic",
                "lacto ovo vegetarian",
                "primal",
                "vegan"
            ],
            "occasions": [
                "fall",
                "winter"
            ],
            "spoonacularScore": 99.41780090332031,
            "spoonacularSourceUrl": "https://spoonacular.com/asparagus-and-pea-soup-real-convenience-food-716406"
        }
    ],
    "offset": 0,
    "number": 2,
    "totalResults": 5224
};


