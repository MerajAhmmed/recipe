export default function RecipeDes({ recipe }) {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">
          {recipe.title}
          <span className="text-gray-500 text-2xl font-normal">
            (98 Recipes)
          </span>
        </h1>
        <p className="text-gray-600">{recipe.description}</p>
      </div>
    </div>
  );
}
