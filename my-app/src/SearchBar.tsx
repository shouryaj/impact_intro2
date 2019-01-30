import React, {Component} from 'react';
import './SearchBar.css'

interface IProps {
    countBy?: number;
}

interface IState {
    result: any;
    search: any;
}

export default class SearchBar extends Component {
    public static defaultProps: Partial<IProps> = {
        countBy: 1,
    };

    public state: IState = {
        result: {},
        search: ""
    };


    handleSearchValue = async (e:any) => {
        e.preventDefault();
        console.log(this.state.search);

        const login = {
            "client_id": "d6a9e4486f9b485fbb89e3bc351135c2",
            "response_type": "token",
            "redirect_uri": "http://localhost:3000/"
        };

        fetch('https://accounts.spotify.com/en/authorize?client_id=d6a9e4486f9b485fbb89e3bc351135c2&redirect_uri=http:%2F%2Flocalhost:3000%2F&response_type=token', { method: 'GET', headers: { 'Content-Type': 'application/json' } })
            .then(res => console.log(res));

    }

    render() {
        return (
            <div className="SearchBar">
                <label htmlFor="search-box" className="inputLabel">
                    Search
                </label>
                <input
                    type="text"
                    className="inputSearchBar"
                    id="search-box"
                    onChange={(evt) => { this.setState({search: evt.target.value}); }}
                />
                <button onClick={this.handleSearchValue}>SEARCH</button>

            </div>
        );
    }


}