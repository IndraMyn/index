import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
    return(
        <Fragment>
            <h1>404 NOT FOUND</h1>
            <Link to="/">Back to Home</Link>
        </Fragment>
    )
}

export default NotFoundPage