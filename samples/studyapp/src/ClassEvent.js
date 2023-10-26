import {Component} from 'react'

class ClassEvent extends Component {
    handleClick() {
        console.log('Button is Clicked!')
    }

    render () {
        return(
            <div>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}

export default ClassEvent;