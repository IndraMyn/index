import React, { Fragment, useState } from 'react'
import { Row, Col, Form, FormGroup, Button, Card, CardBody, CardHeader, CustomInput , Label, Spinner } from 'reactstrap'
import { TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'

function RegisterPage() {
    const [firstName, setFirstName]     = useState('')
    const [lastName, setLastName]       = useState('')
    const [email, setEmail]             = useState('')
    const [address, setAddress]         = useState('')
    const [date, setDate]               = useState('')
    const [gender, setGender]           = useState('')
    const [phone, setPhone]             = useState('')
    const [password, setPassword]       = useState('')
    const [konpass, setKonpass]         = useState('')
    const [btn, setBtn]                 = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setBtn(!btn)
        const data = {
            nama_depan: firstName,
            nama_belakang: lastName,
            email: email,
            alamat: address,
            tanggal_lahir: date,
            jenis_kelamin: gender,
            no_telepon: phone,
            password: konpass
        }

        console.log(data)
    }

    return(
        <Fragment>
            <Row className="mt-large">
                <Col md="12" className="mb-0 mb-lg-5">
                    <Row>
                        <Col xl="6" lg="6" md="12" sm="12" className="mb-5">
                            <img src="https://svgshare.com/i/PLs.svg" className="img-fluid" alt="ilustration" />
                        </Col>
                        <Col xl="6" lg="6" md="12" sm="12">
                            <Card className="shadow card-default">
                                <CardHeader>
                                    <h4 className="text-center">Tokoku</h4>
                                </CardHeader>
                                <CardBody>
                                    <Form onSubmit={handleSubmit}>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <TextField fullWidth required size="small" id="nama-depan" label="Nama Depan" type="text" variant="outlined" value={firstName} onChange={e => setFirstName(e.target.value)} />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <TextField fullWidth required size="small" id="nama-belakang" label="Nama Belakang" type="text" variant="outlined" value={lastName} onChange={e => setLastName(e.target.value)} />
                                                </FormGroup>
                                            </Col>
                                            <Col md={12}>
                                                <FormGroup>
                                                    <TextField fullWidth required size="small" id="email" label="Email" type="email" variant="outlined" value={email} onChange={e => setEmail(e.target.value)} />
                                                </FormGroup>
                                            </Col>
                                            <Col md={12}>
                                                <FormGroup>
                                                    <TextField fullWidth required size="small" id="no-telp" label="No Telepon" type="number" variant="outlined" value={phone} onChange={e => setPhone(e.target.value)} />
                                                </FormGroup>
                                            </Col>
                                            <Col md={12}>
                                                <FormGroup>
                                                    <TextField fullWidth required size="small" id="password" label="Password" type="password" variant="outlined" value={password} onChange={e => setPassword(e.target.value)} />
                                                </FormGroup>
                                            </Col>
                                            <Col md={12}>
                                                <FormGroup>
                                                    <TextField fullWidth required size="small" id="konpass" label="Konfirmasi password" type="password" variant="outlined" value={konpass} onChange={e => setKonpass(e.target.value)} />
                                                </FormGroup>
                                            </Col>
                                            <Col md={12}>
                                                <FormGroup>
                                                    <TextField fullWidth required size="small" id="tgl-lahir" label="Tanggal Lahir" type="date" InputLabelProps={{shrink: true}} variant="outlined" value={date} onChange={e => setDate(e.target.value)} />
                                                </FormGroup>
                                            </Col>
                                            <Col md={12}>
                                                <FormGroup>
                                                    <TextField fullWidth multiline rows={4} required size="small" id="alamat" label="Alamat" type="text" variant="outlined" value={address} onChange={e => setAddress(e.target.value)} />
                                                </FormGroup>
                                            </Col>
                                            <Col md={12}>
                                                <FormGroup>
                                                    <Label>Jenis Kelamin</Label>
                                                    <div>
                                                        <CustomInput id="jenis-kelamin1" name="jenis-kelamin" label="Laki-laki" type="radio" value="L" inline onChange={e => setGender(e.target.value)} />
                                                        <CustomInput id="jenis-kelamin2" name="jenis-kelamin" label="Perempuan" type="radio" value="P" inline onChange={e => setGender(e.target.value)} />
                                                    </div>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <hr />
                                        <FormGroup>
                                        {(btn === true)?
                                            <Button size="lg" className="btn-peach text-white" block disabled><Spinner size="sm" className="mb-1" /> Register</Button>:
                                            <Button size="lg" className="btn-peach text-white" block> Register</Button>}
                                        </FormGroup>
                                        <hr />
                                        <FormGroup>
                                            <Link to="/login" style={{textDecoration: 'none'}}>
                                                <Button className="btn-peach-outline" block outline >Kembali</Button>
                                            </Link>
                                        </FormGroup>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    )
}

export default RegisterPage