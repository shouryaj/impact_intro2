import * as React from 'react';
import './App.css';

import Body from "./Body";
import Headbar from "./Headbar";
import Sidebar from "./Sidebar";
import Description from "./Description";
import SimpleCountButton from './SimpleCountButton';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Headbar/>
                <Sidebar/>
                <Body/>
                <Description countBy={3} />
                <SimpleCountButton />
            </div>           
        );
    }
}

export default App;
