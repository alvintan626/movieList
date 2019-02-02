import React from 'react';
import Movies from './MovieList.jsx';
import movies from '../../../movies.js';
import $ from 'jquery';
import Form from './Form.jsx'

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            movies:movies
        };

        this.addMovie = this.addMovie.bind(this);
    }

    getMovie(){
        console.log('-1----',data)

        $.get(`http://localhost:3001/freeMovies`, (err,data)=>{
            console.log('2-----',data)
            if (err){
                console.log(err);
                return;
            } else {
                console.log('the final data', data)
                movies: data
            }
        })
    }

    addMovie(){
        // post request
        $.post(`http://localhost:3001/`, data, (err)=>{
            if (err){
                console.log(err);
                return;
            } else {
                movies: this.state.movies.concat(data)
            }
        })
    }

    render(){
        return(
            <div>Hello!
            
            <h2>Movie List</h2>
            <Movies movies={movies} />
            <Form addMovie={this.addMovie}/>
            </div>
        );
    }
}

export default App;

