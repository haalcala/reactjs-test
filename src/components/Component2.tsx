import { useState } from "react"
import Component3 from "./MyComponent"

const Component2 = (props:any) => {
    const {var1} = props

    const [var2, setVar2] = useState(0)
    
    console.log("Rendering Component2")

    return <div>
        Component2 var1: {var1} {var2}

        {(() => {
            let start = new Date()

            console.log("111 start:",start)

            while ((new Date().getTime() - start.getTime()) < 1000) {

            }

            console.log("222 start:",new Date())
        })()}

        <button onClick={() => {setVar2(var2+1)}}>Inc</button>

        <Component3 id="component3" text="Component3"/>
    </div>
}

export default Component2