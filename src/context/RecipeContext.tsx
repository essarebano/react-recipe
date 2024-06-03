import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Recipe, Special } from '../utils/types';

interface RecipeContextType {
  recipes: Recipe[];
  specials: Special[];
  selectedRecipe: Recipe | null;
  isModalOpen: boolean;
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
  setSpecials: React.Dispatch<React.SetStateAction<Special[]>>;
  setSelectedRecipe: React.Dispatch<React.SetStateAction<Recipe | null>>;
  openModal: () => void;
  closeModal: () => void;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider = ({ children }: { children: ReactNode }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [specials, setSpecials] = useState<Special[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        specials,
        selectedRecipe,
        isModalOpen,
        setRecipes,
        setSpecials,
        setSelectedRecipe,
        openModal,
        closeModal,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error('useRecipeContext must be used within a RecipeProvider');
  }
  return context;
};
