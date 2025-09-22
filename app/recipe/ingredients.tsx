// components/recipe/Ingredients.tsx
import { Ingredient } from "../recipe/[id]/data";

export default function Ingredients({ ingredients }: { ingredients: Ingredient[] }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6 mt-10 w-[32vw]">
      <h2 className="text-xl font-bold text-green-700 mb-3">Ingredients</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {ingredients.map((ing, i) => (
          <div key={i} className="p-3 bg-gray-50 rounded border-l-4 border-orange-500">
            <div className="font-medium capitalize">{ing.name}</div>
            <div className="text-sm text-gray-600">{ing.amount} {ing.unit}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
