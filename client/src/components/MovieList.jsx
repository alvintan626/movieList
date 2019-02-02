import React from 'react';
import MovieItem from './MovieItem.jsx';

const movieList = (props)=> {
 
    return(
        <div>
            {props.movies.map((movie)=>{
                return <MovieItem movie={movie} />;
            })}
        </div>
    )
}


export default movieList;