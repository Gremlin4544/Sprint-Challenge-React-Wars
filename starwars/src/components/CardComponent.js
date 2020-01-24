import React from "react";


const CardComponent = (props) => {

    return (
         /* <CardContainer>
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
        </CardContainer> */
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