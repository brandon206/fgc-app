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