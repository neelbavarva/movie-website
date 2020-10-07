import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {getMovies} from '../services/fakeMovieService';
import Pagination from './pagination';
import {paginate} from '../utils/paginate';
import ReactPlayer from "react-player"

class Top10 extends Component {

    state = {
        movies : getMovies(),
        pageSize: 5,
        currentPage: 1
    };

    handlePageChange = page => {
        this.setState({currentPage:page});
    };

    render() { 
        const {length: count} = this.state.movies;
        const {pageSize, currentPage, movies: allMovies} = this.state;
        const movies = paginate(allMovies,currentPage,pageSize);
        return ( 
            <div className="bg-color"> <br/>
                
                <h6 className="offset-1">Top10 movies </h6>
                <br/>   
                
                <tbody>
                    {movies.map(movie => 
                    
                        <tr>
                            <div className="row">
                            <div className="container">
                            <div className="card offset-3" >
                            <div class="row no-gutters">
                                <div className="col-sm-5">
                                <a href={movie.url} target="_blank">
                                <img width="195px" src={movie.image}/>
                                </a>
                                </div>
                                <div class="col-sm-7">
                                    <div class="card-body offset-1">
                                        <h5 class="card-title">#{movie._id}  {movie.title}</h5>
                                        <p class="card-text">{movie.year} ‧ {movie.genre.name} ‧ {movie.time}</p>
                                    </div>
                                </div>
                            </div>
                            
                            </div>
                            </div>
                            
                            </div>
                                
                            <br/><br/><br/>
                        </tr>
                        
                        
                        )}
                        <div className="offset-3">
                        <Pagination itemsCount={count}
                                    pageSize={pageSize}
                                    onPageChange={this.handlePageChange}
                                    currentPage={currentPage}
                        />
                        </div>
                        
                        
                </tbody>
                
                
            </div>
         );
    }
}
 
export default Top10;