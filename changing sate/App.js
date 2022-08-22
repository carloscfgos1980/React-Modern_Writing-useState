import React, { useState } from "react"


// We can create as many useSates as we want if we need them. The value within useState() is the initial value. We can place and object and the access to the value we need with spread notation also or just create variable useState like the example bellow
function App() {
    const [count, setCount] = useState(0)
    const [answer, setAnswer] = useState("Yes")

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0,
//             answer: "Yes"
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button>Change!</button>
//             </div>
//         )
//     }
// }

export default App
