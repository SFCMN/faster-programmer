import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Icon from "@ant-design/icons";
import './Content.css';
import {Image} from "antd";
import logo from './logo.png';
import {keymap, script, tools} from './images';

class Content extends Component {
    render() {
        return (
            <div>
                <header className="navigation-bar">
                    <nav>
                        <Link to='/'><Image width={32} src={logo}/></Link>
                        <ul>
                            <li><Link to='/content/keymap' id='keymap-nav'><Icon component={keymap}/><span>快捷键</span></Link></li>
                            <li><Link to='/content/script' id='script-nav'><Icon component={script}/><span>脚本</span></Link></li>
                            <li><Link to='/content/tools' id='tools-nav'><Icon component={tools}/><span>工具</span></Link></li>
                        </ul>
                    </nav>
                </header>
                {this.props.children}
            </div>
        );
    }
}

export default Content;