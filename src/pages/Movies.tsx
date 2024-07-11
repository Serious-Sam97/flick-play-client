import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import { Container, Grid } from '@mui/material';

interface MovieData {
    id: number;
    original_title: string;
    poster_path: string;
}

function Movies() {
    const [movies, setMovies] = useState<MovieData[]>([]);
    
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&page=1`);
                setMovies(response.data.results);
                console.log(movies);
            }
            catch(error) {
                console.log(error);
            }
        }
        
        fetchMovies();
    }, []);

    if (!movies) {
        return(
            <h1>No Movies</h1>
        );
    }

    return (
        <Container>
            <h1>Popular Movies</h1>
            <Grid container spacing={12}>
                {movies.map(movie => {
                    return (
                        <Grid item xs={3}>
                            <Movie key={`movie-${movie.id}`} name={movie.original_title} posterPath={movie.poster_path}/>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    );
}

export default Movies;