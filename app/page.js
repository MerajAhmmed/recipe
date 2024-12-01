import HandPicked from "@/components/HandPicked";
import HeroSectionRecipe from "@/components/HeroSectionRecipe";
import LatestRecipe from "@/components/LatestRecipe";
import PopularCategories from "@/components/PopularCategories";
import SuperDelecious from "@/components/SuperDelecious";

export default function Home() {
  return (
    <main className="container mx-auto px-4 mt-[100px]">
      <HeroSectionRecipe />
      <SuperDelecious />
      <PopularCategories />
      <HandPicked />
      <LatestRecipe />
    </main>
  );
}
