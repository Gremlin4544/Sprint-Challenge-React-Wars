import React from "react";

const CardComponent = (props) => {

    return (
        <div>
            <h1>{props.name}</h1>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Weight: {props.weight}</p>
            <p>Color: {props.hair_color}</p>
        </div>
    );
}

export default CardComponent;