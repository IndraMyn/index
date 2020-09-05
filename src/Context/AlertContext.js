import React, { createContext, useState } from 'react'

const AlertContext = createContext()

function AlertProvider(props) {

    const[alert, setAlert] = useState({
        status: false,
        vertical: 'top',
        horizontal: 'center',
        color: 'success',
        message: 'hei bro'
    })

    return(
        <AlertContext.Provider value={[alert, setAlert]}>
            {props.children}
        </AlertContext.Provider>
    )
}

export { AlertContext, AlertProvider }