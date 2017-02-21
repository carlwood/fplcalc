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
                <p>Add your player and calculate their potential points by completing this form.</p>
            </div>
        )
    }
}

class PlayerForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            goals: null,
            assists: null
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleGoalsChange = this.handleGoalsChange.bind(this);
        this.handleAssistsChange = this.handleAssistsChange.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
        console.log(this.state.name);
    }

    handleGoalsChange(event) {
        this.setState({goals: event.target.value});
        console.log(this.state);
    }

    handleAssistsChange(event) {
        this.setState({assists: event.target.value});
        console.log(this.state.assists);
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
                            <label className="form-label">Goals</label>
                            <input className="form-input" type="text" onChange={this.handleGoalsChange} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Assists</label>
                            <input className="form-input" type="text" onChange={this.handleAssistsChange} />
                        </div>
                        <input className="btn" type="submit" value="Submit" />
                    </form>
                </div>
                <div className="player-result">
                    <PlayerResult 
                        name={this.state.name} 
                        goals={this.state.goals} 
                        assists={this.state.assists}/>
                </div>
            </div>
        );
    }
}

class PlayerResult extends React.Component {
    render() {
        return (
            <div>
                <div className="player-name">{this.props.name}</div>
                <div><b>78</b> minutes played (2)</div>
                <div><b>{this.props.goals}</b> goals (10)</div>
                <div><b>{this.props.assists}</b> assist (5)</div>
                <span className="player-points">17</span>
                <span className="player-points-label">points</span>
            </div>
        )
    }
}

export default Player;