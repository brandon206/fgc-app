import axios from 'axios';
import types from './types';

export function getLeaderboardData(){
    return async function (dispatch){
        try {
            const response = await axios.get("/api/fgc_top.php", {
                params: {
                    game: "DBFZ",
                    size: 20,
                    format: "json"
                }
            })
            
            dispatch({
                type: types.GET_ALL_LEADERBOARD_DATA,
                payload: response
            });

        } catch (err){
            dispatch ({
                type: types.ERROR,
                error: "Error getting Leaderboard Data"
            });
        }
    }
}

export function getPlayerData (){
    return async function(dispatch){
        try{
            const player_id = '571'
            const response = await axios.get(`/api/fgc_player.php?player_id=${player_id}`);

            console.log("this is resp: ", response);

            dispatch({
                type: types.GET_PLAYER_DATA,
                payload: response
            });
        } catch(err){
            dispatch({
                type: types.ERROR,
                error: "Error getting Player Profile"
            });
        }
    }
}