import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {HomeOutlined} from "@ant-design/icons";

class InProgress extends Component {
    render() {
        return (
            <div>
                <p style={{ border: 'solid 1px black', textAlign: 'center', margin: '100px auto', width: '300px', userSelect: 'none' }}>
                    该页面为测试页面，请以正式版本为准！
                </p>
                <p style={{ textAlign: 'center', margin: '-80px auto', width: '300px', userSelect: 'none', fontSize: '20px' }}>
                    <Link to='/'><HomeOutlined/></Link>
                </p>
            </div>
        );
    }
}

export default InProgress;