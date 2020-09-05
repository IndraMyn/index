import React, { Fragment } from 'react'
import { Row, Col, Card, CardBody, CardHeader, Form, FormGroup, Label, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import FormatRupiah from '../Tools/FormatRupiahTool'
import { Link } from 'react-router-dom'

function CardCartComponent(props) {
    
    return(
        <Fragment>
            <Card style={{borderRadius: '10px'}}>
                <CardHeader style={{background: '#ffffff', border: 'none'}}>
                    <Row>
                        <Col md="6" className="col-6">
                            <h5>Judul</h5>
                        </Col>
                        <Col md="6" className="text-right col-6">
                            <h5>{FormatRupiah(props.price, 'Rp. ')}</h5>
                        </Col>
                    </Row>
                </CardHeader>
                <Row>
                    <Col md="4" className="col-12">
                        <img src={props.thumbnail} alt="thumbnail" className="text-center img-thumbnail mt-md-3 ml-md-3 img-cart" />
                    </Col>
                    <Col md="8" className="col-12">
                        <CardBody>
                            <Row>
                                <Col md="12">
                                    <Form inline>
                                        <FormGroup className="mr-auto">
                                            <Label><small><b>Qty</b></small></Label>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label><small>1</small></Label>
                                        </FormGroup>
                                    </Form>
                                </Col>
                                <Col md="12">
                                    <hr/>
                                </Col>
                                <Col md="12">
                                    <Form inline>
                                        <FormGroup className="mr-auto">
                                            <Label><small><b>Varian</b></small></Label>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label><small><b>Original</b></small></Label>
                                        </FormGroup>
                                    </Form>
                                </Col>
                                <Col md="12">
                                    <hr/>
                                </Col>
                                <Col md="12">
                                    <Form inline>
                                        <FormGroup className="mr-auto">
                                            <Label><small><b>Total</b></small></Label>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label><small><b>{FormatRupiah(props.price, 'Rp. ')}</b></small></Label>
                                        </FormGroup>
                                    </Form>
                                </Col>
                                <Col md="12">
                                    <hr/>
                                </Col>
                            </Row>
                            <Form inline>
                                <FormGroup className="mr-md-2 mr-auto">
                                    <Link to="/order"><Button color="success" size="sm" onClick={(e) => props.buy(e, 'one', 1)}><FontAwesomeIcon icon={faDollarSign} /> Beli </Button></Link>
                                </FormGroup>
                                <FormGroup>
                                    <Button color="danger" size="sm" onClick={(e) => props.delete(e, 'one', 1)}><FontAwesomeIcon icon={faTrash} /> Hapus </Button>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Col>
                </Row>
            </Card>
        </Fragment>
    )
}

export default CardCartComponent