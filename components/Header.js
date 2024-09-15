import React from "react"

export default function Header(){
    return(
        <div className = "HeaderContainer">
            <div>
                <img src="/images/profile-picture.jpg" width="450px"/>
            </div>
            
            <div className="Information">
                <h1> Laura Smith</h1>
                <p>Front end developer</p>
                <a href="https://www.w3schools.com">www.scrimba.com</a>
            </div> 
        </div>    
    )
}