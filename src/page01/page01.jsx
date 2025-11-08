import { useState , useEffect } from "react";
import './page01.css'


function Page01 (){


    return (
        <div>
            <h1>This is page01</h1>
            <button className="bt-page" onClick={()=>{window.location.href = '../../index.html'}}>Enter</button>
        </div>
    )

}


export default Page01;