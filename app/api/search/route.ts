import { NextResponse } from "next/server";
import { fetchRecipes } from "@/app/components/lib/fetch";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const query = typeof body?.query === "string" ? body.query : "";
    const number = typeof body?.number === "number" ? body.number : 12;
    const offset = typeof body?.offset === "number" ? body.offset : 0;

    if (!query || query.trim().length === 0) {
      return NextResponse.json({ results: [], offset: 0, number, totalResults: 0 });
    }

    const data = await fetchRecipes(query, number, offset);
    return NextResponse.json({ results: data.results, offset: data.offset, number: data.number, totalResults: data.totalResults });
  } catch (err) {
    console.error("/api/search error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
