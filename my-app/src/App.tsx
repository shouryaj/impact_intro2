import * as React from 'react';
import './App.css';
import Body from "./Body";
import Headbar from "./Headbar";
import Sidebar from "./Sidebar";

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Header name="Impact++" />
                </header>
                <Description countBy={3} />
                <Headbar/>
                <Sidebar/>
                <Body/>
            </div>
        );
    }
}

export default App;
