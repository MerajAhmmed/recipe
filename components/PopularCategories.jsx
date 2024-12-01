import { getCategories, getRecipes } from "@/utils/recipe";
import Image from "next/image";
import Link from "next/link";

export default function PopularCategories() {
  const categories = getCategories();
  const recipes = getRecipes();

  const categoryCount = categories.map((category) => {
    const recipeCount = recipes.filter(
      (recipe) => recipe.category_id === category.id
    ).length;

    return { ...category, recipeCount };
  });

  const topCategory = categoryCount
    .sort((a, b) => b.recipeCount - a.recipeCount)
    .slice(0, 6);

  return (
    <>
      <section className="mb-16">
        <div className="flex justify-between items-top">
          <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
          <a href="./category.html" className="text-orange-500">
            View All
          </a>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {topCategory.map((category) => (
            <div className="cursor-pointer text-center group" key={category.id}>
              <div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
                <Image
                  src={category.image}
                  alt="Breakfast"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  height={40}
                  width={100}
                />
              </div>

              <Link href={`/${category.name}`}>
                <p className="transition-transform duration-300 group-hover:scale-105">
                  {category.name}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-16 bg-orange-100 p-8 rounded-lg overflow-hidden">
        <h2 className="text-3xl font-bold mb-4">Deliciousness to your inbox</h2>
        <p className="text-gray-600 mb-4">
          Enjoy weekly hand picked recipes and recommendations
        </p>
        <form className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-grow px-4 py-2 rounded-full"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600"
          >
            Join
          </button>
        </form>
      </section>
    </>
  );
}
