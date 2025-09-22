"use client"
import { useState, } from "react";
import { ListFilterPlus, Search, ChefHat, Apple, Heart} from "lucide-react";

export default function SearchSection() {
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState("apple");

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
  };
    return (
        <div className="w-[100%] h-100 bg-[var(--primary)] mt-20">
            <div className="w-fit mx-auto pt-15 text-5xl font-bold text-[var(--text-primary-light)] "><p>Discover Amazing Recipes</p></div>
            <div className="w-fit mx-auto mt-3 text-ll font-normal text-[var(--text-secondary-light)] "><p>Find the perfect recipe for any occasion, dietary preference, or craving
            </p></div>
            <div className="w-[88%] h-18 mx-auto mt-10 flex flex-row-3 justify-between">
                <div className="flex flex-row-3 items-center w-[32%] p-2 border border-gray-50/30 rounded-lg">
                    <div className="accent-[var(--highlights)] ">
                        <input type="radio" value={"byName"} checked={selected === "byName"} onChange={handleChange} />
                    </div>
                    <div className="text-blue-400 mx-2">
                        <ChefHat/>
                    </div>
                    <div className="">
                        <div className="text-sm font-semibold text-[var(--text-primary-light)] "><p>Recipe Name</p></div>
                        <div className="text-sm text-[var(--text-secondary-light)] "><p>Search by recipe name</p></div>
                    </div>
                </div>
                <div className="flex flex-row-3 items-center w-[32%] p-2 border border-gray-50/30 rounded-lg">
                    <div className="accent-[var(--highlights)] ">
                        <input type="radio" value={"byIngredients"} checked={selected === "byIngredients"} onChange={handleChange}/>
                    </div>
                    <div className="text-red-400 mx-2">
                        <Apple/>
                    </div>
                    <div className="">
                        <div className="text-sm font-semibold text-[var(--text-primary-light)] "><p>Ingredients</p></div>
                        <div className="text-sm text-[var(--text-secondary-light)] "><p>Search by ingredients</p></div>
                    </div>
                </div>
                <div className="flex flex-row-3 items-center w-[32%] p-2 border border-gray-50/30 rounded-lg">
                    <div className="accent-[var(--highlights)] ">
                        <input type="radio" value={"byNutrition"} checked={selected === "byNutrition"} onChange={handleChange}  />
                    </div>
                    <div className="text-[var(--highlights)] mx-2">
                        <Heart/>
                    </div>
                    <div className="">
                        <div className="text-sm font-semibold text-[var(--text-primary-light)] "><p>Nutritions</p></div>
                        <div className="text-sm text-[var(--text-secondary-light)] "><p>Search by nutritions</p></div>
                    </div>
                </div>
            </div>
            <div className="mt-5 mx-auto w-fit">
                <div className="relative h-fit mr-13 items-center flex flex-row-2">
                    <span className="absolute inset-y-0 left-0 flex items-center text-[var(--text-secondary-light)] pl-3 ">
                        <Search />
                    </span>
                    <form onSubmit={() => { }}>
                        <input
                            type="text"
                            placeholder="Search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className=" w-[83vw] h-12 border border-gray-50/30 placeholder:text-[var(--text-secondary-light)] focus:border-[var(--highlights)] outline-none bg-white/0 text-[var(--text-primary-light)] pl-10"
                        />
                        <button type="submit" className="w-12 h-12 absolute inset-y-0 ml-2 border border-gray-50/30 hover:bg-white/0 bg-white/5">
                            <ListFilterPlus className="mx-auto text-[var(--text-secondary-light)] " />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}