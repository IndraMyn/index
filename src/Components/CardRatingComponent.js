import React, { Fragment } from 'react'
import { Rating } from '@material-ui/lab'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { Card, CardHeader, CardBody, Row, Col, Progress, Label, FormGroup } from 'reactstrap'

function CardRatingProduct(props) {
    return(
        <Fragment>
            <Card className="card-default shadow">
                <CardHeader>
                    <h3>Penilaian</h3>
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col md="4">
                            <FormGroup className="text-center mt-3">
                                <h1>4.0</h1>
                                <Rating style={{color: '#ff3d47'}} defaultValue={4} precision={1} icon={<FavoriteIcon />} readOnly />
                                <p><small>100 Orang</small></p>
                            </FormGroup>
                        </Col>
                        <Col md="8">
                            <table>
                                <tbody>
                                    <tr>
                                        <td><Label>80</Label></td>
                                        <td style={{width: '100%'}}><Progress value="80" style={{borderRadius: '20px'}}  ></Progress></td>
                                    </tr>
                                    <tr>
                                        <td><Label>10</Label></td>
                                        <td style={{width: '100%'}}><Progress value="10" style={{borderRadius: '20px'}}  ></Progress></td>
                                    </tr>
                                    <tr>
                                        <td><Label>5</Label></td>
                                        <td style={{width: '100%'}}><Progress value="5" style={{borderRadius: '20px'}}  ></Progress></td>
                                    </tr>
                                    <tr>
                                        <td><Label>3</Label></td>
                                        <td style={{width: '100%'}}><Progress value="3" style={{borderRadius: '20px'}}  ></Progress></td>
                                    </tr>
                                    <tr>
                                        <td><Label>2</Label></td>
                                        <td style={{width: '100%'}}><Progress value="2" style={{borderRadius: '20px'}}  ></Progress></td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default CardRatingProduct