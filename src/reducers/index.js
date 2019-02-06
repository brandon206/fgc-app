import { combineReducers } from 'redux';
import leaderboardReducer from './leaderboard_reducer';
import player_data_reducer from './player_data_reducer';

const rootReducer = combineReducers ({
        leaderboard: leaderboardReducer,
        player: player_data_reducer
});

export default rootReducer;