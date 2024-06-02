// const IMG_PLACEHOLDER = 'https://via.placeholder.com/600x400'
// const URL_RECIPES = 'http://localhost:3001/recipes'
// const URL_SPECIALS = 'http://localhost:3001/specials'

interface RecipeCardProps {
  image: string
  title: string
  description: string
  onViewRecipe: () => void
}

function RecipeCard({
  image,
  title,
  description,
  onViewRecipe
}: RecipeCardProps) {
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

const recipes = [
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'BTL Burger',
    alt: 'BTL Burger',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'Italian Meatballs',
    alt: 'Italian Meatballs',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'Queso Brat Scramble',
    alt: 'Queso Brat Scramble',
    description: 'Faucibus scelerisque eleifend donec pretium vulputate. Fusce id velit ut tortor pretium viverra. Consequat ac felis donec et odio pellentesque. Scelerisque varius morbi enim nunc faucibus a pellentesque sit amet.'
  },
  {
    image: 'https://via.placeholder.com/600x400',
    title: 'Italian Meatballs',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  }
];

function Recipes() {
  return (
    <section className="container mx-auto py-8">
      {recipes.map(recipe => {
        return (
          <RecipeCard
            key={`recipe-${recipe.title.toLocaleLowerCase()}`}
            onViewRecipe={() => {}}
            {...recipe}
          />
        )
      })}
    </section>
  )
}

export default Recipes