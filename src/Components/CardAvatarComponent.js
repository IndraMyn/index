import React, { Fragment, useState } from 'react'
import { Button, Card, CardBody, FormGroup } from 'reactstrap'
import { TextField } from '@material-ui/core'

function CardAvatarComponent() {

    const [avatar, setAvatar]  = useState('')
    const [edit, setEdit]      = useState(false)

    const handleEdit = (e) => {
        e.preventDefault()
        setEdit(!edit)
        setAvatar('')
    }

    const handleUpdate = (e) => {
        e.preventDefault()
        console.log(avatar)
    }

    const editForm = (
        <Fragment>
            <form onSubmit={handleUpdate}>
                <FormGroup>
                    <TextField required type="file" value={avatar} onChange={(e) => setAvatar(e.target.value)} variant="outlined" />
                </FormGroup>
                <div className="form-inline">
                    <FormGroup className="mr-auto">
                        <Button>Simpan</Button>
                    </FormGroup>
                    <FormGroup>
                        <Button onClick={handleEdit}>Batal</Button>
                    </FormGroup>
                </div>
            </form>
        </Fragment>
    )
    const editBtn = (
        <Fragment>
            <FormGroup>
                <Button onClick={handleEdit} block>Ganti Avatar</Button>
            </FormGroup>
        </Fragment>
    )

    return(
        <Fragment>
            <Card>
                <div className="text-center mt-2">
                    <img src="https://www.shareicon.net/data/2017/01/06/868320_people_512x512.png" alt="user-icon" style={{maxHeight: '360px', width: '90%'}} />
                </div>
                <CardBody>
                    {(edit === true)?editForm:editBtn}
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default CardAvatarComponent