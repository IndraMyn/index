import React, { Fragment, useState, useEffect, useContext } from 'react'
import { Row, Col, Card, CardHeader, CardBody, CardFooter,Button, Label, Form, FormGroup } from 'reactstrap'
import CardCartComponent from '../Components/CardCartComponent'
import FormatRupiah from '../Tools/FormatRupiahTool'
import { AlertContext } from '../Context/AlertContext'
import AlertComponent from '../Components/AlertComponent'
import { Link } from 'react-router-dom'
import { CheckoutContext } from '../Context/CheckoutContext'

function CartSection() {

    const [items, setItems]     = useState('null')
    const [alert, setAlert]     = useContext(AlertContext)
    const [order, setOrder]     = useContext(CheckoutContext)

    useEffect(() => {
        setItems('null')
    },[])

    const handleDelete = (e, type, id = null) => {
        e.preventDefault()
        setAlert({...alert, status: true, color: 'success', message: 'Berhasil dihapus!'})
    }

    const handleBuy = (e, type, id = null) => {

        if (order.length > 1) setOrder([])

        if (type === 'all' && id === null) {
            setOrder([{id: 1, title: 'Bolu Cokelat', price: 100000, qyt: 1}, {id: 2, title: 'Bolu Cokelat', price: 100000, qyt: 1}, {id: 3, title: 'Bolu Cokelat', price: 100000, qyt: 1}])
        } else {
            const data = [{id: 1, title: 'Bolu Cokelat', price: 100000, qyt: 1}, {id: 2, title: 'Bolu Cokelat', price: 100000, qyt: 1}, {id: 3, title: 'Bolu Cokelat', price: 100000, qyt: 1}]
            const filterData = data.filter(item => item.id === id )
            setOrder(filterData)
        }
        
    }

    const emptyCart = (
        <Fragment>
            <Row>
                <Col xl="12" lg="12" md="12" >
                    <Card className="shadow" style={{borderRadius: '10px'}}>
                        <CardHeader className="text-white" style={{background: '#964b00', borderTopRightRadius: '10px', borderTopLeftRadius: '10px'}}>
                            <h3>Keranjang</h3>
                        </CardHeader>
                        <CardBody className="text-center">
                            <h4>Keranjang anda kosong :)</h4>
                            <img src="https://svgshare.com/i/PL_.svg" alt="ilustration" className="img-fluid"/>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )

    if (items === null || items.length <= 0) {
        return emptyCart
    }

    return(
        <Fragment>
            <Row>
                <Col xl="12" lg="12" md="12" >
                    <Card className="shadow" style={{borderRadius: '10px'}}>
                        <CardHeader className="text-white" style={{background: '#964b00', borderTopRightRadius: '10px', borderTopLeftRadius: '10px'}}>
                            <h3>Keranjang</h3>
                        </CardHeader>
                        <CardBody>
                            <CardCartComponent buy={handleBuy} delete={handleDelete} price="100000" thumbnail="/assets/images/sample.jpg" />
                            <br />
                            <CardCartComponent buy={handleBuy} delete={handleDelete} price="100000" thumbnail="/assets/images/sample2.jpg" />
                        </CardBody>
                        <CardFooter>
                            <Row>
                                <Col md="12">
                                    <Form inline>
                                        <FormGroup className="mr-auto">
                                            <Label>Total</Label>
                                        </FormGroup>
                                        <FormGroup>
                                            <h4>{FormatRupiah(200000, 'Rp. ')}</h4>
                                        </FormGroup>
                                    </Form>
                                </Col>
                                <Col md="12">
                                    <hr/>
                                </Col>
                                <Col md="12">
                                    <Form inline>
                                        <FormGroup className="mr-auto mr-lg-2 ml-lg-auto">
                                            <Link to="/order">
                                                <Button size="sm" color="success" onClick={(e) => handleBuy(e, 'all')}>Beli Semua</Button>
                                            </Link>
                                        </FormGroup>
                                        <FormGroup>
                                            <Button size="sm" color="danger" onClick={(e) => handleDelete(e, 'all')}>Hapus Semua</Button>
                                        </FormGroup>
                                    </Form>
                                </Col>
                            </Row>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
            {/* Alert */}
            <AlertComponent />
        </Fragment>
    )
}

export default CartSection