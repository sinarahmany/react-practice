import { Children } from "react"

const Greet = ({name, familyName, children}) =>
{
    return <div>
         <h1>Hello {name}, {familyName}</h1>
        {children}
    </div>
   
}

export default Greet