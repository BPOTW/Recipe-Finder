import { getRecipeData } from "@/app/components/lib/fetch";
import RecipeHeader from "../recipe_header";
import NavBar from "../../components/ui/navbar";
import Ingredients from "../ingredients";
import Instructions from "../instructions";
import Nutrition from "../nutrition";
import AdditionalInfo from "../additional_info";
// import { mockRecipe } from "../../components/lib/mocdData";

export default async function RecipePage({ params }: { params: { id: string } }) {
  const recipe = await getRecipeData(params.id);
  // const recipe = mockRecipe;

  return (
    // <div className="min-h-screen bg-[--background] text-[--text-primary] font-sans">
      // <div className="container max-w-6xl mx-auto p-4">
        <div className="bg-[--background]">
          <NavBar/>
          <div className="bg-white w-200 h-20"></div>
          
          <div className="flex flex-row">
            <div className="flex flex-col">
              <RecipeHeader recipe={recipe} />
              <Instructions instructions={recipe.analyzedInstructions} />
              <AdditionalInfo recipe={recipe} />
            </div>

            <div className="flex flex-col">
              <Ingredients ingredients={recipe.nutrition.ingredients} />
              <Nutrition nutrition={recipe.nutrition} />
            </div>
          </div>
        </div>
      // </div>
    // </div>
  );
}

  


// "use client"

// import { useState } from "react";
// import { ChevronDown, ChevronUp, Clock, Users, Star, Info } from 'lucide-react';

// import { recipeData } from "./data";

// export async function getRecipe(id: string): Promise<recipeData> {
//     console.log(process.env.SPOONACULAR_KEY);
//   const res = await fetch(
//     `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${process.env.SPOONACULAR_KEY}`,
//     { cache: "no-store" }
//   );
//   console.log(res);

//   if (!res.ok) throw new Error("Failed to fetch recipe");

//   return res.json();
// }

// export default async function RecipePage({ params }: { params: { id: string } }) {
//   const recipe = await getRecipe(params.id);

//   const mainNutrients = recipe.nutrition.nutrients.slice(0, 8);
//   const additionalNutrients = recipe.nutrition.nutrients.slice(8);

//     const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
//   const [showAllNutrients, setShowAllNutrients] = useState(false);

//   const dietaryInfo = [
//     { label: "Gluten Free", value: recipe.glutenFree },
//     { label: "Dairy Free", value: recipe.dairyFree },
//     { label: "Vegetarian", value: recipe.vegetarian },
//     { label: "Vegan", value: recipe.vegan },
//   ].filter(item => item.value);

//   return (
//     <div style={{ 
//       minHeight: '100vh', 
//       backgroundColor: 'var(--background)', 
//       color: 'var(--text-primary)',
//       fontFamily: 'system-ui, -apple-system, sans-serif'
//     }}>
//       <style jsx>{`
//         :root {
//           --primary: #2E7D32;
//           --secondary: #FF7043;
//           --text-primary-light: #ffffff;
//           --text-secondary-light: #d1d5db;
//           --white: #FFFFFF;
//           --card: #FFFFFF;
//           --text-primary: #333333;
//           --text-secondary: #666666;
//           --highlights: #FFD54F;
//           --background: #F9F9F9;
//           --foreground: #171717;
//         }
        
//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 2rem 1rem;
//         }
        
//         .recipe-header {
//           background: var(--card);
//           border-radius: 16px;
//           padding: 2rem;
//           margin-bottom: 2rem;
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//         }
        
//         .recipe-image {
//           width: 100%;
//           max-width: 400px;
//           height: 300px;
//           object-fit: cover;
//           border-radius: 12px;
//           margin-bottom: 1.5rem;
//         }
        
//         .recipe-title {
//           font-size: 2.5rem;
//           font-weight: bold;
//           color: var(--primary);
//           margin-bottom: 1rem;
//           line-height: 1.2;
//         }
        
//         .recipe-meta {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 1.5rem;
//           margin-bottom: 1.5rem;
//         }
        
//         .meta-item {
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           color: var(--text-secondary);
//         }
        
//         .health-score {
//           background: linear-gradient(135deg, var(--primary), #4CAF50);
//           color: var(--text-primary-light);
//           padding: 0.5rem 1rem;
//           border-radius: 50px;
//           font-weight: bold;
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//         }
        
//         .dietary-tags {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 0.5rem;
//           margin-top: 1rem;
//         }
        
//         .dietary-tag {
//           background: var(--highlights);
//           color: var(--text-primary);
//           padding: 0.25rem 0.75rem;
//           border-radius: 20px;
//           font-size: 0.875rem;
//           font-weight: 500;
//         }
        
//         .section {
//           background: var(--card);
//           border-radius: 16px;
//           padding: 2rem;
//           margin-bottom: 2rem;
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//         }
        
//         .section-title {
//           font-size: 1.5rem;
//           font-weight: bold;
//           color: var(--primary);
//           margin-bottom: 1.5rem;
//           border-bottom: 2px solid var(--highlights);
//           padding-bottom: 0.5rem;
//         }
        
//         .ingredients-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//           gap: 0.75rem;
//         }
        
//         .ingredient-item {
//           padding: 0.75rem;
//           background: var(--background);
//           border-radius: 8px;
//           border-left: 4px solid var(--secondary);
//         }
        
//         .ingredient-name {
//           font-weight: 500;
//           color: var(--text-primary);
//           text-transform: capitalize;
//         }
        
//         .ingredient-amount {
//           color: var(--text-secondary);
//           font-size: 0.875rem;
//           margin-top: 0.25rem;
//         }
        
//         .instructions-list {
//           space-y: 1.5rem;
//         }
        
//         .instruction-step {
//           display: flex;
//           gap: 1rem;
//           padding: 1rem;
//           background: var(--background);
//           border-radius: 8px;
//           margin-bottom: 1rem;
//         }
        
//         .step-number {
//           background: var(--primary);
//           color: var(--text-primary-light);
//           width: 2rem;
//           height: 2rem;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-weight: bold;
//           flex-shrink: 0;
//         }
        
//         .step-text {
//           color: var(--text-primary);
//           line-height: 1.6;
//         }
        
//         .nutrition-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//           gap: 1rem;
//           margin-bottom: 1.5rem;
//         }
        
//         .nutrient-card {
//           background: var(--background);
//           padding: 1rem;
//           border-radius: 8px;
//           text-align: center;
//           border-top: 3px solid var(--secondary);
//         }
        
//         .nutrient-name {
//           font-weight: 500;
//           color: var(--text-secondary);
//           font-size: 0.875rem;
//           margin-bottom: 0.5rem;
//         }
        
//         .nutrient-amount {
//           font-size: 1.25rem;
//           font-weight: bold;
//           color: var(--primary);
//         }
        
//         .nutrient-daily {
//           font-size: 0.75rem;
//           color: var(--text-secondary);
//           margin-top: 0.25rem;
//         }
        
//         .caloric-breakdown {
//           display: flex;
//           justify-content: space-around;
//           margin-top: 2rem;
//           padding: 1.5rem;
//           background: var(--background);
//           border-radius: 12px;
//         }
        
//         .breakdown-item {
//           text-align: center;
//         }
        
//         .breakdown-label {
//           font-size: 0.875rem;
//           color: var(--text-secondary);
//           margin-bottom: 0.5rem;
//         }
        
//         .breakdown-value {
//           font-size: 1.5rem;
//           font-weight: bold;
//           color: var(--primary);
//         }
        
//         .toggle-button {
//           background: var(--secondary);
//           color: var(--text-primary-light);
//           border: none;
//           padding: 0.75rem 1.5rem;
//           border-radius: 8px;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           font-weight: 500;
//           transition: background-color 0.2s;
//           margin-top: 1rem;
//         }
        
//         .toggle-button:hover {
//           background: #E64A19;
//         }
        
//         .summary-text {
//           color: var(--text-secondary);
//           line-height: 1.6;
//           font-size: 1rem;
//         }
        
//         @media (max-width: 768px) {
//           .container {
//             padding: 1rem;
//           }
          
//           .recipe-title {
//             font-size: 2rem;
//           }
          
//           .recipe-meta {
//             flex-direction: column;
//             gap: 1rem;
//           }
          
//           .nutrition-grid {
//             grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//           }
          
//           .caloric-breakdown {
//             flex-direction: column;
//             gap: 1rem;
//           }
//         }
//       `}</style>

//       <div className="container">
//         {/* Recipe Header */}
//         <div className="recipe-header">
//           <img 
//             src={recipe.image} 
//             alt={recipe.title}
//             className="recipe-image"
//           />
//           <h1 className="recipe-title">{recipe.title}</h1>
          
//           <div className="recipe-meta">
//             <div className="meta-item">
//               <Clock size={20} />
//               <span>{recipe.readyInMinutes} minutes</span>
//             </div>
//             <div className="meta-item">
//               <Users size={20} />
//               <span>{recipe.servings} servings</span>
//             </div>
//             <div className="health-score">
//               <Star size={20} />
//               <span>Health Score: {recipe.healthScore}/100</span>
//             </div>
//           </div>

//           {dietaryInfo.length > 0 && (
//             <div className="dietary-tags">
//               {dietaryInfo.map((item, index) => (
//                 <span key={index} className="dietary-tag">
//                   {item.label}
//                 </span>
//               ))}
//             </div>
//           )}

//           <div className="summary-text" style={{ marginTop: '1.5rem' }}>
//             {recipe.summary.replace(/<[^>]*>/g, '')}
//           </div>
//         </div>

//         {/* Ingredients Section */}
//         <div className="section">
//           <h2 className="section-title">Ingredients</h2>
//           <div className="ingredients-grid">
//             {recipe.nutrition.ingredients.map((ingredient, index) => (
//               <div key={index} className="ingredient-item">
//                 <div className="ingredient-name">{ingredient.name}</div>
//                 <div className="ingredient-amount">
//                   {ingredient.amount} {ingredient.unit}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Instructions Section */}
//         <div className="section">
//           <h2 className="section-title">Instructions</h2>
//           <div className="instructions-list">
//             {recipe.analyzedInstructions[0]?.steps.map((step) => (
//               <div key={step.number} className="instruction-step">
//                 <div className="step-number">{step.number}</div>
//                 <div className="step-text">{step.step}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Nutrition Section */}
//         <div className="section">
//           <h2 className="section-title">Nutrition Information</h2>
          
//           <div className="nutrition-grid">
//             {mainNutrients.map((nutrient, index) => (
//               <div key={index} className="nutrient-card">
//                 <div className="nutrient-name">{nutrient.name}</div>
//                 <div className="nutrient-amount">
//                   {Math.round(nutrient.amount)} {nutrient.unit}
//                 </div>
//                 <div className="nutrient-daily">
//                   {Math.round(nutrient.percentOfDailyNeeds as number)}% DV
//                 </div>
//               </div>
//             ))}
//           </div>

//           {!showAllNutrients && (
//             <button 
//               className="toggle-button"
//               onClick={() => setShowAllNutrients(true)}
//             >
//               <Info size={16} />
//               Show More Nutrients
//               <ChevronDown size={16} />
//             </button>
//           )}

//           {showAllNutrients && (
//             <>
//               <div className="nutrition-grid">
//                 {additionalNutrients.map((nutrient, index) => (
//                   <div key={index} className="nutrient-card">
//                     <div className="nutrient-name">{nutrient.name}</div>
//                     <div className="nutrient-amount">
//                       {Math.round(nutrient.amount)} {nutrient.unit}
//                     </div>
//                     <div className="nutrient-daily">
//                       {Math.round(nutrient.percentOfDailyNeeds as number)}% DV
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <button 
//                 className="toggle-button"
//                 onClick={() => setShowAllNutrients(false)}
//               >
//                 Show Less
//                 <ChevronUp size={16} />
//               </button>
//             </>
//           )}

//           <div className="caloric-breakdown">
//             <div className="breakdown-item">
//               <div className="breakdown-label">Protein</div>
//               <div className="breakdown-value">
//                 {Math.round(recipe.nutrition.caloricBreakdown.percentProtein)}%
//               </div>
//             </div>
//             <div className="breakdown-item">
//               <div className="breakdown-label">Fat</div>
//               <div className="breakdown-value">
//                 {Math.round(recipe.nutrition.caloricBreakdown.percentFat)}%
//               </div>
//             </div>
//             <div className="breakdown-item">
//               <div className="breakdown-label">Carbs</div>
//               <div className="breakdown-value">
//                 {Math.round(recipe.nutrition.caloricBreakdown.percentCarbs)}%
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Additional Information (Hidden by default) */}
//         {!showAdditionalInfo && (
//           <button 
//             className="toggle-button"
//             onClick={() => setShowAdditionalInfo(true)}
//             style={{ margin: '0 auto', display: 'flex' }}
//           >
//             <Info size={16} />
//             Show Additional Information
//             <ChevronDown size={16} />
//           </button>
//         )}

//         {showAdditionalInfo && (
//           <div className="section">
//             <h2 className="section-title">Additional Information</h2>
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
//               <div>
//                 <strong>Recipe ID:</strong> {recipe.id}
//               </div>
//               <div>
//                 <strong>Spoonacular Score:</strong> {Math.round(recipe.spoonacularScore)}/100
//               </div>
//               <div>
//                 <strong>Very Healthy:</strong> {recipe.veryHealthy ? 'Yes' : 'No'}
//               </div>
//             </div>
            
//             <button 
//               className="toggle-button"
//               onClick={() => setShowAdditionalInfo(false)}
//               style={{ marginTop: '1.5rem' }}
//             >
//               Hide Additional Information
//               <ChevronUp size={16} />
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

