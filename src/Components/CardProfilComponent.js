import React, { Fragment, useState, useContext } from 'react'
import { Row, Col, Card, CardBody, CardHeader, Label, FormGroup, Button, CustomInput } from 'reactstrap'
import { TextField } from '@material-ui/core'
import { UserInfoContext } from '../Context/UserInfoContext'

function CardProfilComponent() {

    const[data, setData]                = useContext(UserInfoContext)

    const [firstName, setFirstName]     = useState(data.firstName)
    const [lastName, setLastName]       = useState(data.lastName)
    const [email, setEmail]             = useState(data.email)
    const [address, setAddress]         = useState(data.address)
    const [date, setDate]               = useState(data.date)
    const [gender, setGender]           = useState(data.gender)
    const [phone, setPhone]             = useState(data.phone)
    const [edit, setEdit]               = useState(false)

    const handleEdit = (e) => {
        e.preventDefault()
        setEdit(!edit)
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        const item = {
            nama_depan: firstName,
            nama_belakang: lastName,
            email: email,
            alamat: address,
            tanggal_lahir: date,
            jenis_kelamin: gender,
            no_telepon: phone
        } 

        setData({...data,
        firstName: firstName,
        lastName: lastName,
        email: email,
        address: address,
        date: date,
        gender: gender,
        phone: phone,
        })

        console.log(item)
    }

    const editProfil = (
        <Fragment>
            <form onSubmit={handleUpdate}>
                <Row>
                    <Col md="6">
                        <FormGroup>
                            <TextField fullWidth required value={firstName} label="Nama Depan" variant="outlined" inputProps={{readOnly: false}} onChange={(e) => setFirstName(e.target.value)} />
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup>
                            <TextField fullWidth required value={lastName} label="Nama Belakang" variant="outlined" inputProps={{readOnly: false}} onChange={(e) => setLastName(e.target.value)} />
                        </FormGroup>
                    </Col>
                    <Col md="12">
                        <FormGroup>
                            <TextField fullWidth required value={email} label="Email" variant="outlined" inputProps={{readOnly: false}} onChange={(e) => setEmail(e.target.value)} />
                        </FormGroup>
                    </Col>
                    <Col md="12">
                        <FormGroup>
                            <TextField fullWidth required value={phone} label="No Telepon" variant="outlined" inputProps={{readOnly: false}} onChange={(e) => setPhone(e.target.value)} />
                        </FormGroup>
                    </Col>
                    <Col md="12">
                        <FormGroup>
                            <TextField fullWidth required multiline value={address} label="Alamat" variant="outlined" inputProps={{readOnly: false}} onChange={(e) => setAddress(e.target.value)} />
                        </FormGroup>
                    </Col>
                    <Col md="12">
                        <FormGroup>
                            <TextField fullWidth required value={date} label="Tanggal Lahir" variant="outlined" inputProps={{readOnly: false}} onChange={(e) => setDate(e.target.value)} />
                        </FormGroup>
                    </Col>
                    <Col md="12">
                        <FormGroup>
                            <CustomInput required id="jenis-kelamin1" name="jenis-kelamin" label="Laki-laki" type="radio" value="L" inline onChange={e => setGender(e.target.value)} checked={(gender === 'L')?true:false} />
                            <CustomInput required id="jenis-kelamin2" name="jenis-kelamin" label="Perempuan" type="radio" value="P" inline onChange={e => setGender(e.target.value)} checked={(gender === 'P')?true:false} />
                        </FormGroup>
                    </Col>
                    <Col md="12">
                        <div className="form-inline">
                            <FormGroup className="mr-2">
                                <Button className="btn-brown">Simpan</Button>
                            </FormGroup>
                            <FormGroup>
                                <Button className="btn-brown-outline" outline onClick={handleEdit} >Batal</Button>
                            </FormGroup>
                        </div>
                    </Col>
                </Row>
            </form>
        </Fragment>
    )

    const profil = (
        <Fragment>
            <Row>
                <Col md="6">
                    <FormGroup>
                        <Label><small>Nama Depan</small></Label>
                        <TextField fullWidth value={firstName}  inputProps={{readOnly: true}} />
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                        <Label><small>Nama Belakang</small></Label>
                        <TextField fullWidth value={lastName}  inputProps={{readOnly: true}} />
                    </FormGroup>
                </Col>
                <Col md="12">
                    <FormGroup>
                        <Label><small>Email</small></Label>
                        <TextField fullWidth value={email}  inputProps={{readOnly: true}} />
                    </FormGroup>
                </Col>
                <Col md="12">
                    <FormGroup>
                        <Label><small>No Telepon</small></Label>
                        <TextField fullWidth value={phone}  inputProps={{readOnly: true}} />
                    </FormGroup>
                </Col>
                <Col md="12">
                    <FormGroup>
                        <Label><small>Alamat</small></Label>
                        <TextField fullWidth multiline value={address}  inputProps={{readOnly: true}} />
                    </FormGroup>
                </Col>
                <Col md="12">
                    <FormGroup>
                        <Label><small>Tanggal Lahir</small></Label>
                        <TextField fullWidth value={date}  inputProps={{readOnly: true}} />
                    </FormGroup>
                </Col>
                <Col md="12">
                    <FormGroup>
                        <Label><small>Jenis Kelamin</small></Label>
                        <TextField fullWidth value={(gender === 'L')?'Laki-laki':'Perempuan'}  inputProps={{readOnly: true}} />
                    </FormGroup>
                </Col>
                <Col md="12">
                    <FormGroup>
                        <Button className="btn-brown" onClick={handleEdit} >Edit</Button>
                    </FormGroup>
                </Col>
            </Row>
        </Fragment>
    )

    return(
        <Fragment>
            <Card className="card-default">
                <CardHeader>
                    <h3>Profil Saya</h3>
                </CardHeader>
                <CardBody>
                    {(edit === true)?editProfil:profil}
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default CardProfilComponent