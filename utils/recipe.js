// import recipes from "../data/recipes.json";

// export const getAllRecipes = () => {
//   return recipes;
// };

// import fs from "fs";
// import path from "path";

// export const getRecipes = () => {
//   const filePath = path.join(process.cwd(), "data", "recipes.json");
//   const data = fs.readFileSync(filePath, "utf8");
//   return JSON.parse(data);
// };

import fs from "fs";
import path from "path";
import slugify from "./slug";

const recipesDirectory = path.join(process.cwd(), "data", "recipes.json");
const categoriesDirectory = path.join(process.cwd(), "data", "categories.json");

export function getRecipes() {
  const fileContents = fs.readFileSync(recipesDirectory, "utf8");
  const recipes = JSON.parse(fileContents);

  return recipes.sort((a, b) =>
    a.title < b.title ? -1 : a.title > b.title ? 1 : 0
  );
}

export function getCategories() {
  const fileContents = fs.readFileSync(categoriesDirectory, "utf8");
  const categories = JSON.parse(fileContents);

  return categories.sort((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0
  );
}

export function getRecipeById(id) {
  const fileContents = fs.readFileSync(recipesDirectory, "utf8");
  const recipes = JSON.parse(fileContents);

  console.log("Searching for Recipe ID:", id);

  const recipe = recipes.find((recipe) => recipe.id === id);

  if (!recipe) {
    console.error(`Recipe with ID "${id}" not found.`);
    throw new Error(`Recipe with ID "${id}" not found.`);
  }

  return recipe;
}

export function getCategoryById(id) {
  const fileContents = fs.readFileSync(categoriesDirectory, "utf8");
  const categories = JSON.parse(fileContents);

  const category = categories.find((category) => category.id === id);

  if (!category) {
    throw new Error(`Category with ID "${id}" not found.`);
  }

  return category;
}

export function getRecipiesByCategoryName(name) {
  const categories = getCategories();
  const category = categories.find((cat) => cat.name === name);
  const recipies = getRecipes();
  const categoryProducts = recipies.filter(
    (recipe) => recipe.category_id === category.id
  );

  return categoryProducts;
}
export function getRecipeyBySlug(slug) {
  const recipies = getRecipes();

  const recipe = recipies.find((recipe) => slugify(recipe.title) === slug);

  return recipe;
}
