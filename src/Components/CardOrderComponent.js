import React, { Fragment, useState, useContext } from 'react'
import { Card, CardHeader, CardBody, Form, FormGroup, Label, Button, Row, Col } from 'reactstrap'
import { Select, MenuItem, TextField } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faCartPlus, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { AlertContext } from '../Context/AlertContext'
import AlertComponent from './AlertComponent'
import FormatRupiah from '../Tools/FormatRupiahTool'
import { Link } from 'react-router-dom'
import { CheckoutContext } from '../Context/CheckoutContext'


function CardOrderComponent(props) {

    const [varian, setVarian]               = useState('')
    const [count, setCount]                 = useState(1)
    const [cart, setCart]                   = useState(false)
    const [alert, setAlert]                 = useContext(AlertContext)
    const [order, setOrder]                 = useContext(CheckoutContext)

    const handlePlus = (e) => {
        e.preventDefault()
        setCount(count + 1)
    }

    const handleMinus = (e) => {
        e.preventDefault()
        if (count > 1 ) setCount(count - 1)
    }

    const handleBuy = (e) => {
        if (order !== null) setOrder(null)
        setOrder([...order, {id: 2, title: 'Bolu Cokelat', price: 100000, qyt: 1}])
    }

    const handleCart = (e) => {
        e.preventDefault()
        setCart(!cart)
        setAlert({...alert, status: true, message: 'Berhasil ditambahkan ke keranjang!', type: 'success'})
    }


    return(
        <Fragment>
            <Card className="card-default shadow">
                <CardHeader>
                    <h3>Order</h3>
                </CardHeader>
                <CardBody>
                    <Form inline>
                        <FormGroup className="mr-auto">
                            <Label> Harga </Label>
                        </FormGroup>
                        <FormGroup>
                            <h4>{FormatRupiah(props.price, 'Rp. ')}</h4>
                        </FormGroup>
                    </Form>
                    <hr />
                    <Form inline>
                        <FormGroup className="mr-auto">
                            <Label> Varian </Label>
                        </FormGroup>
                        <FormGroup>
                            <Select value={varian} onChange={e => setVarian(e.target.value)}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Original</MenuItem>
                                <MenuItem value={20}>Kering</MenuItem>
                            </Select>
                        </FormGroup>
                    </Form>
                    <hr />
                    <Form>
                        <Row>
                            <Col className="col-6">
                                <FormGroup>
                                    <Label>Qty</Label>
                                </FormGroup>
                            </Col>
                            <Col className="col-6 text-right">
                                <FormGroup>
                                    <Button color="success" size="sm" onClick={handleMinus}> <FontAwesomeIcon icon={faMinus} /> </Button>
                                    <TextField type="number" className="input-center" size="small" value={count} InputProps={{readOnly: true}} style={{width: '25%'}} />
                                    <Button color="success" size="sm" onClick={handlePlus}> <FontAwesomeIcon icon={faPlus} /> </Button>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                    <hr />
                    <Form inline>
                        <FormGroup className="mr-2">
                            <Link to="/order"><Button onClick={handleBuy} color="success"> <FontAwesomeIcon icon={faMoneyBill} /> Beli </Button></Link>
                        </FormGroup>
                        <FormGroup>
                            {
                                (cart === false)?
                                <Button onClick={handleCart} className="btn-brown"> <FontAwesomeIcon icon={faCartPlus} /> Karungin </Button>:
                                <Link to="/cart"><Button className="btn-brown"> <FontAwesomeIcon icon={faCartPlus} /> Lihat di keranjang </Button></Link>
                            }
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
            {/* Alert */}
            <AlertComponent />
        </Fragment>
    )
}


export default CardOrderComponent