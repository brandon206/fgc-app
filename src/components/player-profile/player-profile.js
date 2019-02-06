import React, { Component, Fragment } from 'react';
import dbfz from '../../assets/images/dbfz-results-banner.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPlayerData } from '../../actions/';


class PlayerProfile extends Component {

    componentDidMount() {
        this.props.getPlayerData();
    }

    render (){
        const { player_data } = this.props;
        console.log("player teams: ", player_data.player.player_data.teams);

        const data = player_data.player.player_data;
            return (
                <div>
                    <div>
                        <img className = "dbfz-banner" src= {dbfz} alt="dbfz wallpaper"/>
                    </div>
                    <h1 className="dbfz-header center">{`${data.name} Player Profile`}</h1>
                     
                        <div className="main-game">{`Main Game: ${data.mainGame}`}</div>

                        {/* <div className = "alltimeRanking">{`Alltime Ranking: ${data.rankings.DBFZ.alltimeRank}`}</div> */}
                        {/* <div className="mains">{`Main Characters: ${data.rankings.DBFZ.main.map((character) => {
                            return (` ${character.substring(5)}`);
                        })}`}</div> */}
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