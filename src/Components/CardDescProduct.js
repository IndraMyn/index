import React, { Fragment } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'

function CardDescProduct() {
    return(
        <Fragment>
            <Card className="card-default shadow">
                <CardHeader>
                    <h3 className="text-white">Deskripsi</h3>
                </CardHeader>
                <CardBody>
                    <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam similique commodi qui explicabo tempora error, laudantium quibusdam mollitia eaque illo quasi minima culpa corrupti veniam tenetur obcaecati delectus? Quasi, vitae!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam similique commodi qui explicabo tempora error, laudantium quibusdam mollitia eaque illo quasi minima culpa corrupti veniam tenetur obcaecati delectus? Quasi, vitae!
                    </p>
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default CardDescProduct