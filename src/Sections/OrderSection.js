import React, { Fragment, useState, useEffect } from 'react'
import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label } from 'reactstrap'
import { TextField, Select, MenuItem } from '@material-ui/core'
import CardCheckoutComponent from '../Components/CardCheckoutComponent'
import { Autocomplete } from '@material-ui/lab'
import Axios from 'axios'

function OrderSection() {

    const [citys, setCity]                  = useState([])
    const [destination, setDestination]     = useState(null)
    const [name, setName]                   = useState('')
    const [phone, setPhone]                 = useState('')
    const [courier, setCourier]             = useState('')
    const [weight, setWeight]               = useState('')
    const [postal, setPostal]               = useState('')
    const [address, setAddress]             = useState('')

    useEffect(() => {
        Axios.get('http://192.168.1.10:8000/ongkir/kota')
        .then(res => {
            setCity(res.data.data.rajaongkir.results)
        })
    },[])

    const handleDestination = (e) => {
        const filterData = citys.filter(city => city.city_name === e.target.value)
        filterData.map((city) => setDestination(city.city_id))
        console.log(destination)
    }

    // const handleCost = (e) => {
    //     e.preventDefault()
    //     const data = {
    //         origin: 107,
    //         destination: destination,
    //         weight: 500, 
    //         courier: 'tiki'
    //     }
    //     Axios.post('http://192.168.1.10:8000/ongkir/cek', data)
    //     .then(res => {
    //         console.log(res.data)
    //     })
    // }

    return(
        <Fragment>
            <Row>
                <Col md="8">
                    <Card className="card-default shadow">
                        <CardHeader>
                            <h3>Order</h3>
                        </CardHeader>
                        <CardBody>
                            <Form>
                                <Row>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label>Nama Penerima</Label>
                                            <TextField size="small" fullWidth variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label>No Telepon Penerima</Label>
                                            <TextField size="small" fullWidth variant="outlined" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                        </FormGroup>
                                    </Col>
                                    <Col md="12">
                                        <Label>Kota/Kabupaten</Label>
                                        <FormGroup>
                                            <Autocomplete
                                            id="seacrh-city"
                                            options={citys.map((city) => city.city_name)}
                                            renderInput={(params) => (
                                            <TextField fullWidth variant="outlined" {...params} onSelect={handleDestination} />
                                            )}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md="12">
                                        <FormGroup>
                                            <Label>Kurir</Label>
                                            <Select fullWidth variant="outlined" value={courier} onChange={(e) => setCourier(e.target.value)}>
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value="jne">JNE</MenuItem>
                                                <MenuItem value="tiki">TIKI</MenuItem>
                                                <MenuItem value="posi">POS Indonesia</MenuItem>
                                            </Select>
                                        </FormGroup>
                                    </Col>
                                    <Col md="12">
                                        <FormGroup>
                                            <Label>Berat</Label>
                                            <TextField size="small" fullWidth variant="outlined" value={weight} onChange={(e) => setWeight(e.target.value)}/>
                                        </FormGroup>
                                    </Col>
                                    <Col md="12">
                                        <FormGroup>
                                            <Label>Kode Pos</Label>
                                            <TextField size="small" fullWidth variant="outlined" value={postal} onChange={(e) => setPostal(e.target.value)} />
                                        </FormGroup>
                                    </Col>
                                    <Col md="12">
                                        <FormGroup>
                                            <Label>Alamat Lengkap</Label>
                                            <TextField size="small" fullWidth variant="outlined" multiline value={address} onChange={(e) => setAddress(e.target.value)} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4">
                    <CardCheckoutComponent />
                </Col>
            </Row>
        </Fragment>
    )
}

export default OrderSection