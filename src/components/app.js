import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React , {Component, Fragment} from 'react';
import PlayerProfile from './player-profile/player-profile';
import Leaderboard from './leaderboard/leaderboard';
import Navbar from './navbar/navbar';
import { Route, Link } from 'react-router-dom';

class App extends Component {
    render () {
        return(
            <div className = "container">
                <Navbar />
                <Route exact path = '/' component = {Leaderboard}/>
                <Route path ='/player-profile' component = {PlayerProfile}/>
            </div>
        );
    }
}

export default App;
