import { getCategories, getRecipes } from "@/utils/recipe";
import slugify from "@/utils/slug";
import Image from "next/image";
import Link from "next/link";

export default function LatestRecipe() {
  const recipes = getRecipes();
  const categories = getCategories();

  const latestRecipes = recipes
    .sort((a, b) => new Date(b.published_date) - new Date(a.published_date))
    .slice(0, 4);

  const categoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "";
  };

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Latest Recipes</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {latestRecipes.map((recipe) => (
          <Link
            href={`/${categoryName(recipe.category_id)}/${slugify(
              recipe.title
            )}`}
            key={recipe.title}
          >
            <div>
              <Image
                src={`/thumbs/${recipe.thumbnail}`}
                alt={recipe.title}
                className="w-full h-[300px] object-cover rounded-lg mb-4"
                width={100}
                height={40}
              />
              <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
              <p className="text-gray-600">
                {categoryName(recipe.category_id)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
