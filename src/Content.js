import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Content.css';
import {Image} from "antd";
import logo from './logo.png';
import keymap from './keymap.svg';
import script from './script.svg';
import tools from './tools.svg';

class Content extends Component {
    render() {
        return (
            <div>
                <header className="navigation-bar">
                    <nav>
                        <Link to='/'><Image width={32} src={logo}/></Link>
                        <ul>
                            <li><Link to='/content/keymap' id='keymap-nav'><Image src={keymap} preview=""/><span>快捷键</span></Link></li>
                            <li><Link to='/content/script' id='script-nav'><Image src={script} preview=""/><span>脚本</span></Link></li>
                            <li><Link to='/content/tools' id='tools-nav'><Image src={tools} preview=""/><span>工具</span></Link></li>
                        </ul>
                    </nav>
                </header>
                {this.props.children}
            </div>
        );
    }
}

export default Content;