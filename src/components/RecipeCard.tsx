import SkeletonRecipeCard from "./SkeletonRecipeCard"

interface RecipeCardProps {
  image: string
  title: string
  description: string
  onViewRecipe: () => void
  isLoading?: boolean
}

function RecipeCard({
  image,
  title,
  description,
  onViewRecipe,
  isLoading = false
}: RecipeCardProps) {

  if(isLoading) {
    return <SkeletonRecipeCard />
  }

  return (
    <div className="recipe-card flex flex-col md:flex-row items-center mb-8 bg-white shadow-md rounded-lg overflow-hidden m-4">
      <img
        src={image}
        alt={title.toLowerCase()} className="w-full md:w-1/3 h-48 object-cover"
      />
      <div className="p-4 w-full md:w-2/3 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="mb-4">{description}</p>
        </div>
        <div className="recipe-button flex">
          <button onClick={onViewRecipe} className="bg-[#423736] text-[#f3c70c] py-2 px-4 rounded shadow hover:bg-[#423736]/80 transition duration-300">
            View recipe
          </button>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard