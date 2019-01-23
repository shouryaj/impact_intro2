import * as React from 'react';

interface IProps {
    countBy?: number;
}

interface IState {
    count: number;
}

class SimpleCountButton extends React.Component<IProps, IState> {
    public static defaultProps: Partial<IProps> = {
        countBy: 1,
    };

    public state: IState = {
        count: 0,
    };

    public increase = () => {
        const countBy: number = this.props.countBy!;
        const count = this.state.count + countBy;
        this.setState({ count });
    };

    public render() {
        return (
            <div>
                <p>This button has been pressed {this.state.count} times.</p>
                <button onClick={this.increase}>Press it!</button>
            </div>
        );
    }
}

export default SimpleCountButton;    