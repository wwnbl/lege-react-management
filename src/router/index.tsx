import React,{lazy} from "react"

import Home from "../views/Home"
// import About from "../views/About"

const About =lazy(()=>import("../views/About"))
const Page1 =lazy(()=>import("../views/Page1"))
const Page2 =lazy(()=>import("../views/Page2"))

import {Navigate} from 'react-router-dom'
import { FormItemStatusContextProps } from "antd/lib/form/context"

const wihLoadingComponent  =(comp:JSX.Element)=>(
    <React.Suspense fallback={<div>Loading...</div>} >
        {comp}
    </React.Suspense>
)



const routes=[
    {
        path:"/",
        element:<Navigate to="/about" />
    },
    {
        path:"/",
        element:<Home />,
        children: [
            {
                path: "/page1",
                element: wihLoadingComponent(<Page1 />)
            },
            {
                path: "/page2",
                element: wihLoadingComponent(<Page2 />)
            },
            {
                path: "/about",
                element: wihLoadingComponent(<About />)
            },
        ]
    },
    // {
    //     path:"/about",
    //     element:wihLoadingComponent(<About />)
    // },
]

export default routes