import React, { createContext, useState } from 'react'

const UserInfoContext = createContext()

function UserInfoProvider(props) {

    const[data, setData]    = useState({
        firstName: 'Indra',
        lastName: 'Mulyawan',
        email: 'indraawan13@gmail.com',
        phone: '0888094912929',
        address: 'Bandung',
        date: '13/07/2002',
        gender: 'L',
        avatar: 'https://www.shareicon.net/data/2017/01/06/868320_people_512x512.png',
        password: '123456',
        login: false,
    })

    return(
        <UserInfoContext.Provider value={[data, setData]}>
            {props.children}
        </UserInfoContext.Provider>
    )
}

export { UserInfoProvider, UserInfoContext }