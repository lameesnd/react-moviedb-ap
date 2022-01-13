import React from "react";
//Components
import Thumb from '../Thumb';

//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

//Images
import NoImage from '../../images/no_image.jpg';

//Styles
import { Wrapper, Content, Text } from './MovieInfo.styles';

const MovieInfo = ({ movie }) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb
                image={
                    movie.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : NoImage
                }
                clickable={false}
            />
            <Text>
                <h1>{movie.title}</h1>
                <h3>{movie.overview}</h3>
                <p>PLOT</p>
                <div className="rating-directors">
                    <div>
                        <h3>RATING</h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
                    <div className="director">
                        <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                        {
                            movie.directors.map( director => (
                                <p key={director.credit_id}>{director.name}</p>
                            ))
                        }
                    </div>
                </div>
            </Text>
        </Content>
    </Wrapper>
);

export default MovieInfo;