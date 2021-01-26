import React, {Component} from 'react';
import InProgress from "./InProgress";
import {displayBottomBorder, removeBottomBorder} from "../assets/js/util";
import {Menu, Tag} from "antd";
import './Keymap.css';
import keymaps from "../../public/keymap/keymaps.json";
import {chars, numbers} from "../constants";
import {downloadElementAsImage} from "../utils/downloadElementAsImage";

const {SubMenu} = Menu;

class Keymap extends Component {
    componentDidMount() {
        displayBottomBorder('keymap-nav');
        // 测试按钮样式
        // const btn = document.getElementById("download-image-btn");
        // btn.style.position = "absolute";
        // btn.style.left = (btn.parentElement.offsetWidth - 80) / 2 + "px";
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

    generateKeyMapPage = (event) => {
        const pageName = event.target.innerHTML;
        const hint = `作者正在玩命开发 ${pageName} 相关内容中，请耐心等待...`;
        const content = require(`../../public/keymap/${pageName}`);
        console.log(JSON.stringify(content, null, 2));
        alert(hint);
    }

    downloadImage = async () => {
        const elementId = "test-div";
        const imageName = "test.png";
        await downloadElementAsImage(elementId, imageName);
    };

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
                                            <Tag key={keymap} onClick={this.generateKeyMapPage}>{keymap}</Tag>
                                        ))
                                    }
                                </div>
                            </SubMenu>
                        ))
                    }
                </Menu>
                <InProgress text={`作者正在玩命开发 ${this.props.match.url.substring(9)} 页面中，请耐心等候...`}/>
                {/*<div id="test-div">*/}
                {/*    <p style={{*/}
                {/*        border: 'solid 1px black',*/}
                {/*        textAlign: 'center',*/}
                {/*        margin: '100px auto',*/}
                {/*        width: '400px',*/}
                {/*        userSelect: 'none'*/}
                {/*    }}>*/}
                {/*        这是一个测试组件*/}
                {/*    </p>*/}
                {/*</div>*/}
                {/*<input id="download-image-btn" type="button" value="下载" onClick={this.downloadImage}*/}
                {/*       style={{width: "80px"}}/>*/}
            </div>
        );
    }
}

export default Keymap;
