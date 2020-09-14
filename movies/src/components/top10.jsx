import React, { Component } from 'react';
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
                                <img width="150px" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRf61mker2o4KH3CbVE7Zw5B1-VogMH8LfZHEaq3UdCMLxARZAB"/>
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div><br/>
                            {/* <td>{movie.title}</td>
                            <td>{movie.title ==="Interstellar" ? <img width="150px" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRf61mker2o4KH3CbVE7Zw5B1-VogMH8LfZHEaq3UdCMLxARZAB" /> : "no"}</td> */}
                        </tr>
                        )}
                </tbody>
                
            </div>
         );
    }
}
 
export default Top10;