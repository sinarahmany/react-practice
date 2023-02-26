import { Children } from "react"
import { useState } from "react"

export const ClickHandler = () =>
{
    const clickHandler = (event) => {
        console.log(event)
    }
    return (<div>
    
        <button onClick={(event) => clickHandler(event)}>click</button>
    </div>)
   
}