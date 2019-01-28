import React, {Component, Fragment} from 'react';
import axios from 'axios';
import dbfz from '../../assets/images/dbfz-results-banner.png';
import leaderboardcss from './leaderboard.css';

const BASE_URL = 'http://rank.shoryuken.com/api/';

class Leaderboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            players: []
        };
    }

    componentDidMount() {
        this.getTop20Data();
        this.getPlayerData();
    }

    async getTop20Data() {
        try {
            const response = await axios.get("/api/fgc_top.php", {
                params: {
                    game: "DBFZ",
                    size: 20,
                    format: "json"
                }
            })

            this.setState({
                isLoaded: true,
                players: response.data
            });

            return response;


        } catch(err) {
            this.setState({
                isLoaded: true,
                error: err
            });
        }

    }

    async getPlayerData() {
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
                player: response.data
            });

            console.log(response.data);

            return response;


        } catch(err) {
            this.setState({
                isLoaded: true,
                error: err
            });

            console.log(err);
        }

    }

    render() {
        const { error, isLoaded, players } = this.state;
        console.log("this is the state: ", players);
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
                        <h1 className="dbfz-header center">DBFZ Top 20</h1>
                        <Fragment>
                        {players.map(players => (
                            <ul key={players.name}>
                                <li className = "fighter-name">{`${players.rank}. ${players.name}`}</li>
                                <li className = "fighters-characters">{`Characters Used: ${players.character.map((item)=>{
                                    console.log(item.substring(5));
                                    return(item.substring(5));
                                })}`}</li>
                                <li className = "fighters-fullname">{`Full Name: ${players.fullname}`}</li>
                                <li className = "fighters-country">{`Country: ${players.country}`}</li>
                            </ul>
                        ))}
                        </Fragment>
                    </div>
                );
            }
        }
    };

export default Leaderboard;
