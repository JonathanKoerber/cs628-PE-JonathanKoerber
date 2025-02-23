import React from 'react';
import {useState} from 'react';

const Card = ({city_name, country, state, population}) => {
    const [detail, setDetail] = React.useState(false);

    const toggleDetail = () => {
        setDetail(!detail);
    }

    return (
        <div className={"CardContainer"}>
        <h3 className={"CardTitle"} onClick={() => toggleDetail()}>{city_name}</h3>
            {detail ? (
            <div className={"CardDetailContainer"}>
                <h3>{city_name}'s Details:</h3>
                <p>Country: {country}</p>
                <p>State: {state}</p>
                <p>Population: {population}</p>
            </div>
            ):(<></>)
            }
        </div>
    )
}
export default Card;