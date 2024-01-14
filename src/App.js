import React from "react";
import ReactDOM from "react-dom/client";
import MyPhoto from "./icons/photo.jpg";

const HeaderComponent =() => {
    return <div className="header">
        <img className="w-10" src={MyPhoto}></img>
    </div>
}


const AppLayout =() => {
    return <div className="app">
        <HeaderComponent/>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)