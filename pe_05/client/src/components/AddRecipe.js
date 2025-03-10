import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import {useParams} from "react-router";


const AddRecipe = () => {
    const [inputValues, setInputValues] = useState({
        recipe_name: "",
        description: "",
        ingredients: "",
        directions: "",
    })
    const { recipe_name, description, ingredients, directions } = inputValues;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputValues({
            ...inputValues,
            [name]: value
        })
        console.log(inputValues)
    }

    const handleClearInputs = () =>{
        setInputValues({
            ...inputValues,
            recipe_name: "",
            description: "",
            ingredients: "",
            directions: "",
        });
        console.log(inputValues);
    }

    const handleSubmit = async (e) => {
        console.log(recipe_name, description, ingredients, directions)
        e.preventDefault();
        if (!inputValues.recipe_name || !inputValues.description || !inputValues.ingredients || !inputValues.directions) {
            console.log("Please enter a recipe recipe_name");
            toast("Please make sure that all the field are filled in.")
        } else {
            try {
                const rsp = await axios.post(
                    'http://localhost:5050/recipes',
                    inputValues,
                    {headers: { "Content-Type": "application/json" }})
            } catch (err) {
                console.log("handleSubmit error: ")
                console.log(err)
            }
            handleClearInputs()
        }
    }

    return(
        <div className="AddRecipe">
            <h3>Add Recipe</h3>
            <form className="AddRecipeForm" onSubmit={e => handleSubmit(e)} onChange={e  => handleChange(e)}>
                <div className="AddRecipeFormGrid">
                <label htmlFor="recipe_recipe_name">Recipe Name</label>
                <input id="recipe_recipe_name" type="text" name="recipe_name" placeholder="Recipe Name" value={recipe_name} />
                <label htmlFor="description">Description</label>
                <textarea rows="6" id="description" type="text" name="description" placeholder="Description" value={description} />
                <label htmlFor="ingredients">Ingredients</label>
                <textarea rows="6" id="ingredients" type="text" name="ingredients" placeholder="Enter ingredients one per line" value={ingredients} />
                <label htmlFor="directions">Directions</label>
                <textarea rows="8" id="directions" type="number" name="directions" placeholder="Directions. Add steps on new lines" value={directions} />
                </div>
                <button className={"AddRecipeButton"} type="submit">Add Recipe</button>
            </form>
            <ToastContainer/>
        </div>
    );
};
export default AddRecipe;