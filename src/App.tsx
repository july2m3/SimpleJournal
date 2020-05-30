import React from 'react';

import './style.css';

import journalEntries from './journal-info.json';

import LeftBar from './components/LeftBar';
import JournalEntry from './components/JournalEntry';

interface IProps {}
interface IState {
  data: any;
}
class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      data: '',
    };
  }

  componentDidMount() {
    this.setState(() => ({
      data: journalEntries,
    }));
  }

  render() {
    const { data } = this.state;
    return (
      <div className="app">
        <h1 className="title">Simple Journal</h1>
        <LeftBar />
        {data && <JournalEntry entries={data} />}
      </div>
    );
  }
}

export default App;
