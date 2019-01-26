import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React, {Component, Fragment} from 'react';
import axios from 'axios';
import '../assets/css/app.scss';
import logo from '../assets/images/logo.svg';

const BASE_URL = 'http://rank.shoryuken.com/api/';

class App extends Component {
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
        // fetch("/api/fgc.php")
        // .then(res => res.json()).then(
        //     (result) => {
        //         this.setState({
        //             isLoaded: true,
        //             players: result
        //         });
        //     },
        //     (error) => {
        //         this.setState({
        //             isLoaded: true,
        //             error
        //         });
        //     }
        // )
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

        // const getTopPlayersDBFZ = 'top?game=DBFZ&size=50';
        // const resp = axios.get(BASE_URL + getTopPlayersDBFZ).then((resp)=> {
        //     console.log('Server running: ', resp);
        // });

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
        // console.log("the app is live!");
        // return (
        //     <div>App is live</div>
        // );
    };
// };

export default App;
