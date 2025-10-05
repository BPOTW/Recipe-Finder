"use client";
import { useState } from "react";
import NavBar from "./components/ui/navbar";
import SearchSection from "./components/ui/search_section";
import FilterSection from "./components/ui/filter_section";
import RandomItemSection from "./components/ui/random_item_section";
import SearchResultSection from "./components/ui/search_result_section";

export default function Home() {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [queryState, setQueryState] = useState<string>("");
  const [offset, setOffset] = useState<number>(0);
  const [numberPerPage] = useState<number>(12);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div>
      <NavBar />
      <SearchSection
        onResults={(data) => {
          // data: { results, offset, number, totalResults, query }
          setRecipes(data.results || []);
          setOffset(data.offset ?? 0);
          setTotalResults(data.totalResults ?? 0);
          setQueryState(data.query ?? "");
        }}
      />
      <FilterSection />
      <SearchResultSection
        recipes={recipes}
        onLoadMore={async () => {
          // load more handler
          if (!queryState) return;
          try {
            setLoading(true);
            const nextOffset = offset + numberPerPage;
            const res = await fetch(`/api/search`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ query: queryState, number: numberPerPage, offset: nextOffset }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data?.error || "Failed to fetch");
            setRecipes((prev) => [...prev, ...(data.results || [])]);
            setOffset(nextOffset);
            setTotalResults(data.totalResults ?? totalResults);
          } catch (err: any) {
            setError(err.message || String(err));
          } finally {
            setLoading(false);
          }
        }}
        canLoadMore={recipes.length < totalResults}
        loading={loading}
      />
      <RandomItemSection />
    </div>
  );
}
