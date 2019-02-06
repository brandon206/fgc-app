import React, {Component, Fragment} from 'react';
import dbfz from '../../assets/images/dbfz-results-banner.png';
import leaderboardcss from './leaderboard.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLeaderboardData } from '../../actions'


class Leaderboard extends Component {

    componentDidMount() {
        this.props.getLeaderboardData();
    }

    render() {
        // console.log("leaderboard data as props: ", this.props);
        const { playerList } = this.props;

        console.log("playerlist: ", playerList);
            return (
                <div>
                    <div>
                        <img className = "dbfz-banner" src= {dbfz} alt="dbfz wallpaper"/>
                    </div>
                    <h1 className="dbfz-header center">DBFZ Top 20</h1>
                    <Fragment>
                    {playerList.leaderboard.players.map(players => (
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

//pulls information from redux state
function mapStateToProps (state){
    return {
        playerList: state
    }
}

export default connect(mapStateToProps, {
    // this is the action creator
    getLeaderboardData
})(Leaderboard);
