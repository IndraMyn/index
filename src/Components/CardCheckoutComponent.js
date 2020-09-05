import React, { Fragment, useContext, useState } from 'react'
import {  Card, CardHeader, CardBody, Form, FormGroup, Label, Button } from 'reactstrap'
import { TextField } from '@material-ui/core'
import { CheckoutContext } from '../Context/CheckoutContext'
import { Button as Btn } from '@material-ui/core'
import FormatRupiah from '../Tools/FormatRupiahTool'
import { Link } from 'react-router-dom'

function CardCheckoutComponent() {

    const [items, setItem]      = useContext(CheckoutContext)
    const [voucher, setVoucher] = useState('')

    const handleCancel = () => {
        setItem([])
    }

    const handleVoucher = (e) => {
        e.preventDefault()
        const data = {
            id_user: 1,
            voucher: voucher
        }

        console.log(data)
    }

    return(
        <Fragment>
            <Card className="card-default shadow">
                <CardHeader>
                    <h3>Checkout</h3>
                </CardHeader>
                <CardBody>
                    {
                        items.map((item, i) => 
                            <Fragment key={i}>
                                <Form inline>
                                    <FormGroup className="mr-auto">
                                        <Label>{item.title} (×{item.qyt})</Label>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>{FormatRupiah(item.price, 'Rp. ')}</Label>
                                    </FormGroup>
                                </Form>
                            </Fragment>
                        )
                    }
                    <hr />
                    <Form inline>
                        <FormGroup className="mr-auto">
                            <TextField size="small" variant="outlined" label="Voucher (opsional)" value={voucher} onChange={(e) => setVoucher(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Btn variant="contained" color="primary" onClick={handleVoucher}>Cek</Btn>
                        </FormGroup>
                    </Form>
                    <hr />
                    <Form inline>
                        <FormGroup className="mr-auto">
                            <Label>Ongkir</Label>
                        </FormGroup>
                        <FormGroup>
                            <Label>{FormatRupiah(6000, 'Rp. ')}</Label>
                        </FormGroup>
                    </Form>
                    <hr />
                    <Form inline>
                        <FormGroup className="mr-auto">
                            <Label>Total</Label>
                        </FormGroup>
                        <FormGroup>
                            <Label> {FormatRupiah(106000, 'Rp. ')} </Label>
                        </FormGroup>
                    </Form>
                    <hr />
                    <Form inline>
                        <FormGroup className="mr-auto">
                            <Button className="btn-brown">Lanjut</Button>
                        </FormGroup>
                        <FormGroup>
                            <Link to="/cart"><Button className="btn-peach" onClick={handleCancel}>Batal</Button></Link>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default CardCheckoutComponent