import React, { Fragment, useState, useContext } from 'react'
import { Card, CardBody, Button, FormGroup } from 'reactstrap'
import { TextField } from '@material-ui/core'
import { UserInfoContext } from '../Context/UserInfoContext'

function CardPasswordComponent() {

    const[edit, setEdit]            = useState(false)
    const[data, setData]            = useContext(UserInfoContext)
    const[password, setPassword]    = useState('')
    const[newpass, setNewpass]      = useState('')
    const[konpass, setKonpass]      = useState('')

    const handleEdit = (e) => {
        e.preventDefault()
        setEdit(!edit)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (data.password === password){
            
            if (newpass === konpass) {
                setData({...data, password: konpass})
                console.log("sukses");
            } else {
                console.log("password yang dimasukkan tidak sama");
            }

        } else {
            console.log("password yang anda masukan salah")
        }
    }

    const formEdit = (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <TextField fullWidth value={password} onChange={(e) => setPassword(e.target.value)} size="small" type="password" label="password lama" variant="outlined" required />
                </FormGroup>
                <FormGroup>
                    <TextField helperText="Incorrect entry." fullWidth value={newpass} onChange={(e) => setNewpass(e.target.value)} size="small" type="password" label="password baru" variant="outlined" required />
                </FormGroup>
                <FormGroup>
                    <TextField fullWidth value={konpass} onChange={(e) => setKonpass(e.target.value)} size="small" type="password" label="ulangi password baru" variant="outlined" required />
                </FormGroup>
                <div className="form-inline">
                    <FormGroup className="mr-auto">
                        <Button block>Simpan</Button>
                    </FormGroup>
                    <FormGroup>
                        <Button onClick={handleEdit} block>Batal</Button>
                    </FormGroup>
                </div>
            </form>
        </Fragment>
    )

    const btnEdit = (
        <Fragment>
            <Button onClick={handleEdit} block>Ganti Password</Button>
        </Fragment>
    )

    return(
        <Fragment>
            <Card>
                <CardBody>
                    {(edit === true)?formEdit:btnEdit}
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default CardPasswordComponent