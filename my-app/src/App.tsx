import * as React from 'react';
import './App.css';
import Body from "./Body";
import Headbar from "./Headbar";
import Sidebar from "./Sidebar";
import Description from "./Description";

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Headbar/>
                <Sidebar/>
                <Body/>
                <Description countBy={3} />
            </div>
        );
    }
}

export default App;
