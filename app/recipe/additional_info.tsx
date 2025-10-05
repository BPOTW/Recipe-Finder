
import { recipeData } from "./[id]/data";

export default function AdditionalInfo({ recipe }: { recipe: recipeData }) {


  return (
    <div className="bg-white rounded-xl shadow-md p-6 ml-6 mb-10 w-[60vw]">
      <h2 className="text-xl font-bold text-green-700 mb-3">Additional Info</h2>
      <div className="grid sm:grid-cols-2 gap-3 text-gray-700">
        <div><b>Recipe ID:</b> {recipe.id}</div>
        <div><b>Spoonacular Score:</b> {Math.round(recipe.spoonacularScore)}/100</div>
        <div><b>Very Healthy:</b> {recipe.veryHealthy ? "Yes" : "No"}</div>
      </div>
    </div>
  );
}
