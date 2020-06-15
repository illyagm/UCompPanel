import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import PlatformService from '../../services/PlatformService';
import InsertPlatformModal from '../platforms/createPlatformModalComponent';
//import styled from 'styled-components';
import PaginationPlatformsComponents from './paginationPlatformsComponent';
import EditPlatformModalComponent from './editPlatformModalComponent';
import DeleteButton from './deleteConfirmationComponent';
import { IPlatform } from '../../models/platform/IPlatform';
import { ICategoryService } from '../../services/CategoryService/ICategoryService';
import CategoryService from '../../services/CategoryService/CategoryService';
//TIME AGO <Card.Img className="cardImage" variant="top" src={require(`../../assets/${platform.icon}`)} />
import TimeAgo from 'react-timeago';


const PlatformsTable = () => {
    const platformService = new PlatformService();
    const categoryService = new CategoryService();
    const { getAll, insertPlatform, editPlatform, deletePlatform  } = platformService; 
    const { getCategories } = categoryService;
    const [platforms, setPlatforms] = useState([]);
    const [categories, setCategories] = useState([]);
    //Sort alphabetically
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
        return str.length > 10 ? str.substring(0, 20) + "..." : str;
    }
    console.log(platforms);
    console.log(categories);
    return (
        <div>
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Platform Name</th>
                    <th>Url</th>
                    <th>Created</th>
                    <th>Updated</th>
                    <th>Category</th>
                    <th></th>
                    <th><InsertPlatformModal insertPlatform={insertPlatform} setPlatforms={setPlatforms} getAll={getAll} compare={compare} categories={categories}/></th>
                </tr>
            </thead>
            <tbody>
                { currentPlatforms.map((platform: IPlatform, key: number) => {
                return (
                <tr key={key}>
                    <td>{truncate(platform.name)}</td>
                    <td><a target="_blank" rel="noopener noreferrer" href={"" + platform.url + ""}>{truncate(platform.url)}</a></td>
                    <td><TimeAgo date={platform.createdAt} /></td>
                    <td><TimeAgo date={platform.updatedAt} /></td>
                    <td><b>{platform.category.toString()}</b></td>
                    <td><EditPlatformModalComponent id={platform.id} name={platform.name} url={platform.url} editPlatform={editPlatform} setPlatforms={setPlatforms}  getAll={getAll} compare={compare} categories={categories} /></td>
                    <td><DeleteButton platformId={platform.id} platformName={platform.name} deletePlatform={deletePlatform}  setPlatforms={setPlatforms} getAll={getAll} compare={compare} truncate={truncate}/></td>
                   
                </tr>
                )
            })}
            </tbody>
        </Table>
        <PaginationPlatformsComponents platformsPerPage ={platformsPerPage} totalPlatforms={platforms.length} paginate={paginate} currentPage={currentPage} active={active}/>
        </div>
    )

}


export default PlatformsTable;