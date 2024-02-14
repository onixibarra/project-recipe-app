import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const handleDeleteRecipe = (index) => {
   const newRecipes = [...recipes];
    newRecipes.splice(index, 1);
    setRecipes(newRecipes);
  };

  const handleCreateRecipe = (newRecipe) => {
    const id = recipes.length + 1;
    setRecipes([...recipes, { id, ...newRecipe }]);
  };

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} onDelete={handleDeleteRecipe} />
      <RecipeCreate onCreate={handleCreateRecipe} />
    </div>
  );
}

export default App;




 // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.


