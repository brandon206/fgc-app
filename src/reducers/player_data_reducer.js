import types from '../actions/types';

const DEFAULT_STATE = {
    player_data: []
};

export default ((state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.GET_PLAYER_DATA:
            console.log('Player Reducer: ', action.payload.data);
            return { ...state, player_data: action.payload.data };
        default:
            return state;
    }
});