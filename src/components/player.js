import React from 'react';

class Player extends React.Component {
    render() {
        return (
            <div className="card">
                <PlayerForm />
            </div>
        );
    }
}

class PlayerForm extends React.Component {

    // https://facebook.github.io/react/docs/forms.html

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('player name is ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label className="form-label">Player name</label>
                <input className="form-input" type="text" value={this.state.value} onChange={this.handleChange} />
                <input className="btn" type="submit" value="Submit" />
            </form>
        );
    }
}

export default Player;