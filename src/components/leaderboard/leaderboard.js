import React, {Component, Fragment} from 'react';
import axios from 'axios';
import dbfz from '../../assets/images/dbfz-results-banner.png';
import leaderboardcss from './leaderboard.css';
import { Link } from 'react-router-dom';

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
                                <Link to = {`/player-profile/${players.id}`} className = "fighter-name" >{`${players.rank}. ${players.name}`}</Link>
                                <li className = "fighters-characters">{`Characters Used: ${players.character.map((item)=>{
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
