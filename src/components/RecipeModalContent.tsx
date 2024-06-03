import { useRecipeContext } from "../context/RecipeContext";
import { floatToIngredientMeasurement } from "../utils/helpers";
import { Recipe } from "../utils/types";

interface RecipeModalContentProps {
  recipe: Recipe;
}

function RecipeModalContent({
  recipe
}: RecipeModalContentProps) {
  const { specials } = useRecipeContext()

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row">
        <img src={recipe.images.full} alt={recipe.title} className="w-full md:w-1/3 h-auto rounded-lg" loading="lazy"/>
        <div className="mt-4 md:mt-0 md:ml-4 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
            <p className="mb-4">{recipe.description}</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4">
            <p><span className="font-bold">Cooking time</span>: {recipe.cookTime} min</p>
            <p><span className="font-bold">Prep time</span>: {recipe.prepTime} min</p>
            <p><span className="font-bold">Servings</span>: {recipe.servings}</p>
          </div>
        </div>
      </div>
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Ingredients:</h3>
          <ul className="space-y-2 list-disc list-inside">
            {recipe.ingredients.map((ingredient, index) => {
              const specialOffer = specials.find((special) => special.ingredientId === ingredient.uuid)

              return (
                <li key={index}>
                  {floatToIngredientMeasurement(ingredient.amount, ingredient.measurement)} {ingredient.measurement} {ingredient.name}
                  {specialOffer && (
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                      <li className="text-sm">{specialOffer.title}</li>
                      {specialOffer.text && <li className="text-sm">{specialOffer.text}</li>}
                    </ul>
                  )}
                </li>
            )})}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Directions:</h3>
          <ul className="space-y-2 list-disc list-inside">
            {recipe.directions.map((direction, index) => (
              <li key={index}>{direction.instructions} {direction.optional && ('(optional)')}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-end">
        <p className="text-sm text-gray-500 italic">
          <span className="font-bold">Post Date</span>: {recipe.postDate}
        </p>
        <p className="md:ml-4 text-sm text-gray-500 italic">
          <span className="font-bold">Edit Date</span>: {recipe.editDate}
        </p>
      </div>
    </div>
  );
};

export default RecipeModalContent;
