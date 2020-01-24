import React from "react";
import styled from "styled-components";
import {
    //   Card,
    //   Button,
    //   CardTitle,
    //   CardText,
      Row,
      Col,
    //   CardImg
    } from "reactstrap";

const StarCard = styled.div`
// background-image: url('./sw-bg.jpg');
border-radius: 8%;
// display: flex;
// justify-content: center;
// flex-direction: row;
// justify-content: space-evenly;
// flex-wrap: wrap;
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
// width: auto;
background-image: url('./sw-bg.jpg');
border-radius: 10%;
display: flex;
justify-content: center;
flex-direction: column;
justify-content: space-evenly;
flex-wrap: wrap;
margin: auto 25px;
// box-shadow: 5px 3px silver;
// padding: 10px;

`;


const CardComponent = (props) => {

    return (
        <CardContainer>
            <Row>
                <Col sm="6">
                    <StarCard body>
                        <Title>{props.name}</Title>
                        <SWText>Gender: {props.gender}</SWText>
                        <SWText>Height: {props.height}</SWText>
                        <SWText>Weight: {props.weight}</SWText>
                        <SWText>Color: {props.hair_color}</SWText>
                    </StarCard>
                </Col>
            </Row>
        </CardContainer>
    );
}

export default CardComponent;