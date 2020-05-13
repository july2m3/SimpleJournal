import React from 'react';

import './style.css';

const Morning = () => {
  return <h1>morning</h1>;
};

const Night = () => {
  return <h1>night</h1>;
};

interface Props {}
interface State {
  isMorning: Boolean;
}

class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isMorning: true,
    };
  }

  switchDayTime = (e: any) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
    this.setState((prevState) => ({
      isMorning: !prevState.isMorning,
    }));
  };

  render() {
    return (
      <div className="app">
        <h1>Simple Journal</h1>

        {this.state.isMorning && <Morning />}
        {!this.state.isMorning && <Night />}

        <div className="buttons">
          <button className="morning-button" onClick={this.switchDayTime}>
            Morning
          </button>
          <button className="night-button" onClick={this.switchDayTime}>
            Night
          </button>
        </div>
      </div>
    );
  }
}

export default App;
