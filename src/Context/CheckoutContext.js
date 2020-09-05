import React, { createContext, useState } from 'react'

const CheckoutContext = createContext()

function CheckoutProvider(props) {

    const[item, setItem] = useState([])

    return(
        <CheckoutContext.Provider value={[item, setItem]}>
            {props.children}
        </CheckoutContext.Provider>
    )
}

export { CheckoutProvider, CheckoutContext }