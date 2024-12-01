import { getCategoryById, getRecipes } from "@/utils/recipe";
import slugify from "@/utils/slug";
import Image from "next/image";
import Link from "next/link";

export default function HeroSectionRecipe() {
  const recipes = getRecipes();
  const selectedRecipe = recipes[0];
  const category = getCategoryById(selectedRecipe.category_id);

  return (
    <section className="mb-16 bg-orange-50">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src={`/thumbs/${selectedRecipe.thumbnail}`}
            alt="Mighty Super Cheesecake"
            className="w-full h-[450px] object-cover rounded-lg"
            width={100}
            height={40}
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{selectedRecipe.title}</h1>
          <p className="text-gray-600 mb-4">{selectedRecipe.description}</p>
          <Link
            href={`/${category.name}/${slugify(selectedRecipe.title)}`}
            className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </section>
  );
}
