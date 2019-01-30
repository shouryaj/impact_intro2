import * as React from 'react';
import './App.css';
import Description from './Description';
import Header from './Header';
import logo from './logo.svg';
import SearchBar from "./SearchBar";

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <header>
                    <Header name="Impact++" />
                </header>
                <Description countBy={8} />
                <SearchBar />
            </div>
        );
    }
}

export default App;
