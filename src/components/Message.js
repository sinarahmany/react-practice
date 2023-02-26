import { Children } from "react"
import { useState } from "react"

export const Message = (props) =>
{
    const [message, setMessage] = useState('Welcome visitor');
    return (<div>
        {message}
        <button onClick={() => setMessage('Thank you for subscribing!')}>Subscribe</button>
    </div>)
   
}