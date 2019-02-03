import React, { Component, Fragment } from 'react';
import axios from 'axios';
import dbfz from '../../assets/images/dbfz-results-banner.png';


class PlayerProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            player_data: []
        };
    }

    componentDidMount() {
        this.getPlayerData();
    }

    getPlayerData = async () => {
        try {
            const response = await axios.get("/api/fgc_player.php", {
                // params: {
                //     type: "player",
                //     id: "571"
                // }
            })

            // search?type=player&fuzzy=false&query=daigo

            this.setState({
                isLoaded: true,
                player_data: response.data
            });

            console.log("this is player-profile response: ", response.data);

            return response;


        } catch(err) {
            this.setState({
                isLoaded: true,
                error: err
            });

            console.log(err);
        }

    }

    render (){
        const { error, isLoaded, player_data } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <div>
                        <img className = "dbfz-banner" src= {dbfz} alt="dbfz wallpaper"/>
                    </div>
                    <h1 className="dbfz-header center">{`${player_data.name} Player Profile`}</h1>
                        <div className = "player-profile-teams">{`Teams: ${player_data.teams.map((item) => {
                            return (item);
                        })}`}</div>
                        <div className="main-game">{`Main Game: ${player_data.mainGame}`}</div>

                        <div className = "alltimeRanking">{`Alltime Ranking: ${player_data.rankings.DBFZ.alltimeRank}`}</div>
                        <div className="mains">{`Main Characters: ${player_data.rankings.DBFZ.main.map((character) => {
                            return (` ${character.substring(5)}`);
                        })}`}</div>

                </div>
            );
        }
    }
}

export default PlayerProfile;