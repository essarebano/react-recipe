import { useEffect } from "react";
import Modal from "../components/Modal";
import RecipeCard from "../components/RecipeCard";
import SkeletonRecipeCard from "../components/SkeletonRecipeCard";
import RecipeModalContent from "../components/RecipeModalContent";
import useFetch from "../hooks/useFetch";
import { useRecipeContext } from "../context/RecipeContext";
import { Recipe, Special } from "../utils/types";

function RecipeContainer() {
  const {
    recipes,
    selectedRecipe,
    isModalOpen,
    setRecipes,
    setSpecials,
    setSelectedRecipe,
    openModal,
    closeModal,
  } = useRecipeContext();

  const { data: fetchedRecipes, loading: recipesLoading, error: recipesError } = useFetch<Recipe[]>('http://localhost:3001/recipes');
  const { data: fetchedSpecials, loading: specialsLoading, error: specialsError } = useFetch<Special[]>('http://localhost:3001/specials');

  useEffect(() => {
    if (fetchedRecipes) {
      setRecipes(fetchedRecipes);
    }
  }, [fetchedRecipes, setRecipes]);

  useEffect(() => {
    if (fetchedSpecials) {
      setSpecials(fetchedSpecials);
    }
  }, [fetchedSpecials, setSpecials]);

  const handleRecipeSelect = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    openModal();
  };

  const isLoading = recipesLoading || specialsLoading;
  const error = recipesError || specialsError;

  if (isLoading) {
    return (
      <div>
        {Array(5).fill(null).map((_, index) => (
          <SkeletonRecipeCard key={index} />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="empty-state flex flex-col items-center justify-center p-4">
        <p className="text-red-500">{error}</p>
      </div>
    )
  }

  if (recipes.length === 0) {
    return (
      <div className="empty-state flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-2">No Recipes Found</h2>
        <p className="text-gray-6900">Please add some recipes to get started.</p>
      </div>
    )
  }

  return (
    <>
      {recipes.map(recipe => {
        return (
          <RecipeCard
            key={`recipe-${recipe.title.toLocaleLowerCase()}`}
            onViewRecipe={()=> handleRecipeSelect(recipe)}
            isLoading={isLoading}
            image={recipe.images.full}
            {...recipe}
          />
        )
      })}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <RecipeModalContent recipe={selectedRecipe as Recipe}/>
      </Modal>
    </>
  )
}

export default RecipeContainer