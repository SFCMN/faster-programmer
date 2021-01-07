import React, {Component} from 'react';
import InProgress from "./InProgress";
import {displayBottomBorder, removeBottomBorder} from "./util";

class Keymap extends Component {
    componentDidMount() {
        displayBottomBorder('keymap-nav');
    }

    componentWillUnmount() {
        removeBottomBorder('keymap-nav');
    }

    render() {
        return (
            <div>
                <InProgress text={`作者正在玩命开发 ${this.props.match.url.substring(9)} 页面中，请耐心等候...`}/>
            </div>
        );
    }
}

export default Keymap;
