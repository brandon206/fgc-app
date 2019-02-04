import types from '../actions/types';

const DEFAULT_STATE = {
    players: [],
    single_player: {}    
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.GET_ALL_LEADERBOARD_DATA:
            console.log('Leaderboard Reducer: ', action.payload.data);
            return { ...state, players: action.payload.data };
        default:
            return state;
    }
}