import React from 'react';
import ReactDOM from 'react-dom';
import Leaderboard from './components/leaderboard';
import PlayerProfile from './components/player-profile';
import {BrowswerRouter as Router} from 'react-router-dom';

import App from './components/app';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);
