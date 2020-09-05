import React, { Fragment } from 'react'
import { Skeleton } from '@material-ui/lab'
import { Row, Col } from 'reactstrap'

function SkeletonCard() {
    return(
        <Fragment>
            <Row>
                <Col md="12" className="col-12">
                    <Skeleton variant="rect" height={200}  />
                </Col>
                <Col md="12" className="col-12">
                    <Skeleton variant="text" height={50} />
                </Col>
                <Col md="6" className="col-6">
                    <Skeleton variant="text" height={50} />
                </Col>
                <Col md="3" className="col-3">
                    <Skeleton variant="circle" width={40} height={40} />
                </Col>
                <Col md="3" className="col-3">
                    <Skeleton variant="circle" width={40} height={40} />
                </Col>
             </Row>
        </Fragment>
    )
}

function SkeletonBanner() {
    return(
        <Fragment>
            <Skeleton variant="rect" height={300}  />
        </Fragment>
    )
}

function SkeletonBS() {
    return(
        <Fragment>
            <Row>
                <Col className="col-12">
                    <Skeleton variant="text" height={50} />
                </Col>
                <Col className="col-6">
                    <Skeleton variant="text" height={200} />
                </Col>
                <Col className="col-6">
                    <Skeleton variant="text" height={200} />
                </Col>
                <Col className="col-6 offset-4">
                    <div className="form-inline">
                        <div className="mr-2">
                            <Skeleton variant="circle" width={20} height={20} />
                        </div>
                        <div className="mr-2">
                            <Skeleton variant="circle" width={20} height={20} />
                        </div>
                        <div className="mr-2">
                            <Skeleton variant="circle" width={20} height={20} />
                        </div>
                        <div className="mr-2">
                            <Skeleton variant="circle" width={20} height={20} />
                        </div>
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
}

function SkeletonSearch() {
    return(
        <Fragment>
            <Row>
                <Col className="col-3">
                    <Skeleton variant="text" height={100} />
                </Col>
                <Col className="col-3">
                    <Skeleton variant="text" height={100} />
                </Col>
                <Col className="col-3">
                    <Skeleton variant="text" height={100} />
                </Col>
                <Col className="col-3">
                    <div className="mt-3">
                        <Skeleton variant="circle" width={70} height={70} />
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
}

export { SkeletonCard, SkeletonBanner, SkeletonBS, SkeletonSearch }