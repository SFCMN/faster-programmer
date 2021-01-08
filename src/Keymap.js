import React, {Component} from 'react';
import InProgress from "./InProgress";
import {displayBottomBorder, removeBottomBorder} from "./assets/js/util";
import {Menu, Tag} from "antd";
import './Keymap.css';

const { SubMenu } = Menu;

class Keymap extends Component {
    componentDidMount() {
        displayBottomBorder('keymap-nav');
    }

    componentWillUnmount() {
        removeBottomBorder('keymap-nav');
    }

    render() {
        const letters = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G',
            'H', 'I', 'J', 'K', 'L', 'M', 'N',
            'O', 'P', 'Q', 'R', 'S', 'T',
            'U', 'V', 'W', 'X', 'Y', 'Z',
        ];
        return (
            <div>
                <Menu mode="vertical" className="side-menu">
                    {
                        letters.map(letter => (
                            <SubMenu key={letter} title={letter} expandIcon={""}>
                                <div className="keymap-items">
                                    {
                                        [
                                            'test1', 'test2', 'test3','test4', 'test5',
                                            'test1', 'test2', 'test3','test4', 'test5',
                                            'test1', 'test2', 'test3','test4', 'test5',
                                            'test1', 'test2', 'test3','test4', 'test5',
                                            'test1', 'test2', 'test3','test4', 'test5',
                                            'test1', 'test2', 'test3','test4', 'test5'
                                        ].map(keymap => (
                                            <Tag onClick={() => {alert('作者正在玩命开发中，请耐心等待...')}}>{keymap}</Tag>
                                        ))
                                    }
                                </div>
                            </SubMenu>
                        ))
                    }
                </Menu>
                <InProgress text={`作者正在玩命开发 ${this.props.match.url.substring(9)} 页面中，请耐心等候...`}/>
            </div>
        );
    }
}

export default Keymap;
