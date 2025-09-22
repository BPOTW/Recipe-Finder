import NavBar from "./components/ui/navbar";
import SearchSection from "./components/ui/search_section";
import FilterSection from "./components/ui/filter_section";
import RandomItemSection from "./components/ui/random_item_section";
export default function Home() {
  return (
    <div>
      <NavBar/>
      <SearchSection/>
      <FilterSection/>
      <RandomItemSection/>
    </div>
  );
}
