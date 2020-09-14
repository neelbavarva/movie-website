import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {getMovies} from '../services/fakeMovieService';

class Top10 extends Component {

    state = {
        movies : getMovies()
    }

    render() { 
        return ( 
            <div> <br/>
                <h6 className="offset-1">Top10 movies </h6>
                <br/>                 
                <tbody>
                    {this.state.movies.map(movie => 
                        <tr>
                            <div className="card offset-3" >
                            <div class="row no-gutters">
                                <div className="col-sm-5">
                                <img width="150px" src={movie.image}/>
                                </div>
                                <div class="col-sm-7">
                                    <div class="card-body offset-1">
                                        <h5 class="card-title">#{movie._id}  {movie.title}</h5>
                                        <p class="card-text">{movie.year} ‧ {movie.genre.name} ‧ {movie.time}</p>
                                    </div>
                                </div>
                            </div>
                            </div><br/>
                        </tr>
                        )}
                </tbody>
                
            </div>
         );
    }
}
 
export default Top10;