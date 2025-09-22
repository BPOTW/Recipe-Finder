import Image from "next/image";
import { Clock, Users, Heart, Star } from "lucide-react";
import Link from "next/link";

export interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: number | null;
  cookingMinutes: number | null;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string;
  license: string | null;
  sourceName: string;
  pricePerServing: number;
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  occasions: string[];
  spoonacularScore: number;
  spoonacularSourceUrl: string;
}

export interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const formatPrice = (cents?: number | null) => {
    if (!cents || cents <= 0) return "N/A";
    return `${(cents / 100).toFixed(2)}`;
  };

  const getDietBadges = () => {
    const badges: string[] = [];
    if (recipe.vegetarian) badges.push("Vegetarian");
    if (recipe.vegan) badges.push("Vegan");
    if (recipe.glutenFree) badges.push("Gluten Free");
    if (recipe.dairyFree) badges.push("Dairy Free");
    if (recipe.veryHealthy) badges.push("Very Healthy");
    return badges.slice(0, 2); // Show max 2 badges
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-sm">
      {/* Header Image */}
      <div className="relative h-40">
        <Image
          src={recipe.image || "/placeholder-recipe.jpg"}
          alt={recipe.title || "Recipe"}
          fill
          className="object-cover"
          sizes="(max-width: 384px) 100vw, 384px"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          <Heart className="w-3 h-3 text-red-500" />
          <span className="text-xs font-medium text-gray-700">
            {recipe.aggregateLikes ?? 0}
          </span>
        </div>
        {recipe.veryPopular && (
          <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            POPULAR
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="font-bold text-gray-900 text-sm mb-2 line-clamp-2 leading-tight">
          {recipe.title || "Untitled Recipe"}
        </h3>

        {/* Quick Stats */}
        <div className="flex justify-between items-center mb-3 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{recipe.readyInMinutes ?? "?"}min</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>{recipe.servings ?? "?"} servings</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-yellow-500" />
            <span className="font-medium">
              {recipe.healthScore ? Math.round(recipe.healthScore) : "?"}
            </span>
          </div>
        </div>

        {/* Price & Score */}
        <div className="flex justify-between items-center mb-3">
          <div className="text-sm font-semibold text-green-600">
            {formatPrice(recipe.pricePerServing)}/serving
          </div>
          <div className="text-xs text-gray-500">
            Score:{" "}
            {recipe.spoonacularScore ? Math.round(recipe.spoonacularScore) : "?"}%
          </div>
        </div>

        {/* Diet Badges */}
        {getDietBadges().length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {getDietBadges().map((diet, index) => (
              <span
                key={index}
                className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
              >
                {diet}
              </span>
            ))}
          </div>
        )}

        {/* Action Button */}
        
        <Link href={`/recipe/${recipe.id}`}>
          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg text-sm transition-all duration-200 transform hover:scale-105 active:scale-95">
            View Recipe
          </button>
        </Link>
      </div>
    </div>
  );
}
