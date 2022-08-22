import React, { Component } from "react"

class App extends Component {
    // Change to use class properties
    state = { firstName: "" }
    /*
    This also wont be longer necessary. It will be just as above
      constructor() {
        super()
        this.state = {
            firstName: ""
        }
    }

    */

    // Change to use arrow functions so the this bind is not longer necessary
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    /*
    This method will be obsolete and the previous method will be the one in use
        handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    */

    render() {
        return (
            <main>
                <form>
                    <input
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        placeholder="First Name"
                    />
                </form>
                <h1>{this.state.firstName}</h1>
            </main>
        )
    }
}

export default App


/**
 * Other modern/advanced React features/topics to learn:
 * 
 * Official React Context API - https://reactjs.org/docs/context.html
 * Error Boundaries - https://reactjs.org/docs/error-boundaries.html
 * render props - https://reactjs.org/docs/render-props.html
 * Higher Order Components - https://reactjs.org/docs/higher-order-components.html
 * React Router - https://reacttraining.com/react-router/core/guides/philosophy
 * React Hooks - https://reactjs.org/docs/hooks-intro.html
 * React lazy, memo, and Suspense - https://reactjs.org/blog/2018/10/23/react-v-16-6.html
 */