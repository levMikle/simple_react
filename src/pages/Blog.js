import React, {Component} from 'react';
import {Container, Row, Col, Media, Card, ListGroup} from 'react-bootstrap';

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"                               src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                            />
                            <Media.Body>
                                <h5>Blog posts</h5>
                                <p>Lorem ipsum — класичний варіант умовного беззмістовного тексту, що вставляється в макет сторінки. Lorem ipsum — це перекручений уривок з філософського трактату Цицерона «Про межі добра і зла», написаного в 45 році до нашої ери латиною</p>
                            </Media.Body>
                        </Media>

                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"                               src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                            />
                            <Media.Body>
                                <h5>Blog posts</h5>
                                <p>Lorem ipsum — класичний варіант умовного беззмістовного тексту, що вставляється в макет сторінки. Lorem ipsum — це перекручений уривок з філософського трактату Цицерона «Про межі добра і зла», написаного в 45 році до нашої ери латиною</p>
                            </Media.Body>
                        </Media>

                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"                               src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                            />
                            <Media.Body>
                                <h5>Blog posts</h5>
                                <p>Lorem ipsum — класичний варіант умовного беззмістовного тексту, що вставляється в макет сторінки. Lorem ipsum — це перекручений уривок з філософського трактату Цицерона «Про межі добра і зла», написаного в 45 році до нашої ери латиною</p>
                            </Media.Body>
                        </Media>

                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"                               src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                            />
                            <Media.Body>
                                <h5>Blog posts</h5>
                                <p>Lorem ipsum — класичний варіант умовного беззмістовного тексту, що вставляється в макет сторінки. Lorem ipsum — це перекручений уривок з філософського трактату Цицерона «Про межі добра і зла», написаного в 45 році до нашої ери латиною</p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                                <ListGroup.Item>Javascript</ListGroup.Item>
                                <ListGroup.Item>Phyton</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className="mt-5" bg="light">
                            <Card.Body>
                                <Card.Title>Side vidget</Card.Title>
                                <Card.Text>
                                        Lorem ipsum — класичний варіант умовного беззмістовного тексту, що вставляється в макет сторінки. Lorem ipsum — це перекручений уривок з філософського трактату Цицерона «Про межі добра і зла», написаного в 45 році до нашої ери латиною
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
