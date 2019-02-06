import React, { Component, Fragment } from 'react';
import dbfz from '../../assets/images/dbfz-results-banner.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPlayerData } from '../../actions/';
import playerprofilecss from './player-profile.css';


class PlayerProfile extends Component {

    componentDidMount() {
        //after render brings to top of the page
        window.scrollTo(0, 0);
        this.props.getPlayerData(this.props.location.pathname.match(/(\d+)/)[0]);
    }

    render (){
        if(this.props.player_data.player.player_data.length === 0){
            return (
                <div className="container progress">
                    <div className="indeterminate"></div>
                </div>
            );
        }
        const { player_data } = this.props;
        console.log("date: ", new Date(this.props.player_data.player.player_data.results[0].date));
        console.log("location path: ", this.props.location.pathname.match(/(\d+)/)[0]);
        let sortedArr = this.props.player_data.player.player_data.results;
        sortedArr.sort(function compare(a, b) {
            var dateA = new Date(a.date);
            var dateB = new Date(b.date);
            return dateB - dateA;
        });
        // console.log("tournament name: ", this.props.player_data.player.player_data.tournament[0].tournamentname);

        const data = player_data.player.player_data;
            return (
                <div>
                    <div>
                        <img className = "dbfz-banner" src= {dbfz} alt="dbfz wallpaper"/>
                    </div>
                    <h1 className="dbfz-header center">{`${data.name} Profile`}</h1>
                        <div className = "player-info">{`Teams: ${data.teams.map((item) => {
                                return (item);
                            })}`}</div>
                        <div className="player-info">{`Main Game: ${data.mainGame}`}</div>

                        <div className = "player-info">{`Alltime Ranking: ${data.rankings.DBFZ.alltimeRank}`}</div> 
                        <div className="player-info">{`Main Characters: ${data.rankings.DBFZ.main.map((character) => {
                            return (` ${character.substring(5)}`);
                        })}`}</div>
                        <Fragment>
                        {sortedArr.map(tournament => (
                            <ul key={tournament.tournamentname}>
                                <li className = "tournament-name">{`Tournament: ${tournament.tournamentname}`}</li>
                                <li className = "tournament-game">{`Game: ${tournament.game}`}</li>
                                <li className = "tournament-date">{`Date: ${new Date(tournament.date).toDateString()}`}</li>
                                <li className = "tournament-type">{`Type: ${tournament.type}`}</li>
                                <li className = "tournament-place">{`Place: ${tournament.place}`}</li>
                            </ul>
                        ))}
                        </Fragment>
                </div>
            );
    }
}

function mapStateToProps (state) {
    console.log("this is state: ", state);
    return {
        player_data: state
    }
}

export default connect(mapStateToProps, {
    getPlayerData
})(PlayerProfile);