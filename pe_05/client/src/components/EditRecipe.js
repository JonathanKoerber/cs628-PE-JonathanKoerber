import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import {useNavigate, useParams} from "react-router";


const EditRecipe = () => {
    const [inputValues, setInputValues] = useState({
        recipe_name: "",
        description: "",
        ingredients: "",
        directions: "",
    })
    const { recipe_name, description, ingredients, directions } = inputValues;
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {
        const getRecipe = async() => {
            try {
                const rsp = await axios.get(`http://localhost:5050/recipes/${id}`);
                setInputValues(rsp.data);
                console.log(inputValues)
            } catch (error) {
                console.log("Error getting recipe:", error);
            }
        }
        getRecipe();
    }, [id])
    useEffect(() => {
        console.log("updating recipe", inputValues);
    },[inputValues])
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
                const rsp = await axios.patch(
                    `http://localhost:5050/recipes/${id}`,
                    inputValues,
                    {headers: { "Content-Type": "application/json" }})
            } catch (err) {
                console.log("handleSubmit error: ")
                console.log(err)
            }
            handleClearInputs()
            navigate("/")
        }
    }

    return(
        <div className="AddRecipe">
            <h3>Update Recipe</h3>
            <form className="AddRecipeForm" onSubmit={e => handleSubmit(e)} onChange={e  => handleChange(e)}>
                <div className="AddRecipeFormGrid">
                <label htmlFor="recipe_name">Recipe Name</label>
                <input id="recipe_name" type="text" name="recipe_name" placeholder="Recipe Name" value={recipe_name} />
                <label htmlFor="description">Description</label>
                <textarea rows="6" id="description" type="text" name="description" placeholder="Description" value={description} />
                <label htmlFor="ingredients">Ingredients</label>
                <textarea rows="6" id="ingredients" type="text" name="ingredients" placeholder="Enter ingredients one per line" value={ingredients} />
                <label htmlFor="directions">Directions</label>
                <textarea rows="8" id="directions" type="number" name="directions" placeholder="Directions. Update steps on new lines" value={directions} />
                </div>
                <button className={"AddRecipeButton"} type="submit">Update Recipe</button>
            </form>
            <ToastContainer/>
        </div>
    );
};
export default EditRecipe;