import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React , {Component, Fragment} from 'react';
import PlayerProfile from './player-profile';
import Leaderboard from './leaderboard';
import { Route, Link } from 'react-router-dom';

class App extends Component {
    render () {
        return(
            <div className = "container">

                <Fragment>
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/player-profile">Users</Link>
                        </li>
                    </ul>
                </Fragment>

                <Route exact path = '/' render = {() => {
                    return <Leaderboard />
                }}/>

                <Route path ='/player-profile' render = {() => {
                    return <PlayerProfile />
                }}/>

            </div>
        );
    }
}

export default App;
