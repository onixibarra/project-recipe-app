import React, { useState } from "react";

function RecipeCreate({ onCreate }) {
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(newRecipe);
    setNewRecipe({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: ""
    });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr className="tenPercent ingredients preparation last">
            <td>
              <input
                type="text"
                name="name"
                value={newRecipe.name}
                onChange={handleInputChange}
                placeholder="Recipe Name"
                required
              />
            </td>
            <td>
              <input
                type="text"
                name="cuisine"
                value={newRecipe.cuisine}
                onChange={handleInputChange}
                placeholder="Cuisine"
                required
              />
            </td>
            <td>
              <input
                type="text"
                name="photo"
                value={newRecipe.photo}
                onChange={handleInputChange}
                placeholder="Photo URL"
                required
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                value={newRecipe.ingredients}
                onChange={handleInputChange}
                placeholder="Ingredients"
                required
              ></textarea>
            </td>
            <td>
              <textarea
                name="preparation"
                value={newRecipe.preparation}
                onChange={handleInputChange}
                placeholder="Preparation"
                required
              ></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>  
    </form>
  );
}

export default RecipeCreate;



 // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

