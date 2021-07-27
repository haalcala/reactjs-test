import { useState } from "react"

const Component1 = (props:any) => {
    const {var1} = props

    const [var2, setVar2] = useState(0)
    
    console.log("Rendering Component1")

    return <div>
        Component1 var1: {var1} {var2}

        {console.log("Rendering Component1 aaa")}

        <button onClick={() => {
        setVar2(var2+1)
      }}>Inc</button>
    </div>
}

export default Component1