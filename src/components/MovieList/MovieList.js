import React from 'react';

const MovieList = (props) => {
    const FavoriteComponent = props.favoriteComponent;
    return (
        <>
        {props.movies.map((movie) => (
        <div className='image-container d-flex justify-content-start mr-3 ml-3 mb-3 mt-3'>
            <img className='image-size rounded' src={movie.Poster} alt='movie'></img>
            <div 
                onClick={() => props.handleFavoritesClick(movie)} 
                className='overlay d-flex align-items-center justify-content-center'>
                <FavoriteComponent/>
            </div>
        </div>
        ))}
        </>
    )
}

export default MovieList;