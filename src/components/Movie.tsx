import React from 'react';

type MovieProps = {
    name: string;
    posterPath: string;
};

function Movie(props: MovieProps) {
    const imageUrl = `https://image.tmdb.org/t/p/w500${props.posterPath}`;
    return (
        <>
            <img width={'50%'} src={imageUrl}/>
            <h4>{props.name}</h4>
        </>
    );
}

export default Movie;