import React from "react";
import PropTypes from "prop-types";
//Styles
import { Wrapper, Image } from './Actor.styles';

const Actor = ({ name, character, imageurl }) => (
    <Wrapper>
        <Image src={imageurl} alt='actor-thumb' />
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
);
Actor.propTypes={
    name: PropTypes.string,
    character: PropTypes.string,
    imageurl: PropTypes.string,
}

export default Actor;