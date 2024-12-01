import Image from "next/image";

export default function Recipies({ recipies }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {recipies?.map((recipe) => (
        <div
          className="bg-white rounded-lg overflow-hidden shadow-md"
          key={recipe.title}
        >
          <Image
            src={`/thumbs/${recipe.thumbnail}`}
            alt="Decadent Raspberry and Cream Cake"
            className="w-full h-48 object-cover"
            width={100}
            height={100}
          />
          <div className="p-4">
            <h2 className="font-semibold text-lg mb-2">{recipe.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
