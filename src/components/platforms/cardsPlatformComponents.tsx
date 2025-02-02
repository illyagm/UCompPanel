import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import PlatformService from '../../services/PlatformService';
import CategoryService from '../../services/CategoryService/CategoryService';
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
    const categoryService = new CategoryService();
    const { getAll, insertPlatform, editPlatform, deletePlatform  } = platformService; 
    const { getCategories } = categoryService;
    const [platforms, setPlatforms] = useState([]);
    const [categories, setCategories] = useState([]);
    //Sort alfabetically
    const compare = (a: any, b: any) => {
        const platformA = a.name.toUpperCase();
        const platformB = b.name.toUpperCase();

        let comparison = 0;
        if (platformA > platformB){
            comparison = 1;
        } else if(platformA < platformB){
            comparison = -1;
        }
        return comparison;
    };  
    useEffect(() => {
        const getPlatforms = () => {
            getAll().then(response => {
                setPlatforms(response.data);
            });
        };
        const categoriesInfo = () => {
            getCategories().then(response => {
                setCategories(response.data);
            });
        }
        getPlatforms();
        categoriesInfo();
    }, [getAll])
    useEffect(() => {
        console.log('RENDERING PLATFORMS', platforms);
    });
    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [active, setActive] = useState(1);
    const [platformsPerPage] = useState(8);
    const indexOfLastPlatform = currentPage * platformsPerPage;
    const indexOfFirstPost = indexOfLastPlatform - platformsPerPage;
    const currentPlatforms = platforms.slice(indexOfFirstPost, indexOfLastPlatform);
    //Change page
    const paginate = (pageNumber: React.SetStateAction<number>) => {
        setCurrentPage(pageNumber);
        setActive(pageNumber);
    } 
    const truncate = (str: any) => {
        return str.length > 10 ? str.substring(0, 15) + "..." : str;
    }
    console.log(platforms);
    return (
        <ButtonsStyle>
            <InsertPlatformModal insertPlatform={insertPlatform} setPlatforms={setPlatforms} getAll={getAll} compare={compare} categories={categories} /> 
            <Container>
                <Row>
                    {
                        currentPlatforms.map((platform: IPlatform, key: number) => {
                return (
                    <div key={key}>
                        <Col sm>
                            <Card style={{ width: '15rem' }} className="cardStyle">
                                <Card.Body>
                                    <Card.Title>{truncate(platform.name)}</Card.Title>

                                    <Card.Text>
                                        <a target="_blank" rel="noopener noreferrer" href={"" + platform.url + ""}>{truncate(platform.url)}</a>
                                    </Card.Text>
                                    <Card.Text>
                                        <b>Created: </b><TimeAgo date={platform.createdAt} /><br />
                                        <b>Updated: </b><TimeAgo date={platform.updatedAt} />
                                    </Card.Text>
                                    <Row>
                                        <Col sm={3}>
                                        <EditPlatformModalComponent id={platform.id} name={platform.name} url={platform.url} editPlatform={editPlatform} setPlatforms={setPlatforms}  getAll={getAll} compare={compare} />
                                        </Col>
                                        <Col sm={3}>
                                        <DeleteButton platformId={platform.id} platformName={platform.name} deletePlatform={deletePlatform}  setPlatforms={setPlatforms} getAll={getAll} compare={compare} truncate={truncate}/>
                                        </Col>
                                        <Col sm>
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
                <PaginationPlatformsComponents platformsPerPage ={platformsPerPage} totalPlatforms={platforms.length} paginate={paginate} currentPage={currentPage} active={active}/>
            </Container>
        </ButtonsStyle>
    )
}

export default CardsPlatformComponent;