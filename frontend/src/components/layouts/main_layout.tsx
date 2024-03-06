import React from "react";
import { Header } from "../header/header";
import { Outlet } from "react-router-dom";

export const MainLayout:React.FC=()=>{
    return<>
    <Header/>
    <main>
        <Outlet/>
    </main>

    </>

}