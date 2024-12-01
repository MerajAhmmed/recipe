import { getCategories } from "@/utils/recipe";
import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  const categories = getCategories();
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
      {categories.map((category) => (
        <Link
          href={`/${category.name}`}
          className="text-center"
          key={category.id}
        >
          <div className="overflow-hidden rounded-full mb-4 relative cursor-pointer">
            <Image
              src={category.image}
              alt="Seafood"
              width={100}
              height={40}
              className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <h2 className="text-xl font-semibold">{category.name}</h2>
        </Link>
      ))}
    </div>
  );
}
