import React from 'react';

const Card = ({title, genre, releaseYear}) => {
    return (
        <div className={"CardContainer"}>
        <h1>{title}</h1>
            <p>{genre}</p>
            <p>{releaseYear}</p>
        </div>
    )
}
export default Card;