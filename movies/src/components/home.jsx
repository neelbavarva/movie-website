import React, { Component } from 'react';
import { NavLink ,Link } from 'react-router-dom';
import About from './about';
import Top10 from './top10';

class Home extends Component {
    
    render() { 
        return (
            <div>
                
                <br/><br/>
                <h4 className="offset-1">Hollywood</h4>
                <ul className="offset-1">
                        <li >
                            <Link class="nav-link" to="/top10">Top10</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Must watch before you die</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Some amazing ones</a>
                        </li>
                        
                </ul>

            </div>
          );
    }
}
 
export default Home;