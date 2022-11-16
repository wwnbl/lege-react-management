import { useState } from 'react'
import { Button } from 'antd';
import {useRoutes,Link} from "react-router-dom"
import  router from "./router"

// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { WechatOutlined } from '@ant-design/icons';
function App() {
  const [count, setCount] = useState(0)
  const outlet =useRoutes(router)
  return (
    <div className="App">
      {/* 顶级组件
      <Button type="primary">Primary Button</Button>
      <WechatOutlined  style={{fontSize:"20px", color:"red"}}/> */}

      {/* <Link to="/home">Home</Link>|
      <Link to="/about">About</Link> */}

      {/* <Outlet></Outlet> */}
      { outlet}
    </div>
  )
}

export default App
