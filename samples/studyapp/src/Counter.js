import {Component} from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            Counter: 0,
        };
    }

    increment() {
        this.setState ({
            Counter: this.state.Counter + 1,
        });
    }

    render() {
        return (
            <div>
                <h2>Count value is: {this.state.Counter}</h2>
                <button onClick={() => this.increment()} >Increment</button>
            </div>
        )
    }
}

export default Counter;