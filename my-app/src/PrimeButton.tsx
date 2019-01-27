import * as React from 'react';
import './App.css';
import PrimeButtonDescription from './PrimeButtonDescription';
import Header from './Header';
import logo from './logo.svg';

class PrimeButton extends React.Component {
    public render() {
        return (
            <div className="PrimeButton">
                <PrimeButtonDescription num={0} />
            </div>
        );
    }
}

export default PrimeButton;
