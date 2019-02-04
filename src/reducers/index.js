import { combineReducers } from 'redux';
import leaderboardReducer from './leaderboard_reducer';

const rootReducer = combineReducers ({
        leaderboard: leaderboardReducer,
});

export default rootReducer;