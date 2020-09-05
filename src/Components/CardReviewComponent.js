import React, { Fragment, useState, useContext } from 'react'
import { Card, CardHeader, CardBody, Form, FormGroup, Button } from 'reactstrap'
import { TextField } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import FavoriteIcon from '@material-ui/icons/Favorite'
import AlertComponent from './AlertComponent'
import { AlertContext } from '../Context/AlertContext'

function CardReviewComponent() {

    const[like, setLike]     = useState(0)
    const[text, setText]     = useState('')
    const[items, setItems]   = useState([])
    const[alert, setAlert]   = useContext(AlertContext)
    const date               = new Date()
    const day                = date.getDay()
    const month              = date.getMonth()
    const year               = date.getFullYear()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (like === 0) {
            setAlert({...alert, status: true, message: 'Like tidak boleh kosong!', type: 'error'})
            return(
                <Fragment>
                    <AlertComponent />
                </Fragment>
            )
        } else {
            setItems([...items, {
                like: like,
                text: text
            }])

            const data = {
                id_user: 1,
                like: like,
                text: text,
                date: `${day}-${month}-${year}`,
            }

            console.log(data)

            setAlert({...alert, status: true, message: 'Berhasil mengirim ulasan!', type: 'success'})
            setText('')
            setLike(0)

            return(
                <Fragment>
                    <AlertComponent />
                </Fragment>
            )
        }
    }

    const check = items.filter(item => item.text !== '')

    const fetchData = check.map((item, i) => 
        <Fragment key={i}>
            <Form inline>
                <FormGroup className="mb-1 mr-auto">
                    <table>
                        <tbody>
                            <tr>
                                <td rowSpan="3"> <img src="https://www.shareicon.net/data/2017/01/06/868320_people_512x512.png" className="rounded mr-2" style={{maxHeight: '45px'}} alt="user-icon" /> </td>
                            </tr>
                            <tr>
                                <td><b>Uknown</b></td>
                            </tr>
                            <tr>
                                <td><small>{`${day}/${month}/${year}`}</small></td>
                            </tr>
                        </tbody>
                    </table>
                </FormGroup>
                <FormGroup>
                    <Rating name="like" style={{color: '#ff3d47'}} value={item.like} precision={1} icon={<FavoriteIcon fontSize="small"/>} readOnly />
                </FormGroup>
            </Form>
            <FormGroup>
                <p style={{whiteSpace: 'pre-wrap'}}> {item.text} </p>
            </FormGroup>
            <hr />
        </Fragment>
    )

    return(
        <Fragment>
            <Card className="card-default shadow">
                <CardHeader>
                    <h3>Ulasan</h3>
                </CardHeader>
                <CardBody>
                    <Form inline>
                        <FormGroup className="mb-1 mr-auto">
                            <table>
                                <tbody>
                                    <tr>
                                        <td rowSpan="3"> <img src="https://www.shareicon.net/data/2017/01/06/868320_people_512x512.png" className="rounded mr-2" style={{maxHeight: '45px'}} alt="user-icon" /> </td>
                                    </tr>
                                    <tr>
                                        <td><b>Indra</b></td>
                                    </tr>
                                    <tr>
                                        <td><small>19/1/2020</small></td>
                                    </tr>
                                </tbody>
                            </table>
                        </FormGroup>
                        <FormGroup>
                            <Rating name="like" style={{color: '#ff3d47'}} value={4} precision={1} icon={<FavoriteIcon fontSize="small"/>} readOnly />
                        </FormGroup>
                    </Form>
                    <FormGroup>
                        <p style={{whiteSpace: 'pre-wrap'}} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam similique commodi qui explicabo tempora error, laudantium quibusdam mollitia eaque illo quasi minima culpa corrupti veniam tenetur obcaecati delectus? Quasi, vitae!</p>
                    </FormGroup>
                    <hr />
                    {fetchData}
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Rating name="like" style={{color: '#ff3d47'}} defaultValue={0} value={like} precision={1} icon={<FavoriteIcon />} onChange={(e) => setLike(parseInt(e.target.value))} />
                        </FormGroup>
                        <FormGroup>
                            <TextField fullWidth multiline rows="3" variant="outlined" label="Masukkan ulasan anda" value={text} onChange={(e) => setText(e.target.value)} />
                        </FormGroup>
                        <FormGroup className="text-right">
                            <Button>Kirim</Button>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default CardReviewComponent