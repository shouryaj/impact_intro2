import * as React from 'react';
import './App.css';
import Body from "./Body";
import Headbar from "./Headbar";
import Sidebar from "./Sidebar";

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <header className="App-header"></header>
                <Headbar/>
                <Sidebar/>
                <Body/>
            </div>
        );
    }
}

export default App;