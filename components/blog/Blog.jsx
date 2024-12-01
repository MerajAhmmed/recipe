import Image from "next/image";

export default function Blog({ recipeData }) {
  return (
    <article>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        A full guide for a better and smarter cooking
      </h1>

      <div className="flex items-center space-x-4 mb-6">
        <Image
          src="/avater.png"
          alt="Author"
          className="w-8 h-8 rounded-full"
          width={100}
          height={100}
        />
        <span className="text-gray-600">{recipeData.author}</span>
        <span className="text-gray-400">|</span>
        <span className="text-gray-600">{recipeData.cooking_time} mins</span>
        <span className="text-gray-400">|</span>
        <span className="text-gray-600">{recipeData.published_date}</span>
      </div>
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-4">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline-block mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
            </svg>
            Share
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline-block mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
            Save
          </button>
        </div>
      </div>
      <p>{recipeData.description}</p>
    </article>
  );
}
