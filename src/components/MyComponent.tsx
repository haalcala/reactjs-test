import { useState } from "react"

const MyComponent = (props:any) => {
    const {var1, text} = props

    const [var2, setVar2] = useState(0)
    
    console.log(`Rendering ${text}`)

    return <div>
        {text} var1: {var1} {var2}

        {(() => {
            let start = new Date()

            console.log(`${text} ... 111 start:`,start)

            while ((new Date().getTime() - start.getTime()) < 1000) {

            }

            console.log(`${text} ... 222 start:`,new Date())

            console.log(`${text} ...`)
        })()}

        <button onClick={() => {
        setVar2(var2+1)
      }}>Inc</button>
    </div>
}

export default MyComponent