import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import RecipeCard from "../components/RecipeCard";
import SkeletonRecipeCard from "../components/SkeletonRecipeCard";
import RecipeModalContent from "../components/RecipeModalContent";

const recipes = [
  {
    title: 'BTL Burger 0',
    image: 'https://via.placeholder.com/150',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    cookingTime: 20,
    prepTime: 15,
    servings: 5,
    ingredients: [
      "Milk",
      "0.5l of Milk",
      "Use the promocode GETMILK on Peapod and receive $1 off your next gallon!",
      "Patties",
      "Burger buns",
      "Tomatoes",
      "Cheese"
    ],
    directions: [
      "Leo in vitae turpis massa sed elementum.",
      "Consequat ac felis donec et odio pellentesque.",
      "Diam quis enim lobortis scelerisque fermentum condimentum lacinia vel eros.",
      "Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies.",
      "Tempor id eu nisl nunc mi ipsum faucibus. Nunc pulvinar ligula ullamcorper.",
      "Leo in vitae turpis massa sed elementum.",
      "Consequat ac felis donec et odio pellentesque.",
      "Diam quis enim lobortis scelerisque fermentum condimentum lacinia vel eros.",
      "Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies.",
      "Tempor id eu nisl nunc mi ipsum faucibus. Nunc pulvinar ligula ullamcorper."
    ],
    postDate: '02/19/2018 12:47:42 AM',
    editDate: '02/20/2018 10:47:42 AM'
  },{
    title: 'BTL Burger 1',
    image: 'https://via.placeholder.com/150',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    cookingTime: 20,
    prepTime: 15,
    servings: 5,
    ingredients: [
      "Milk",
      "0.5l of Milk",
      "Use the promocode GETMILK on Peapod and receive $1 off your next gallon!",
      "Patties",
      "Burger buns",
      "Tomatoes",
      "Cheese"
    ],
    directions: [
      "Leo in vitae turpis massa sed elementum.",
      "Consequat ac felis donec et odio pellentesque.",
      "Diam quis enim lobortis scelerisque fermentum condimentum lacinia vel eros.",
      "Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies.",
      "Tempor id eu nisl nunc mi ipsum faucibus. Nunc pulvinar ligula ullamcorper.",
      "Leo in vitae turpis massa sed elementum.",
      "Consequat ac felis donec et odio pellentesque.",
      "Diam quis enim lobortis scelerisque fermentum condimentum lacinia vel eros.",
      "Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies.",
      "Tempor id eu nisl nunc mi ipsum faucibus. Nunc pulvinar ligula ullamcorper."
    ],
    postDate: '02/19/2018 12:47:42 AM',
    editDate: '02/20/2018 10:47:42 AM'
  },{
    title: 'BTL Burger 2',
    image: 'https://via.placeholder.com/150',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    cookingTime: 20,
    prepTime: 15,
    servings: 5,
    ingredients: [
      "Milk",
      "0.5l of Milk",
      "Use the promocode GETMILK on Peapod and receive $1 off your next gallon!",
      "Patties",
      "Burger buns",
      "Tomatoes",
      "Cheese"
    ],
    directions: [
      "Leo in vitae turpis massa sed elementum.",
      "Consequat ac felis donec et odio pellentesque.",
      "Diam quis enim lobortis scelerisque fermentum condimentum lacinia vel eros.",
      "Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies.",
      "Tempor id eu nisl nunc mi ipsum faucibus. Nunc pulvinar ligula ullamcorper.",
      "Leo in vitae turpis massa sed elementum.",
      "Consequat ac felis donec et odio pellentesque.",
      "Diam quis enim lobortis scelerisque fermentum condimentum lacinia vel eros.",
      "Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies.",
      "Tempor id eu nisl nunc mi ipsum faucibus. Nunc pulvinar ligula ullamcorper."
    ],
    postDate: '02/19/2018 12:47:42 AM',
    editDate: '02/20/2018 10:47:42 AM'
  },{
    title: 'BTL Burger 3',
    image: 'https://via.placeholder.com/150',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    cookingTime: 20,
    prepTime: 15,
    servings: 5,
    ingredients: [
      "Milk",
      "0.5l of Milk",
      "Use the promocode GETMILK on Peapod and receive $1 off your next gallon!",
      "Patties",
      "Burger buns",
      "Tomatoes",
      "Cheese"
    ],
    directions: [
      "Leo in vitae turpis massa sed elementum.",
      "Consequat ac felis donec et odio pellentesque.",
      "Diam quis enim lobortis scelerisque fermentum condimentum lacinia vel eros.",
      "Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies.",
      "Tempor id eu nisl nunc mi ipsum faucibus. Nunc pulvinar ligula ullamcorper.",
      "Leo in vitae turpis massa sed elementum.",
      "Consequat ac felis donec et odio pellentesque.",
      "Diam quis enim lobortis scelerisque fermentum condimentum lacinia vel eros.",
      "Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies.",
      "Tempor id eu nisl nunc mi ipsum faucibus. Nunc pulvinar ligula ullamcorper."
    ],
    postDate: '02/19/2018 12:47:42 AM',
    editDate: '02/20/2018 10:47:42 AM'
  },
];

const recipe = {
    title: 'BTL Burger 0',
    image: 'https://via.placeholder.com/150',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    cookingTime: 20,
    prepTime: 15,
    servings: 5,
    ingredients: [
      "Milk",
      "0.5l of Milk",
      "Use the promocode GETMILK on Peapod and receive $1 off your next gallon!",
      "Patties",
      "Burger buns",
      "Tomatoes",
      "Cheese"
    ],
    directions: [
      "Leo in vitae turpis massa sed elementum.",
      "Consequat ac felis donec et odio pellentesque.",
      "Diam quis enim lobortis scelerisque fermentum condimentum lacinia vel eros.",
      "Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies.",
      "Tempor id eu nisl nunc mi ipsum faucibus. Nunc pulvinar ligula ullamcorper.",
      "Leo in vitae turpis massa sed elementum.",
      "Consequat ac felis donec et odio pellentesque.",
      "Diam quis enim lobortis scelerisque fermentum condimentum lacinia vel eros.",
      "Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies.",
      "Tempor id eu nisl nunc mi ipsum faucibus. Nunc pulvinar ligula ullamcorper."
    ],
    postDate: '02/19/2018 12:47:42 AM',
    editDate: '02/20/2018 10:47:42 AM'
  }

function RecipeContainer() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [])

  const handleOpenModal = () => {
    setIsOpen(open => !open)
  }

  if (isLoading) {
    return (
      <div>
        {Array(5).fill(null).map((_, index) => (
          <SkeletonRecipeCard key={index} />
        ))}
      </div>
    )
  }

  if (!isLoading && recipes.length === 0) {
    return (
      <div className="empty-state flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-2">No Recipes Found</h2>
        <p className="text-gray-600">Please add some recipes to get started.</p>
      </div>
    )
  }

  return (
    <>
      {recipes.map(recipe => {
        return (
          <RecipeCard
            key={`recipe-${recipe.title.toLocaleLowerCase()}`}
            onViewRecipe={handleOpenModal}
            isLoading={isLoading}
            {...recipe}
          />
        )
      })}
      <Modal
        isOpen={isOpen}
        onClose={handleOpenModal}
      >
        <RecipeModalContent recipe={recipe}/>
      </Modal>
    </>
  )
}

export default RecipeContainer