import * as React from 'react';
import './App.css';
<<<<<<< HEAD
import Body from "./Body";
import Headbar from "./Headbar";
import Sidebar from "./Sidebar";
import Description from "./Description";
=======
import Description from './Description';
import SimpleCountButton from './SimpleCountButton';
import Header from './Header';
import logo from './logo.svg';
>>>>>>> mitchell_and_lea

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
