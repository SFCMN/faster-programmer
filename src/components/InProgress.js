import React, {Component} from 'react';

class InProgress extends Component {
    render() {
        return (
            <div>
                <p style={{ border: 'solid 1px black', textAlign: 'center', margin: '100px auto', width: '400px', userSelect: 'none' }}>
                    {this.props.text}
                </p>
            </div>
        );
    }
}

export default InProgress;