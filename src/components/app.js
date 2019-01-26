import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React from 'react';
import PlayerProfile from './player-profile';
import Leaderboard from './leaderboard';
import { Route } from 'react-router-dom';

const App = () => (
    <div>
        <Route exact path = "/" component = {Leaderboard}/>
        <Route path = "/player-profile" component = {PlayerProfile}/>
    </div>
);

export default App;
