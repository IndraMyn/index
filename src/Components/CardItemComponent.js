import React, { Fragment, useState, useContext } from 'react'
import '../Style/CardStyle.css'
import { Card, CardBody, FormGroup, Form, Label, Button } from 'reactstrap'
import { Rating } from '@material-ui/lab'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faDollarSign, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { AlertContext } from '../Context/AlertContext'
import AlertComponent from './AlertComponent'
import FormatRupiah from '../Tools/FormatRupiahTool'
import { CheckoutContext } from '../Context/CheckoutContext'

function CardItemComponent(props) {

    const[cart, setCart]        = useState(false)
    const[alert, setAlert]      = useContext(AlertContext)
    const[order, setOrder]      = useContext(CheckoutContext)

    const handleCart = (e) => {
        e.preventDefault()
        setCart(!cart)
        setAlert({...alert, status: true, message: 'Berhasil ditambahkan ke keranjang!', type: 'success'})
    }

    const handleBuy = (e) => {
        if (order !== null) setOrder(null)
        setOrder([...order, {id: 2, title: 'Bolu Cokelat', price: 100000, qyt: 1}])
    }

    return(
        <Fragment>
            <Card className="card-shadow">
                    <Link to={`/product/${props.id}`} className="text-center">
                        <img src={props.thumbnail}  style={{maxHeight: '180px', width: '100%'}} alt="product" />
                    </Link>
                <CardBody>
                    <Form inline>
                        <FormGroup className="mr-auto">
                            <h4>{props.title}</h4>
                        </FormGroup>
                        <FormGroup>
                            <Rating size="small" style={{color: '#ff3d47'}} defaultValue={4} precision={1} icon={<FavoriteIcon fontSize="small"/>} readOnly/>
                        </FormGroup>
                    </Form>
                    <Form inline onSubmit={e => e.preventDefault()}>
                        <FormGroup className="mr-auto">
                            <Label>{FormatRupiah(props.price, 'Rp. ')}</Label>
                        </FormGroup>
                        <FormGroup className="mr-2">
                            <Link to="/order"><Button color="success" size="sm" onClick={handleBuy}> <FontAwesomeIcon icon={faDollarSign} /> </Button></Link>
                        </FormGroup>
                        <FormGroup>
                            {
                                (cart === false)?
                                <Button size="sm" outline className="btn-brown-outline" onClick={handleCart} > <FontAwesomeIcon icon={faCartPlus} /> </Button>:
                                <Link to="/cart"><Button size="sm" outline className="btn-brown-outline" onClick={() => setAlert({...alert, status: false})} ><FontAwesomeIcon icon={faCheckCircle} /></Button></Link>
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

export default CardItemComponent