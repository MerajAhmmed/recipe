import { getRecipes } from "@/utils/recipe";
import Image from "next/image";
import Link from "next/link";

export default function HandPicked() {
  const recipes = getRecipes();
  const twoRecipe = recipes.slice(0, 2);

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 animate-fade-in-down">
        Hand-Picked Collections
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {twoRecipe.map((recipe) => (
          <div
            className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer"
            key={recipe.title}
          >
            <Image
              src={`/thumbs/${recipe.thumbnail}`}
              alt="Sushi Combos"
              className="w-full h-[400px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
              width={100}
              height={40}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
              <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
              <Link
                href="./recipes.html"
                className="text-orange-300 hover:underline"
              >
                View Collection
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
