import React, { Fragment, useContext } from 'react'
import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import { AlertContext } from '../Context/AlertContext'

function AlertComponent(props) {

    const[alert, setAlert] = useContext(AlertContext)
    const config           = {
        vertical: (props.vertical === undefined)?'top':props.vertical,
        horizontal: (props.horizontal === undefined)?'center':props.horizontal,
    }

    const handleClose = () => {
    
        setAlert({...alert, status: false});
    }

    const { status, message, type }    = alert

    return(
        <Fragment>
            <Snackbar open={status} autoHideDuration={3000} onClose={handleClose} anchorOrigin={config} >
                <Alert onClose={handleClose} severity={type} >
                    {message}
                </Alert>
            </Snackbar>
        </Fragment>
    )
}

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default AlertComponent