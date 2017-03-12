import React from 'react';
import Radio from './Radio';
import Checkbox from './Checkbox';

class Player extends React.Component {
    render() {
        return (
            <PlayerForm />
        );
    }
}

class PlayerIntro extends React.Component {
    render() {
        return (
            <div className="form-intro">
                <p>Calculate your player points by completing this form.</p>
            </div>
        )
    }
}

class PlayerForm extends React.Component {

    constructor() {
        super();
        this.state = {
            name: '',
            position: '',
            goalMultiplier: 4,
            capt: false,
            yellowCard: false,
            redCard: false,
            points: {
                mins: 0,
                goals: 0,
                assists: 0,
                total: 0
            }
        }
    }

    setInfo(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    setPosition(event) {
        this.setState({[event.target.name]: event.target.value});
        let multiplier;
        if (event.target.value === 'gk' || event.target.value === 'def') {
            multiplier = 6;
        }
        else if (event.target.value == 'mid') {
            multiplier = 5;
        }
        else {
            multiplier = 4;
        }
        this.setState({goalMultiplier: multiplier});
    }

    handleCheck(event) {
        this.setState({[event.target.name]: event.target.checked});
    }

    setPoints(event) {
        const points = this.state.points;
        points[event.target.name] =  event.target.value;
        this.setState(points);
    }

    render() {
        return (
            <div className="flex-container">
                <div className="card">
                    <PlayerIntro />
                    <form>
                        <div className="form-group">
                            <label className="form-label">Player name</label>
                            <input className="form-input" type="text" placeholder="e.g. Costa" name="name" onChange={this.setPosition.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Position</label>
                            <Radio label="GK" value="gk" name="position" handleChange={this.setPosition.bind(this)} />
                            <Radio label="DEF" value="def" name="position" handleChange={this.setPosition.bind(this)} />
                            <Radio label="MID" value="mid" name="position" handleChange={this.setPosition.bind(this)} />
                            <Radio label="FWD" value="fwd" name="position" handleChange={this.setPosition.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Minutes Played</label>
                            <Radio label="Up to 60 mins" value="1" name="mins" handleChange={this.setPoints.bind(this)} />
                            <Radio label="Over 60 mins" value="2" name="mins" handleChange={this.setPoints.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Goals</label>
                            <Radio label="0" value="0" name="goals" handleChange={this.setPoints.bind(this)} />
                            <Radio label="1" value="1" name="goals" handleChange={this.setPoints.bind(this)} />
                            <Radio label="2" value="2" name="goals" handleChange={this.setPoints.bind(this)} />
                            <Radio label="3" value="3" name="goals" handleChange={this.setPoints.bind(this)} />
                            <Radio label="4" value="4" name="goals" handleChange={this.setPoints.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Assists</label>
                            <Radio label="0" value="0" name="assists" handleChange={this.setPoints.bind(this)} />
                            <Radio label="1" value="1" name="assists" handleChange={this.setPoints.bind(this)} />
                            <Radio label="2" value="2" name="assists" handleChange={this.setPoints.bind(this)} />
                            <Radio label="3" value="3" name="assists" handleChange={this.setPoints.bind(this)} />
                            <Radio label="4" value="4" name="assists" handleChange={this.setPoints.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Extra</label>
                            <Checkbox label="Captain" name="capt" handleChange={this.handleCheck.bind(this)} checkStatus={this.state.checked}/>
                            <Checkbox label="Yellow card" name="yellow" handleChange={this.handleCheck.bind(this)} checkStatus={this.state.checked}/>
                            <Checkbox label="Red card" name="red" handleChange={this.handleCheck.bind(this)} checkStatus={this.state.checked}/>
                        </div>
                    </form>
                </div>
                <div className="player-result">
                    <PlayerResult
                        name={this.state.name}
                        position={this.state.position}
                        mins={this.state.points.mins}
                        goals={this.state.points.goals}
                        assists={this.state.points.assists}
                        total={this.state.points.total}
                        capt={this.state.capt}
                        yellow={this.state.yellow}
                        red={this.state.red}
                        goalMultiplier={this.state.goalMultiplier}
                    />
                </div>
            </div>
        );
    }
}

class MinutePoints extends React.Component {
    render() {
        let minsPlayed = 0;
        if  (this.props.mins > 1) {
            minsPlayed = 'Full match'
        }
        else if (this.props.mins > 0) {
            minsPlayed = 'Partial match';
        }
        else {
            minsPlayed = '0 mins played';
        }
        return (
            <div><b>{minsPlayed}</b> ({this.props.mins})</div>
        )
    }
}

class AssistPoints extends React.Component {
    render() {
        const points = this.props.assists * 3;
        return (
            <div><b>{this.props.assists}</b> assists ({points})</div>
        )
    }
}

class GoalPoints extends React.Component {
    render() {
        const points = this.props.goals * this.props.goalMultiplier;
        return (
            <div><b>{this.props.goals}</b> goals ({points})</div>
        )
    }
}

class Cards extends React.Component {
    render() {
        if (this.props.yellow && this.props.red) {
            return (
                <div className="player-cards">
                    <div className="player__card is-yellow"></div>
                    <div className="player__card is-red"></div>
                </div>
            )
        }
        else if (this.props.yellow) {
            return (
                <div className="player-cards">
                    <div className="player__card is-yellow"></div>
                </div>
            )
        }
        else if (this.props.red) {
            return (
                <div className="player-cards">
                    <div className="player__card is-red"></div>
                </div>
            )
        }
        else {
            return null;
        }
    }
}

class TotalPoints extends React.Component {
    render() {

        // Calculate yellow/red card points to add to total
        let cardPoints = 0;
        if (this.props.yellow) {
            cardPoints = cardPoints - 1;
        }
        if (this.props.red) {
            cardPoints = cardPoints - 3;
        }
  
        let total = this.props.goals * this.props.goalMultiplier + this.props.assists * 3 + parseInt(this.props.mins) + cardPoints;
        if (this.props.capt) {
            total = parseInt(total * 2)
        }
        return (
            <div>
                <span className="player-points">{total}</span>
                <span className="player-points-label">points</span>
            </div>
        )
    }
}

class PlayerResult extends React.Component {

    render() {
        const captClass = this.props.capt ? 'is-captain' : '';
        return (
            <div className={'u-rel ' + captClass}>
                <div className="player-name">{this.props.name}</div>
                <Cards yellow={this.props.yellow} red={this.props.red} />
                <MinutePoints mins={this.props.mins} />
                <GoalPoints goals={this.props.goals} position={this.props.position} goalMultiplier={this.props.goalMultiplier}/>
                <AssistPoints assists={this.props.assists} />
                <TotalPoints 
                    goals={this.props.goals}
                    assists={this.props.assists}
                    capt={this.props.capt}
                    yellow={this.props.yellow}
                    red={this.props.red}
                    mins={this.props.mins}
                    goalMultiplier={this.props.goalMultiplier}
                />
            </div>
        )
    }
}

export default Player;