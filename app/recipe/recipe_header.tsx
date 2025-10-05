// components/recipe/RecipeHeader.tsx
import { Clock, Users, Star } from "lucide-react";
import { recipeData } from "../recipe/[id]/data";
import Image from "next/image";

export default function RecipeHeader({ recipe }: { recipe: recipeData }) {
  const dietaryInfo = [
    { label: "Gluten Free", value: recipe.glutenFree },
    { label: "Dairy Free", value: recipe.dairyFree },
    { label: "Vegetarian", value: recipe.vegetarian },
    { label: "Vegan", value: recipe.vegan },
  ].filter(item => item.value);

  return (
    <div className="bg-[var--background] pl-6 mb-6 mt-10 w-[65vw]">
      <Image src={recipe.image} priority alt={recipe.title} width={600} height={300} className="w-[60vw] h-[70vh] rounded-lg mb-4" />
      <h1 className="text-3xl font-bold text-green-700">{recipe.title}</h1>

      <div className="flex gap-6 mt-3 text-gray-600">
        <div className="flex items-center gap-1"><Clock size={18}/> {recipe.readyInMinutes} min</div>
        <div className="flex items-center gap-1"><Users size={18}/> {recipe.servings} servings</div>
        <div className="flex items-center gap-1 text-white bg-green-600 px-3 py-1 rounded-full">
          <Star size={18}/> {recipe.healthScore}/100
        </div>
      </div>

      {dietaryInfo.length > 0 && (
        <div className="flex gap-2 mt-3 flex-wrap">
          {dietaryInfo.map((item, i) => (
            <span key={i} className="border border-yellow-300 px-2 py-1 rounded-full text-[10px] font-semibold text-[var(--text-primary)]">{item.label}</span>
          ))}
        </div>
      )}

      <p className="mt-4 text-gray-700 w-[60vw]">{recipe.summary.replace(/<[^>]*>/g, "")}</p>
    </div>
  );
}
