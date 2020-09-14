import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {getMovies} from '../services/fakeMovieService';

class Top10 extends Component {

    state = {
        movies : getMovies()
    }

    render() { 
        return ( 
            <div>
                Top10 movies                   
                <tbody>
                    {this.state.movies.map(movie => 
                        <tr>
                            <div className="card offset-3" >
                            <div class="row no-gutters">
                                <div className="col-sm-5">
                                <img width="150px" src="https://raw.githubusercontent.com/neelbavarva/Movie-Website/master/movies/src/components/images/image.jpg?token=AO5HEQAGYUKHRDDYXQ25MRK7L5XKU"/>
                                </div>
                                <div class="col-sm-7">
                                    <div class="card-body offset-2">
                                        <h5 class="card-title">{movie.title}</h5>
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