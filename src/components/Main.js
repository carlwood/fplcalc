require('normalize.css/normalize.css');
require('styles/app.scss');

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="container">
            <h1 className="mast-heading">FPL Calc</h1>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
