import React, {Component} from 'react';
import InProgress from "./InProgress";
import {displayBottomBorder, removeBottomBorder} from "../assets/js/util";
import {Menu, Tag} from "antd";
import './Keymap.css';
import keymaps from "../../public/keymap/keymaps.json";
import {chars, numbers} from "../constants";

const {SubMenu} = Menu;

class Keymap extends Component {
    componentDidMount() {
        displayBottomBorder('keymap-nav');
    }

    componentWillUnmount() {
        removeBottomBorder('keymap-nav');
    }

    listKeymaps = () => {
        const groupedKeymaps = {};
        keymaps.forEach(keymap => {
            let firstLetter = keymap.substring(0, 1).toUpperCase();
            numbers.includes(firstLetter) && (() => firstLetter = "0-9")();
            groupedKeymaps[firstLetter]
                ? (() => {
                    groupedKeymaps[firstLetter] = [...groupedKeymaps[firstLetter], keymap].sort();
                })()
                : (() => {
                    groupedKeymaps[firstLetter] = [keymap];
                })();
        });
        return groupedKeymaps;
    }

    render() {
        const groupedKeymaps = this.listKeymaps();
        return (
            <div>
                <Menu mode="vertical" className="side-menu">
                    {
                        chars.map(letter => (
                            <SubMenu key={letter} title={letter} expandIcon={""}
                                     style={groupedKeymaps[letter] ? {} : {"display": "none"}}>
                                <div className="keymap-items">
                                    {
                                        (groupedKeymaps[letter] || [
                                            '暂无 请耐心等待',
                                        ]).map(keymap => (
                                            <Tag key={keymap} onClick={() => {
                                                alert('作者正在玩命开发中，请耐心等待...')
                                            }}>{keymap}</Tag>
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
