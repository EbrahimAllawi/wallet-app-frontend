import {Session} from '../js/classes'
import React,{useEffect} from 'react';


var redirectToApp: Function = Session.redirectToApp

function Main() {
    useEffect(() => {
        redirectToApp()  
        localStorage.clear()        
    })

    return (
        <>
            <div className="main">Yo need to rigister or login to use app</div>
        </>
    );
}


export default Main;