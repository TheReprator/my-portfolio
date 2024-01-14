import React from "react";
import ReactDOM from "react-dom/client";
import MyPhoto from "./icons/photo.jpg";

const HeaderComponent =() => {
    return <div className="header" class="container mx-auto">
        <img class=" w-[90px] h-[160px]" src={MyPhoto}></img>
    </div>
}


const AppLayout =() => {
    return <div className="app" class="bg-slate-600">
        <HeaderComponent/>
        <HeaderComponent/>
        <HeaderComponent/>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)