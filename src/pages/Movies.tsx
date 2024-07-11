import React, { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import { Box, Container, Grid, Pagination } from '@mui/material';

interface MovieData {
    id: number;
    original_title: string;
    poster_path: string;
}

function Movies() {
    const [movies, setMovies] = useState<MovieData[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&page=${currentPage}`);
                setMovies(response.data.results);
                setTotalPages(response.data.total_pages);
                console.log(movies);
            }
            catch(error) {
                console.log(error);
            }
        }
        
        fetchMovies();
    }, [currentPage]);

    if (!movies) {
        return(
            <h1>No Movies</h1>
        );
    }

    const changePage = (event: ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    }
    

    return (
        <Container>
            <h1>Popular Movies</h1>
            <div style={moviesStyle}>
                <Grid container spacing={12}>
                    {movies.map(movie => {
                        return (
                            <Grid item xs={3}>
                                <Movie key={`movie-${movie.id}`} name={movie.original_title} posterPath={movie.poster_path}/>
                            </Grid>
                        )
                    })}
                </Grid>
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} marginTop={'5%'}>
                    <Pagination
                        page={currentPage}
                        count={totalPages}
                        onChange={changePage}
                    />
                </Box>
            </div>
        </Container>
    );
}

const moviesStyle = {
    marginBottom: '10%'
};

export default Movies;