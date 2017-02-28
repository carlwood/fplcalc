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
            position: 'gk',
            capt: false,
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

    handleCheck(event) {
        this.setState({capt: event.target.checked});
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
                            <input className="form-input" type="text" placeholder="e.g. Costa" name="name" onChange={this.setInfo.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Position</label>
                            <div className="form-radio">
                                <input type="radio" name="position" value="gk" id="gk" onChange={this.setInfo.bind(this)} />
                                <label htmlFor="gk">GK</label>
                            </div>
                            <div className="form-radio">
                                <input type="radio" name="position" value="def" id="def" onChange={this.setInfo.bind(this)} />
                                <label htmlFor="def">DEF</label>
                            </div>
                            <div className="form-radio">
                                <input type="radio" name="position" value="mid" id="mid" onChange={this.setInfo.bind(this)} />
                                <label htmlFor="mid">MID</label>
                            </div>
                            <div className="form-radio">
                                <input type="radio" name="position" value="fwd" id="fwd" onChange={this.setInfo.bind(this)} />
                                <label htmlFor="fwd">FWD</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Minutes Played</label>
                            <div className="form-radio">
                                <input type="radio" name="mins" value="1" id="mins1" onChange={this.setPoints.bind(this)} />
                                <label htmlFor="mins1">Up to 60 mins</label>
                            </div>
                            <div className="form-radio">
                                <input type="radio" name="mins" value="2" id="mins2" onChange={this.setPoints.bind(this)} />
                                <label htmlFor="mins2">60 + mins</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Goals</label>
                            <div className="form-radio">
                                <input type="radio" name="goals" value="0" id="goals0" onChange={this.setPoints.bind(this)}  />
                                <label htmlFor="goals0">0</label>
                            </div>
                            <div className="form-radio">
                                <input type="radio" name="goals" value="1" id="goals1" onChange={this.setPoints.bind(this)} />
                                <label htmlFor="goals1">1</label>
                            </div>
                            <div className="form-radio">
                                <input type="radio" name="goals" value="2" id="goals2" onChange={this.setPoints.bind(this)}/>
                                <label htmlFor="goals2">2</label>
                            </div>
                            <div className="form-radio">
                                <input type="radio" name="goals" value="3" id="goals3" onChange={this.setPoints.bind(this)} />
                                <label htmlFor="goals3">3</label>
                            </div>
                            <div className="form-radio">
                                <input type="radio" name="goals" value="4" id="goals4" onChange={this.setPoints.bind(this)}/>
                                <label htmlFor="goals4">4</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Assists</label>
                            <div className="form-radio">
                                <input type="radio" name="assists" value="0" id="assists0" onChange={this.setPoints.bind(this)} />
                                <label htmlFor="assists0">0</label>
                            </div>
                            <div className="form-radio">
                                <input type="radio" name="assists" value="1" id="assists1" onChange={this.setPoints.bind(this)} />
                                <label htmlFor="assists1">1</label>
                            </div>
                            <div className="form-radio">
                                <input type="radio" name="assists" value="2" id="assists2" onChange={this.setPoints.bind(this)}/>
                                <label htmlFor="assists2">2</label>
                            </div>
                            <div className="form-radio">
                                <input type="radio" name="assists" value="3" id="assists3" onChange={this.setPoints.bind(this)} />
                                <label htmlFor="assists3">3</label>
                            </div>
                            <div className="form-radio">
                                <input type="radio" name="assists" value="4" id="assists4" onChange={this.setPoints.bind(this)}/>
                                <label htmlFor="assists4">4</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Extra</label>
                            <div className="form-radio">
                                <input type="checkbox" name="capt" id="capt" checked={this.state.checked} onClick={this.handleCheck.bind(this)} />
                                <label htmlFor="capt">Captain</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="player-result">
                    <PlayerResult
                        name={this.state.name}
                        pos={this.state.position}
                        mins={this.state.points.mins}
                        goals={this.state.points.goals}
                        assists={this.state.points.assists}
                        total={this.state.points.total}
                        capt={this.state.capt}
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
        const points = this.props.assists * 4;
        return (
            <div><b>{this.props.assists}</b> assists ({points})</div>
        )
    }
}

class GoalPoints extends React.Component {
    render() {
        const points = this.props.goals * 5;
        return (
            <div><b>{this.props.goals}</b> goals ({points})</div>
        )
    }
}

class TotalPoints extends React.Component {
    render() {
        let total = this.props.goals * 5 + this.props.assists * 4 + parseInt(this.props.mins);
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
            <div className={captClass}>
                <div className="player-name">{this.props.name}</div>
                <MinutePoints mins={this.props.mins} />
                <GoalPoints goals={this.props.goals} />
                <AssistPoints assists={this.props.assists} />
                <TotalPoints goals={this.props.goals} assists={this.props.assists} capt={this.props.capt} mins={this.props.mins}/>
            </div>
        )
    }
}

export default Player;