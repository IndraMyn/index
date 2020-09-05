import React, { Fragment, useContext } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label } from 'reactstrap'
import { TextField, Button as Btn } from '@material-ui/core'
import { ModalCheckoutContext } from '../Context/ModalCheckout'

function ModalCheckoutComponent() {

    const[toggle, setToggle]  = useContext(ModalCheckoutContext)

    const handleToggle = () => setToggle(!toggle)

    return(
        <Fragment>
            <Modal isOpen={toggle} toggle={handleToggle}>
                <ModalHeader toggle={handleToggle}>Checkout</ModalHeader>
                <ModalBody>
                    <Form inline>
                        <FormGroup className="mr-auto">
                            <Label>Harga</Label>
                        </FormGroup>
                        <FormGroup>
                            <Label>Rp. 100000</Label>
                        </FormGroup>
                    </Form>
                    <hr />
                    <Form inline>
                        <FormGroup className="mr-auto">
                            <Label>Qty</Label>
                        </FormGroup>
                        <FormGroup>
                            <Label>1</Label>
                        </FormGroup>
                    </Form>
                    <hr />
                    <Form inline>
                        <FormGroup className="mr-auto">
                            <TextField size="small" variant="outlined" label="Voucher (opsional)"/>
                        </FormGroup>
                        <FormGroup>
                            <Btn variant="contained" color="primary">Cek</Btn>
                        </FormGroup>
                    </Form>
                    <hr />
                    <Form inline>
                        <FormGroup className="mr-auto">
                            <Label>Ongkir</Label>
                        </FormGroup>
                        <FormGroup>
                            <Label>Rp. 6000</Label>
                        </FormGroup>
                    </Form>
                    <hr />
                    <Form inline>
                        <FormGroup className="mr-auto">
                            <Label>Total</Label>
                        </FormGroup>
                        <FormGroup>
                            <Label>Rp. 106000</Label>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleToggle}>Lanjut</Button>{' '}
                    <Button color="secondary" onClick={handleToggle}>Batal</Button>
                </ModalFooter>
            </Modal>
        </Fragment>
    )
}

export default ModalCheckoutComponent