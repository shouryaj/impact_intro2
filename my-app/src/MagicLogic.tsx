import * as React from 'react';
import shuffle from './shuffle1.gif';

interface IProps {
    mode?: number;
}

interface IState {
    message: string;
}

class MagicLogic extends React.Component<IProps, IState> {
    public static defaultProps: Partial<IProps> = {
        mode: 1,
    };

    public state: IState = {
        message: "",
    };

    public activate = () => {
        const mode: number = this.props.mode!;
        const img = document.getElementById("magicImg") as HTMLImageElement;
        const ans = document.getElementById("magicAnswer") as HTMLInputElement;
        if(ans.value == "420"){
            img.src = shuffle;
            img.alt = "shuffle1 image"
        }
        
        // const count = this.state.count + countBy;
        // this.setState({ count });
    };

    public render() {
        return (
            <div>
                <p>Find what the magic number is</p>
                <input id="magicAnswer" type="text" />
                <button onClick={this.activate}>Activate</button>
                <img id="magicImg" src="" alt=""></img>
            </div>
        );
    }
}

export default MagicLogic;