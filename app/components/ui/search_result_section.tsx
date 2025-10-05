"use client";
import RecipeCard, { Recipe } from "./item_card";

interface Props {
  recipes: Recipe[];
  onLoadMore?: () => Promise<void>;
  canLoadMore?: boolean;
  loading?: boolean;
}

export default function SearchResultSection({ recipes, onLoadMore, canLoadMore = false, loading = false }: Props) {
  return (
    <div className="w-[90%] mx-auto mt-8">
      
      {recipes.length === 0 ? (
        <div className="text-[var(--text-secondary-light)]"></div>
      ) : (
        <>
        <h2 className="text-center text-xl font-semibold mb-4">Search Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recipes.map((r) => (
              <RecipeCard key={r.id} recipe={r} />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            {canLoadMore ? (
              <button
                onClick={() => onLoadMore?.()}
                disabled={loading}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-60"
              >
                {loading ? "Loading..." : "Load more"}
              </button>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
}
