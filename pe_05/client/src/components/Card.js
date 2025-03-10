import React from 'react';
import {useState} from 'react';

const Card = ({id, recipe_name, description, ingredients, directions, handleDelete, handleUpdate}) => {
    const [detail, setDetail] = React.useState(false);

    const toggleDetail = () => {
        setDetail(!detail);
    }

    return (
        <div className={"CardContainer"}>
        <h3 className={"CardTitle"} onClick={() => toggleDetail()}>{recipe_name}</h3>
            {detail ? (
            <div className={"CardDetailContainer"}>
                <h3>Recipe: {recipe_name}</h3>
                <p>ID:{id}</p>
                <p>Description: {description}</p>
                <p>Ingredients: {ingredients}</p>
                <p>Directions: {directions}</p>
                <button onClick={()=>handleUpdate(id)}>Update</button>
                <button onClick={()=>handleDelete(id)}>Delete</button>
            </div>
            ):(<></>)
            }
        </div>
    )
}
export default Card;