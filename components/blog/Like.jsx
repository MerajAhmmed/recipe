import Image from "next/image";

export default function Like({ categories }) {
  console.log(categories);
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-8">You might also like</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div key={category.category_id}>
            <Image
              src={`/thumbs/${category.thumbnail}`}
              alt="Recipe 1"
              className="w-full h-60 object-cover rounded-lg mb-2"
              width={100}
              height={100}
            />
            <h3 className="font-semibold">{category.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
