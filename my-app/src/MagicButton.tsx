import * as React from 'react';
import './App.css';
import Description from './Description';
import Header from './Header';
import MagicLogic from './MagicLogic';
import logo from './logo.svg';

class MagicButton extends React.Component {
    public render() {
        return (
            <div className="MagicButton">
                <MagicLogic mode={1} />
            </div>
        );
    }
}

export default MagicButton;
