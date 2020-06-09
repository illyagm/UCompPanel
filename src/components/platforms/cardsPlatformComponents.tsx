import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import PlatformService from '../../services/PlatformService';
import InsertPlatformModal from '../platforms/createPlatformModalComponent';
import styled from 'styled-components';
import PaginationPlatformsComponents from './paginationPlatformsComponent';
import EditPlatformModalComponent from './editPlatformModalComponent';
import DeleteButton from './deleteConfirmationComponent';
import { IPlatform } from '../../models/platform/IPlatform';
//TIME AGO <Card.Img className="cardImage" variant="top" src={require(`../../assets/${platform.icon}`)} />
import TimeAgo from 'react-timeago';

const ButtonsStyle = styled.div`
    .cardStyle {
        margin-top: 10%;
    }
    .cardButton {
        margin: 5%;
    }
    .cardImage {
        width: 25%;
    }
`;
const CardsPlatformComponent = () => {
    const platformService = new PlatformService();
    const [platforms, setPlatforms] = useState([]);
    const getPlatforms = () => {
        platformService.getAll().then(response => {
            setPlatforms(response.data);
        })
    }
    useEffect(() => {
        getPlatforms();
    }, [platforms])
    return (
        <ButtonsStyle>
            <InsertPlatformModal />
            <Container>
                <Row>
                    {
                        platforms.map((platform: IPlatform, key: number) => {
                return (
                    <div key={key}>
                        <Col sm>
                            <Card style={{ width: '15rem' }} className="cardStyle">
                                <Card.Body>
                                    <Card.Title>{platform.name}</Card.Title>

                                    <Card.Text>
                                        <a target="_blank" rel="noopener noreferrer" href={"" + platform.url + ""}>{platform.url}</a>
                                    </Card.Text>
                                    <Card.Text>
                                        <b>Created: </b><TimeAgo date={platform.createdAt} /><br />
                                        <b>Updated: </b><TimeAgo date={platform.updatedAt} />
                                    </Card.Text>
                                    <Row>
                                        <Col sm={3}>
                                        <EditPlatformModalComponent id={platform.id} name={platform.name} url={platform.url} />
                                        </Col>
                                        <Col sm={3}>
                                        <DeleteButton platformId={platform.id} platformName={platform.name}/>
                                        </Col>
                                    </Row>                              
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                )
            })
                    }
                </Row>
                <PaginationPlatformsComponents />
            </Container>
        </ButtonsStyle>
    )
}

export default CardsPlatformComponent;