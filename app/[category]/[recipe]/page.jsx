import Blog from "@/components/blog/Blog";
import Like from "@/components/blog/Like";
import { getRecipeyBySlug, getRecipiesByCategoryName } from "@/utils/recipe";

export default function RecipePage({ params }) {
  const { category, recipe } = params;
  const categories = getRecipiesByCategoryName(category);
  const recipeData = getRecipeyBySlug(recipe);

  return (
    <main className="container mx-auto px-4 py-8 mt-32">
      <Blog recipeData={recipeData} />
      <Like categories={categories} />
    </main>
  );
}
