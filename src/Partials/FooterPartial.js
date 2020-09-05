import React, { Fragment, useState } from 'react'
import { Jumbotron, Container, Row, Col, FormGroup, Form, Button, Label, Input } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPaperPlane, faPhone, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons'


function FooterPartial() {

    const[send, setSend]        = useState(false)
    const[email, setEmail]      = useState('')
    const[message, setMessage]  = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setSend(true)

        const data = {
            email: email,
            message: message,
        }

        console.log(data)
    }

    const sendResponse = (
        <Fragment>
            <Form className="text-center">
                <FormGroup className="display-1">
                    <FontAwesomeIcon icon={faCheckCircle} />
                </FormGroup>
                <FormGroup>
                    <h5>Berhasil dikirim!</h5>
                </FormGroup>
            </Form>
        </Fragment>
    )

    const formInput = (
        <Fragment>
            <FormGroup>
                <h2>Kontak Kami</h2>
            </FormGroup>
            <FormGroup>
                <Input id="email" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Input id="message" placeholder="Message" type="textarea" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} />
            </FormGroup>
            <FormGroup className="text-right">
                <Button color="dark"><FontAwesomeIcon icon={faPaperPlane} /> Kirim</Button>
            </FormGroup>
        </Fragment>
    )

    return(
        <Fragment>
            <div style={{background: '#1a1b1c'}}>
                <Jumbotron fluid className="text-white mt-5" style={{background: '#292b2c'}}>
                    <Container>
                        <Row>
                            <Col md="4" className="mb-3 mb-md-0">
                                <FormGroup>
                                    <h2>Tokoku</h2>
                                    <Label>Jl Sukakue no.49 Kota Bandung Jawa Barat</Label>
                                </FormGroup>
                                <hr />
                                <FormGroup>
                                    <FontAwesomeIcon icon={faEnvelope} /> <Label>tokoku@gmail.com</Label>
                                </FormGroup>
                                <FormGroup>
                                    <FontAwesomeIcon icon={faPhone} style={{transform: 'rotate(90deg)'}} /> <Label>088809419294</Label>
                                </FormGroup>
                                <hr />
                                <div className="form-inline">
                                    <FormGroup className="mr-2">
                                        <a href="http://localhost:3000" target="_BLANK" rel="noopener noreferrer" ><Button color="dark"><FontAwesomeIcon icon={faInstagram} /> </Button></a>
                                    </FormGroup>
                                    <FormGroup className="mr-2">
                                        <a href="http://localhost:3000" target="_BLANK" rel="noopener noreferrer" ><Button color="dark"><FontAwesomeIcon icon={faFacebook} /> </Button></a>
                                    </FormGroup>
                                    <FormGroup className="mr-2">
                                        <a href="http://localhost:3000" target="_BLANK" rel="noopener noreferrer" ><Button color="dark"><FontAwesomeIcon icon={faWhatsapp} /> </Button></a>
                                    </FormGroup>
                                    <FormGroup className="mr-2">
                                        <a href="http://localhost:3000" target="_BLANK" rel="noopener noreferrer" ><Button color="dark"><FontAwesomeIcon icon={faTelegram} /> </Button></a>
                                    </FormGroup>
                                </div>
                            </Col>
                            <Col md="4" className="mb-3 mb-md-0">
                                <FormGroup>
                                    <h2>Tentang Kami</h2>
                                    <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam similique commodi qui explicabo tempora error, laudantium quibusdam mollitia eaque illo quasi minima culpa corrupti veniam tenetur obcaecati delectus? Quasi, vitae!
                                    </p>
                                </FormGroup>
                            </Col>
                            <Col md="4" className="mb-3 mb-md-0">
                                <Form onSubmit={handleSubmit}>
                                    {(send === false)?formInput:sendResponse}
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <footer className="text-white text-center" style={{background: '#1a1b1c'}}>
                    <Label className="mb-4">&copy; Copyright 2020</Label>
                </footer>
            </div>
        </Fragment>
    )
}

export default FooterPartial