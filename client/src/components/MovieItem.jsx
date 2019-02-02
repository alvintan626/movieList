import React from 'react';

const MovieItem = (props)=>{
    return(
        <ul>    
            <span>{props.movie.title}</span>
        </ul>
    )
}

export default MovieItem;