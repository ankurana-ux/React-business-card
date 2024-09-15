import React from "react"
import Header from "./components/Header"
import Middle from "./components/Middle"
import Body from "./components/Body"
import Footer from "./components/Footer"

export default function App(){
    return (
        <div className="AppContainer">
            <Header/>
            <Middle/>
            <Body/>
            <Footer/>
        </div>
    )
}