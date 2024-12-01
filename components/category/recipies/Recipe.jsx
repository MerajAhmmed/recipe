import { getRecipeById } from "@/utils/recipe";
import RecipeCard from "./RecipeCard";
import RecipeDes from "./RecipeDes";

export default function Recipe({ category, recipeId }) {
  const recipe = getRecipeById(recipeId);

  return (
    <main className="container mx-auto px-4 py-8 mt-[100px]">
      <RecipeDes recipe={recipe} />
      <RecipeCard recipe={recipe} />
    </main>
  );
}
