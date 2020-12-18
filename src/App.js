import logo from './logo.png';
import keymap from './keymap.png';
import script from './script.png';
import tools from './tools.png';

import './App.css';
import Card from "./Card";
import { Row, Col } from 'antd';

function App() {
  return (
    <div className="app">
      <header id="logo-header">
          <Card image={logo} enableBorder={false} title="Faster Programmer" description="致力于提升程序猿👨‍💻👩‍💻的开发效率"/>
      </header>
      <main id="main-content">
          <Row>
              <Col span={8}>
                  <Card image={keymap} keyword="快捷键" title="使👨‍💻👩‍💻更快" description="帮助你熟练地使用各种快捷键，放弃鼠标和触控板吧，像黑客们那样"/>
              </Col>
              <Col span={8}>
                  <Card image={script} keyword="脚本" title="使👨‍💻👩‍💻更快" description="你还在UI上费劲地点点点吗？简单的一条命令，替你轻松完成操作"/>
              </Col>
              <Col span={8}>
                  <Card image={tools} keyword="工具" title="使👨‍💻👩‍💻更快" description="优秀的、便捷的工具，不仅能快速实现你的需求，还能节省下时间去做些有意义的事"/>
              </Col>
          </Row>
      </main>
    </div>
  );
}

export default App;
