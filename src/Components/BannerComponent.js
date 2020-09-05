import React, { Fragment } from 'react'
import { UncontrolledCarousel } from 'reactstrap'

function BannerComponent() {
    
    const items = [
        {
            src: 'https://i.ibb.co/f8yr1B9/banner.jpg',
            altText: '',
            caption: '',
            header: '',
            key: '1'
        },
        {
            src: 'https://i.ibb.co/f8yr1B9/banner.jpg',
            altText: '',
            caption: '',
            header: '',
            key: '2'
        }
    ]
    
    return(
        <Fragment>
            <UncontrolledCarousel items={items} />
        </Fragment>
    )
}

export default BannerComponent