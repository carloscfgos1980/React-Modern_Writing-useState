import React, { useState, useEffect } from "react"
import randomcolor from "randomcolor"

// ramdomcolor is a function imported from npm package
function App() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")

    //we can useEfect as many time as we need, in this case we separate the functions because we want that the interval only runs once that is why it is empty[]
    useEffect(() => {
        const intervalId = setInterval(() => {
            // setCount(prevCount => prevCount + 1)
        }, 1000)
        // this return and the arrow function is in order to clean up the STATE, it would be like the cycleefect of componentWillUnmount
        return () => clearInterval(intervalId)
    }, [])

    // in the useEffect function we need to specify when it changes, in this example, the color change along the counting so at the end we place the variable in [], like this:
    useEffect(() => {
        setColor(randomcolor())
    }, [count])

    return (
        <div>
            <h1 style={{ color: color }}>{count}</h1>
        </div>
    )
}

export default App
