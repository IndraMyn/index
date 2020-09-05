import React, { Fragment, useState, useContext } from 'react'
import { Row, Col, Form, FormGroup, Button, Card, CardBody, CardHeader, Spinner } from 'reactstrap'
import { TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { AlertContext } from '../Context/AlertContext'
import AlertComponent from '../Components/AlertComponent'
import { UserInfoContext } from '../Context/UserInfoContext'


function LoginPage() {

    const [username, setUsername]  = useState('')
    const [password, setPassword]  = useState('')
    const [btn, setBtn]            = useState(false)
    const [alert, setAlert]        = useContext(AlertContext)
    const [userInfo, setUserInfo]  = useContext(UserInfoContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            username: username,
            password: password,
        }

        console.log(data)

        setBtn(!btn)
        setAlert({...alert, status: true, type: 'error', message: 'Email atau Password salah!' })

        setUserInfo({...userInfo, login: true})
    }

    return(
        <Fragment>
            <Row className="mt-large">
                <Col md="12" className="mb-0 mb-lg-5">
                    <Row>
                        <Col xl="7" lg="7" md="12" sm="12" className="mb-5">
                            <img src="https://svgshare.com/i/PLN.svg" className="img-fluid" alt="ilustration" />
                        </Col>
                        <Col xl="5" lg="5" md="12" sm="12">
                            <Card className="shadow card-default">
                                <CardHeader>
                                    <h4 className="text-center">Tokoku</h4>
                                </CardHeader>
                                <CardBody>
                                    <Form onSubmit={handleSubmit}>
                                        <FormGroup>
                                            <TextField fullWidth required size="small" id="outlined-Email" label="Email" type="text" variant="outlined" value={username} onChange={e => setUsername(e.target.value)} />
                                        </FormGroup>
                                        <FormGroup>
                                            <TextField fullWidth required size="small" id="outlined-Password" label="Password" type="password" variant="outlined" value={password} onChange={e => setPassword(e.target.value)} />
                                        </FormGroup>
                                        <hr />
                                        <FormGroup>
                                            {(btn === true)?
                                            <Button size="lg" className="btn-peach text-white" block disabled><Spinner size="sm" className="mb-1" /> Login</Button>:
                                            <Button size="lg" className="btn-peach text-white" block> Login</Button>}
                                        </FormGroup>
                                        <hr />
                                        <FormGroup>
                                            <Link to="/register" style={{textDecoration: 'none'}}>
                                                <Button className="btn-peach-outline" block outline >Daftar</Button>
                                            </Link>
                                        </FormGroup>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* Alert */}
            <AlertComponent />
        </Fragment>
    )
}

export default LoginPage