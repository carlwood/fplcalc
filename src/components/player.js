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

    constructor() {
        super();
        this.state = {
            name: '',
            mins: 0,
            goals: 0,
            assists: 0,
            position: 'gk',
            total: 0,
            points: {}
        }
    }

    setValue(event) {
        this.setState({[event.target.name]: event.target.value});
        console.log(this.state);
    }

    render() {
        return (
            <div className="flex-container">
                <div className="card">
                    <PlayerIntro />
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Player name</label>
                            <input className="form-input" type="text" placeholder="e.g. Costa" name="name" onChange={this.setValue.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Position</label>
                            <select className="form-input" name="position" onChange={this.setValue.bind(this)}>
                                <option value="gk">GK</option>
                                <option value="def">DEF</option>
                                <option value="mid">MID</option>
                                <option value="fwd">FWD</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Minutes Played</label>
                            <div className="form-radio">
                                <input type="radio" name="mins" value="< 60" onChange={this.setValue.bind(this)} />
                                <label>&lt; 60</label>
                            </div>
                            <div className="form-radio">
                                <input type="radio" name="mins" value="> 60" onChange={this.setValue.bind(this)}/>
                                <label>&gt; 60</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Goals</label>
                            <div className="form-radio">
                                <input type="radio" name="goals" value="1" onChange={this.setValue.bind(this)} />
                                <label>1</label>
                            </div>
                            <div className="form-radio">
                                <input type="radio" name="goals" value="2" onChange={this.setValue.bind(this)}/>
                                <label>2</label>
                            </div>
                            <div className="form-radio">
                                <input type="radio" name="goals" value="3" onChange={this.setValue.bind(this)} />
                                <label>3</label>
                            </div>
                            <div className="form-radio">
                                <input type="radio" name="goals" value="4" onChange={this.setValue.bind(this)}/>
                                <label>4</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Assists</label>
                            <div className="form-radio">
                                <input type="radio" name="assists" value="1" onChange={this.setValue.bind(this)} />
                                <label>1</label>
                            </div>
                            <div className="form-radio">
                                <input type="radio" name="assists" value="2" onChange={this.setValue.bind(this)}/>
                                <label>2</label>
                            </div>
                            <div className="form-radio">
                                <input type="radio" name="assists" value="3" onChange={this.setValue.bind(this)} />
                                <label>3</label>
                            </div>
                            <div className="form-radio">
                                <input type="radio" name="assists" value="4" onChange={this.setValue.bind(this)}/>
                                <label>4</label>
                            </div>
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
                        total={this.state.total}
                    />
                </div>
            </div>
        );
    }
}

class PlayerResult extends React.Component {

    renderGoalPoints() {
        return (
            <span className="player-minipoints">{this.props.goals * 5}</span>
        )
    }

    renderAssistPoints() {
        return (
            <span className="player-minipoints">{this.props.assists * 4}</span>
        )
    }

    render() {
        const minsPlayed = this.props.mins === '> 60' ? 'Full match' : 'Partial match';
        const minsPoints = this.props.mins === '> 60' ? 2 : 1;
        return (
            <div>
                <div className="player-name">{this.props.name}</div>
                <div>{this.props.pos}</div>
                <div><b>{minsPlayed}</b> ({minsPoints})</div>
                <div><b>{this.props.goals}</b> goals ({this.renderGoalPoints()})</div>
                <div><b>{this.props.assists}</b> assist ({this.renderAssistPoints()})</div>
                <TotalPoints />
                <span className="player-points-label">points</span>
            </div>
        )
    }
}

class TotalPoints extends React.Component {
    render() {
        const total = 0;
        return (
            <span className="player-points">{total}</span>
        )
    }
}

export default Player;