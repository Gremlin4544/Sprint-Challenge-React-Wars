import React from "react";
import styled from "styled-components";

const StarCard = styled.div`
border-radius: 8%;
margin: 2vh 1vw;
box-shadow: 5px 3px silver;
padding: 5px;
background-color: rgba(17,0,68,0.75);
width: 60%;
height: 585px;
transition: 0.2s ease-in;
  &:hover {
    background: ${props => (props.primary ? "#ec41f2" : "#fffff")};
    color: ${props => (props.primary ? "#ffffff" : "#ec41f2")};
`;

const Title = styled.h1`
font-size: 3rem;
text-transform: uppercase;
color: cornflowerblue;
color-shadow: 5px 3px silver;
`;

const SWText = styled.p`
font-size: 2rem;
`;

const CardContainer = styled.div`
background-image: url('./sw-bg.jpg');
border-radius: 10%;
display: flex;
justify-content: center;
flex-direction: column;
justify-content: space-evenly;
flex-wrap: wrap;
margin: auto 25px;
`;


const CardComponent = (props) => {

    return (
         <CardContainer>
                    <StarCard>
                        <Title>{props.name}</Title>
                        <SWText>Gender: {props.gender}</SWText>
                        <SWText>Height: {props.height}</SWText>
                        <SWText>Weight: {props.weight}</SWText>
                        <SWText>Color: {props.hair_color}</SWText>
                    </StarCard>
        </CardContainer>
 /*   <div>         
       <h1>{props.name}</h1>
        <p>Gender: {props.gender}</p>
          <p>Height: {props.height}</p>
          <p>Weight: {props.weight}</p>
          <p>Color: {props.hair_color}</p>
      </div>*/
    );
}

export default CardComponent;

