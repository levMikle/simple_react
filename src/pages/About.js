import React, {Component} from 'react';
import {Container, Tab, Nav, Row, Col} from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programing</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src="https://miro.medium.com/max/5200/1*x1kRbzq47VhGQBfE12u5pg.png" />
                                    <p>Lorem ipsum — класичний варіант умовного беззмістовного тексту, що вставляється в макет сторінки. Lorem ipsum — це перекручений уривок з філософського трактату Цицерона «Про межі добра і зла», написаного в 45 році до нашої ери латиною</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://cms-assets.tutsplus.com/uploads/users/30/posts/32053/image/freebiesupply.jpg" />
                                    <p>Lorem ipsum — класичний варіант умовного беззмістовного тексту, що вставляється в макет сторінки. Lorem ipsum — це перекручений уривок з філософського трактату Цицерона «Про межі добра і зла», написаного в 45 році до нашої ери латиною</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://images.ctfassets.net/ooa29xqb8tix/2IwSz500ZOmoyWWCoc28as/16c9a0ca05d3b125c9df82e0d6522718/DraggedImage.jpeg" />
                                    <p>Lorem ipsum — класичний варіант умовного беззмістовного тексту, що вставляється в макет сторінки. Lorem ipsum — це перекручений уривок з філософського трактату Цицерона «Про межі добра і зла», написаного в 45 році до нашої ери латиною</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://i.pinimg.com/originals/1c/2e/e8/1c2ee805c780d89aaba26ae346422999.png" />
                                    <p>Lorem ipsum — класичний варіант умовного беззмістовного тексту, що вставляється в макет сторінки. Lorem ipsum — це перекручений уривок з філософського трактату Цицерона «Про межі добра і зла», написаного в 45 році до нашої ери латиною</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src="https://figma.imgix.net/5D67PA2CgBO0UjZJ7JWTjV/94f7b9a121238499537c6be48797944c/Building_Website_Design_Systems_header.png?&w=1060&auto=compress%2Cformat&crop=entropy&fit=crop&q=75" />
                                    <p>Lorem ipsum — класичний варіант умовного беззмістовного тексту, що вставляється в макет сторінки. Lorem ipsum — це перекручений уривок з філософського трактату Цицерона «Про межі добра і зла», написаного в 45 році до нашої ери латиною</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}
