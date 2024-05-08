import React from "react";
import ReactDOM from 'react-dom/client'

const heading = React.createElement("h1", {}, "Shubham this side")

// const parent = React.createElement("div",{id:"parent"}, heading)
// console.log(parent)
// const parentJSX = <div id="parent">jsx</div>
// console.log(parentJSX);

const headingJSX = <h1>heading with jsx</h1>

const Heading = ()=>(
    <h1>
        functional component
    </h1>
)

const Parent = ()=>{
    return (
        <div>div
            {Heading()}
            <Heading/>
            {heading}
            {headingJSX}
        </div>
    )
}
console.log(Parent);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Parent/>)