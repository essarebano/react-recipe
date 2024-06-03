import { Recipe } from "../utils/types";

interface RecipeModalContentProps {
  recipe: Recipe;
}

function RecipeModalContent({
  recipe
}: RecipeModalContentProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row">
        <img src={recipe.image} alt={recipe.title} className="w-full md:w-1/3 h-auto rounded-lg" />
        <div className="mt-4 md:mt-0 md:ml-4 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
            <p className="mb-4">{recipe.description}</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4">
            <p>Cooking time: {recipe.cookingTime} min</p>
            <p>Prep time: {recipe.prepTime} min</p>
            <p>Servings: {recipe.servings}</p>
          </div>
        </div>
      </div>
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Ingredients:</h3>
          <ul className="list-disc list-inside">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Directions:</h3>
          <ul className="list-disc list-inside">
            {recipe.directions.map((direction, index) => (
              <li key={index}>{direction}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-end">
        <p className="text-sm text-gray-500 italic font-semibold">Post Date: {recipe.postDate}</p>
        <p className="md:ml-4 text-sm text-gray-500 italic font-semibold">Edit Date: {recipe.editDate}</p>
      </div>
    </div>
  );
};

export default RecipeModalContent;
