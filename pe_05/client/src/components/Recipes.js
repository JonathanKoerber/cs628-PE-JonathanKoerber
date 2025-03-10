import React, {useEffect} from 'react';
import Card from "./Card";
import AddRecipe from "./AddRecipe";
import {useNavigate} from "react-router";
import axios from "axios";


const Recipes = () => {
    const [loading, setLoading] = React.useState(true);
    const [addRecipe, setAddRecipe] = React.useState(false);
    const [recipes, setRecipes] = React.useState([]);
    const navigate = useNavigate();
        useEffect(() => {
            const getRecipes = async () => {
                try {
                    const rsp = await axios.get("http://localhost:5050/recipes");  // ✅ Use `await`
                    return rsp.data
                } catch (err) {
                    console.error("Error fetching recipes:", err);
                } finally {
                    setLoading(false);
                }
            };
            getRecipes().then(data => {
                setRecipes(data)
                console.log("Recipes loaded", data, recipes)
            });
        }, [navigate, loading, addRecipe]);
    const handleUpdate = ( id) => {
        if (!id) {
            console.error("No recipe ID provided for update");
            return;
        }
        navigate(`/editRecipe/${id}`);
    };
    const handleDelete = async (id) => {
        try {
            const resp = await axios.delete(`http://localhost:5050/recipes/${id}`);
            console.log("Delete response:", resp.data);
            const rsp = await axios.get(`http://localhost:5050/recipes`);
            setRecipes(rsp.data);
        } catch (error) {
            console.error("Error deleting recipe:", error);
        }
    };


    return(
        <>
        <div className={"App-header"}>
            <h2>Recipe Application</h2>
            <div className={"App-nav"}>
                <h3 className={"App-nav-item"} onClick={() => setAddRecipe(false)}>View Recipes</h3>
                <h3  className={"App-nav-item"} onClick={() => setAddRecipe(true)}>Add Recipes</h3>
            </div>
        </div>
        <div className={"galleryListContainer"}>
            <h2>Recipes List:</h2>
            {!addRecipe ? (
                loading ? (
                    <h2>loading... </h2>
                ) : recipes.length > 0 ? (
                    recipes.map((item, index) => (
                        <Card key={item._id}
                              id={item._id}
                              recipe_name={item.name}
                              description={item.description}
                              ingredients={item.ingredients}
                              directions={item.directions}
                              handleUpdate={handleUpdate}
                              handleDelete={handleDelete}
                        />
                    ))
                ) : (
                    <h2>No recipes found please add one.</h2>
                )
            ) : (
                <AddRecipe/>
            )
            }
        </div>
</>
)
}
export default Recipes;