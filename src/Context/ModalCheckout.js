import React, { createContext, useState } from 'react'

const ModalCheckoutContext = createContext()

function ModalCheckoutProvider(props) {

    const[toggle, setToggle] = useState(false)

    return(
        <ModalCheckoutContext.Provider value={[toggle, setToggle]}>
            {props.children}
        </ModalCheckoutContext.Provider>
    )
}

export { ModalCheckoutContext, ModalCheckoutProvider }