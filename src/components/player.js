import React from 'react';

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
                <p>Calculate your player's potential points by completing this form.</p>
            </div>
        )
    }
}

class PlayerForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            mins: 0,
            goals: null,
            assists: null,
            position: 'gk'
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePositionChange = this.handlePositionChange.bind(this);
        this.handleMinsChange = this.handleMinsChange.bind(this);
        this.handleGoalsChange = this.handleGoalsChange.bind(this);
        this.handleAssistsChange = this.handleAssistsChange.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handlePositionChange(event) {
        this.setState({position: event.target.value});
    }

    handleMinsChange(event) {
        this.setState({mins: event.target.value});
    }

    handleGoalsChange(event) {
        this.setState({goals: event.target.value});
    }

    handleAssistsChange(event) {
        this.setState({assists: event.target.value});
    }

    render() {
        return (
            <div className="flex-container">
                <div className="card">
                    <PlayerIntro />
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Player name</label>
                            <input className="form-input" type="text" onChange={this.handleNameChange} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Position</label>
                            <select className="form-input" onChange={this.handlePositionChange}>
                                <option value="gk">GK</option>
                                <option value="def">DEF</option>
                                <option value="mid">MID</option>
                                <option value="fwd">FWD</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Minutes Played</label>
                            <input className="form-input" type="range" max="90" onChange={this.handleMinsChange} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Goals</label>
                            <input className="form-input" type="number" onChange={this.handleGoalsChange} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Assists</label>
                            <input className="form-input" type="number" onChange={this.handleAssistsChange} />
                        </div>
                        <input className="btn" type="submit" value="Submit" />
                    </form>
                </div>
                <div className="player-result">
                    <PlayerResult
                        name={this.state.name}
                        pos={this.state.position}
                        mins={this.state.mins}
                        goals={this.state.goals} 
                        assists={this.state.assists}
                    />
                </div>
            </div>
        );
    }
}

class PlayerResult extends React.Component {

    renderGoalPoints() {
        return (
            <span>{this.props.goals * 5}</span>
        )
    }

    renderAssistPoints() {
        return (
            <span>{this.props.assists * 4}</span>
        )
    }

    render() {
        const minsPoints = this.props.mins > 60 ? 2 : 1;
        return (
            <div>
                <div className="player-name">{this.props.name}</div>
                <div>{this.props.pos}</div>
                <div><b>{this.props.mins}</b> minutes played ({minsPoints})</div>
                <div><b>{this.props.goals}</b> goals ({this.renderGoalPoints()})</div>
                <div><b>{this.props.assists}</b> assist ({this.renderAssistPoints()})</div>
                <span className="player-points">17</span>
                <span className="player-points-label">points</span>
            </div>
        )
    }
}

export default Player;