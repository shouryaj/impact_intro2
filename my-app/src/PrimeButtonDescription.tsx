import * as React from 'react';

interface IProps {
    num?: number;
}

interface IState {
    message: string;
    input: number;
}

class PrimeButtonDescription extends React.Component<IProps, IState> {
    public static defaultProps: Partial<IProps> = {
        num: 0,
    };

    public state: IState = {
        message: "",
        input: 0,
    };

    public prime = () => {
        const input:number = Math.floor(Math.random() * 201);
        let message:string = "";
        this.setState({ input });
        const primes:number[] = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
            41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103,
            107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173,
            179, 181, 191, 193, 197, 199];
        if (primes.indexOf(input) > -1) {
          message = " is prime";
          this.setState({ message });
        } else {
          message = " is not prime";
          this.setState({ message });
        }

    };

    public render() {
        return (
            <div>
                <p>Click the button to see if a random number is prime:</p>
                <button onClick={this.prime}>Prime?</button>
                <p>{this.state.input} {this.state.message}</p>
            </div>
        );
    }
}

export default PrimeButtonDescription;
