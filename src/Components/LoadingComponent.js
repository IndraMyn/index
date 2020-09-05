import React, { Fragment } from 'react'
import '../App.css'
import Logo from '../logo.svg'

function LoadingComponent() {
    return(
        <Fragment>
            <div className="App">
                <img src={Logo} className="App-logo" alt="Loading..." />
            </div>
        </Fragment>
    )
}

export default LoadingComponent