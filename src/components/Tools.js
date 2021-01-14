import React, {Component} from 'react';
import InProgress from "./InProgress";
import {displayBottomBorder, removeBottomBorder} from "../assets/js/util";

class Tools extends Component {
    componentDidMount() {
        displayBottomBorder('tools-nav');
    }

    componentWillUnmount() {
        removeBottomBorder('tools-nav');
    }
    render() {
        return (
            <div>
                <InProgress text={`作者正在玩命开发 ${this.props.match.url.substring(9)} 页面中，请耐心等候...`}/>
            </div>
        );
    }
}

export default Tools;
