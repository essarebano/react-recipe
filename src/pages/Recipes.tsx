import RecipeContainer from "../containers/RecipeContainer";
import { RecipeProvider } from "../context/RecipeContext";

function Recipes() {
  return (
    <section className="container mx-auto py-8">
      <RecipeProvider>
        <RecipeContainer />
      </RecipeProvider>
    </section>
  )
}

export default Recipes