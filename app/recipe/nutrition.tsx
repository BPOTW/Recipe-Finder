// components/recipe/Nutrition.tsx
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Nutrition as NutritionType } from "../recipe/[id]/data";

export default function Nutrition({ nutrition }: { nutrition: NutritionType }) {
  const [showAll, setShowAll] = useState(false);

  const main = nutrition.nutrients.slice(0, 9);
  const extra = nutrition.nutrients.slice(9);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold text-green-700 mb-3">Nutrition</h2>

      <div className="flex justify-around mt-4 border border-orange-500 rounded-2xl p-4">
        <div className="text-center">
          <div className="text-sm text-gray-500">Protein</div>
          <div className="font-bold text-green-700">{Math.round(nutrition.caloricBreakdown.percentProtein)}%</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500">Fat</div>
          <div className="font-bold text-green-700">{Math.round(nutrition.caloricBreakdown.percentFat)}%</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500">Carbs</div>
          <div className="font-bold text-green-700">{Math.round(nutrition.caloricBreakdown.percentCarbs)}%</div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {main.map((n, i) => (
          <div key={i} className="bg-gray-50 p-3 rounded border-t-2 border-orange-500 text-center">
            <div className="text-gray-600 text-sm">{n.name}</div>
            <div className="text-green-700 font-bold">{Math.round(n.amount)} {n.unit}</div>
            <div className="text-xs text-gray-500">{Math.round(n.percentOfDailyNeeds ?? 0)}% DV</div>
          </div>
        ))}
      </div>

      {!showAll && (
        <button onClick={() => setShowAll(true)} className="mt-3 px-4 py-2 bg-orange-500 text-white rounded flex items-center gap-1">
          Show More <ChevronDown size={16}/>
        </button>
      )}

      {showAll && (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
            {extra.map((n, i) => (
              <div key={i} className="bg-gray-50 p-3 rounded border-t-2 border-orange-500 text-center">
                <div className="text-gray-600 text-sm">{n.name}</div>
                <div className="text-green-700 font-bold">{Math.round(n.amount)} {n.unit}</div>
                <div className="text-xs text-gray-500">{Math.round(n.percentOfDailyNeeds ?? 0)}% DV</div>
              </div>
            ))}
          </div>
          <button onClick={() => setShowAll(false)} className="mt-3 px-4 py-2 bg-orange-500 text-white rounded flex items-center gap-1">
            Show Less <ChevronUp size={16}/>
          </button>
        </>
      )}

      
    </div>
  );
}
