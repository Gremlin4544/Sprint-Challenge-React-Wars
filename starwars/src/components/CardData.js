import React, { useState, useEffect } from "react";
import axios from "axios";
import CardComponent from "./CardComponent";


const CardData = () => {
    const [character, setCharacter] = useState([]);

useEffect(() => {
    axios
        .get(`https://swapi.co/api/people`)
        .then(response => {
            const character = response.data.results;
            console.log("Console Log response", response.data.results);
            setCharacter(character);
        })
        .catch(error => {
            console.log("Data not found", error);
        });
},[]);

    return (
        <div>
        {character.map(character => {
            return (
                <CardComponent 
                    name={character.name}
                    height={character.height}
                    mass={character.mass}
                    gender={character.gender}
                    hair_color={character.hair_color}

                />
            );
        })}
           
        </div>
    );
}

export default CardData;