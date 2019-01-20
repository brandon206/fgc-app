import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React, {Component} from 'react';
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

    getPlayerData() {
        fetch("fgc.php")
        .then(res => res.json()).then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    players: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
        // const getTopPlayersDBFZ = 'top?game=DBFZ&size=50';
        // const resp = axios.get(BASE_URL + getTopPlayersDBFZ).then((resp)=> {
        //     console.log('Server running: ', resp);
        // });

    }

    render() {
        const { error, isLoaded, players } = this.state;
            if (error) {
                return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
                return <div>Loading...</div>;
            } else {
                return (
                    <ul>
                    {players.map(players => (
                        <li key={players.name}>
                        {players.fullname}
                        </li>
                    ))}
                    </ul>
                );
            }
        }
    }

export default App;
