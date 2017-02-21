require('normalize.css/normalize.css');
require('styles/app.scss');

import React from 'react';
import Player from './player';

class AppComponent extends React.Component {
    render() {
        return (
            <div className="index">
                <div className="container">
                    <h1 className="site-logo">FPL Calc</h1>
                    <div>
                        <Player />
                    </div>
                </div>
            </div>
        );
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
