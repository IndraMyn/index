import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import CardProfilComponent from '../Components/CardProfilComponent'
import CardAvatarComponent from '../Components/CardAvatarComponent'
import CardPasswordComponent from '../Components/CardPasswordComponent'

function ProfilSection() {
    return(
        <Fragment>
            <Row>
                <Col md="4" className="mb-3">
                    <Row>
                        <Col md="12" className="mb-3">
                            <CardAvatarComponent />
                        </Col>
                        <Col md="12">
                            <CardPasswordComponent />
                        </Col>
                    </Row>
                </Col>
                <Col md="8">
                    <CardProfilComponent />
                </Col>
            </Row>
        </Fragment>
    )
}

export default ProfilSection