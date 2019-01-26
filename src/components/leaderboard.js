import React, {Component, Fragment} from 'react';
import axios from 'axios';
import '../assets/css/app.scss';

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
        this.getPlayerData();
    }

    async getPlayerData() {
        try {
            const response = await axios.get("/api/fgc.php", {
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
                error
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
                    <div className="container">
                        <h1 className="center">DBFZ Leaderboards</h1>
                        <Fragment>
                        {players.map(players => (
                            <ul key={players.name}>
                                <li>{players.rank}</li>
                                <li>{players.name}</li>
                                <li>{players.fullname}</li>
                                <li>{players.country}</li>
                            </ul>
                        ))}
                        </Fragment>
                    </div>
                );
            }
        }
    };

export default Leaderboard;
