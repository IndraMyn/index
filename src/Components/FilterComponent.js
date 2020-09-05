import React, { Fragment, useState } from 'react'
import { TextField, MenuItem } from '@material-ui/core'
import { Button, Row, Col, Card, CardBody } from 'reactstrap'

function FilterComponent() {

    const[tag, setTag]      = useState('')
    const[price, setPrice]  = useState('')

    return(
        <Fragment>
            <Card className="shadow">
                <CardBody>
                    <Row>
                        <Col md="4" className="col-12 mb-md-0 mb-2">
                            <TextField fullWidth select label="Kategori" value={tag} onChange={e => setTag(e.target.value)}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Original</MenuItem>
                                <MenuItem value={20}>Kering</MenuItem>
                            </TextField>
                        </Col>
                        <Col md="4" className="col-12 mb-md-0 mb-2">
                            <TextField fullWidth select label="Harga" value={price} onChange={e => setPrice(e.target.value)}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Terendah</MenuItem>
                                <MenuItem value={20}>Tertinggi</MenuItem>
                            </TextField>
                        </Col>
                        <Col md="4" className="col-12 mb-md-0 mb-2">
                            <Row>
                                <Col className="col-8">
                                    <TextField fullWidth label="Cari" />
                                </Col>
                                <Col className="col-4">
                                    <Button className="mt-3 ml-md-2 ml-0">Cari</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Fragment>
    )
}
export default FilterComponent