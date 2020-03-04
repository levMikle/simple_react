import React, { Component } from 'react';
import CarouselBox from '../components/CarouselBox';
import {Container, CardDeck, Card, Button} from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />
                <Container>
                    <h2 className="text-center m-4" >Our team</h2>
                    <CardDeck className="m-4">
                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum — класичний варіант умовного беззмістовного тексту, що вставляється в макет сторінки. Lorem ipsum — це перекручений уривок з філософського трактату Цицерона «Про межі добра і зла», написаного в 45 році до нашої ери латиною
                                      Lorem ipsum — класичний варіант умовного беззмістовного тексту, що вставляється в макет сторінки. Lorem ipsum — це перекручений уривок з філософського трактату Цицерона «Про межі добра і зла», написаного в 45 році до нашої ери латиною
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum — класичний варіант умовного беззмістовного тексту, що вставляється в макет сторінки. Lorem ipsum — це перекручений уривок з філософського трактату Цицерона «Про межі добра і зла», написаного в 45 році до нашої ери латиною
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum — класичний варіант умовного беззмістовного тексту, що вставляється в макет сторінки. Lorem ipsum — це перекручений уривок з філософського трактату Цицерона «Про межі добра і зла», написаного в 45 році до нашої ери латиною
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        )
    }
}
