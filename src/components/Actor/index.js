import React from "react";

//Styles
import { Wrapper, Image } from './Actor.styles';

const Actor = ({ name, character, image }) => (
    <Wrapper>
        <Image src={image} alt='actor-thumb' />
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
)

export default Actor;