import { Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SmjerNovi() {

async function dodaj(smjer) {
    console.log(smjer)
}

function odradiSubmit(e) {
    e.preventDefault();
    const podaci = new FormData(e.target)
    dodaj({ 
        naziv: podaci.get('naziv'),
        trajanje: parseInt (podaci.get('trajanje')),
        cijena: parseFloat (podaci.get('cijena')),
        datumPokretanja: new Date(podaci.get('datumPokretanja')),
        aktivan: podaci.get('aktivan') === 'on' ? true : false
    })

}



    return (
        <>
        <h3>Dodavanje novog smjera</h3>
        <Form onSubmit={odradiSubmit}> 

            <Form.Group controlId="Naziv">
                <Form.Label> Naziv </Form.Label>
                <Form.Control type="text" name="naziv" />
            </Form.Group>
        

            <Form.Group controlId="Trajanje">
                <Form.Label>Trajanje</Form.Label>
                <Form.Control type="number" name="trajanje" step={1} />
            </Form.Group>

            <Form.Group controlId="Cijena">
                <Form.Label>Cijena</Form.Label>
                <Form.Control type="number" name="cijena" step={0.01} />
            </Form.Group>

            <Form.Group controlId="datumPokretanja">
                <Form.Label>Datum pokretanja smjera</Form.Label>
                <Form.Control type="date" name="datumPokretanja" />
            </Form.Group>

            <Form.Group controlId="Aktivan">
                <Form.Check label="Aktivan" name="aktivan"  />
            </Form.Group>

            <hr style={{marginTop: '50px', border: '0'}} />

            <Row>
                <Col>
                    <Link to={RouteNames.SMJEROVI} className="btn btn-danger">
                        Odustani
                    </Link>
                </Col>
                <Col>
                    <Button type="submit" variant="success">
                        Dodaj novi smjer
                    </Button>
                </Col>
            </Row>

        </Form>
        </>
    )
}