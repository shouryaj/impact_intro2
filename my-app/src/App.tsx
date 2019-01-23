import * as React from 'react';
import './App.css';
import Description from './Description';
import Header from './Header';
import logo from './logo.svg';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Header name="TEST" />
                </header>
                <Description countBy={8} />
            </div>
        );
    }
}

export default App;
