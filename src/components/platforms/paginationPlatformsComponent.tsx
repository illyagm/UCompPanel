import React from 'react';
import { Pagination } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
    .paginationStyle {
        margin-top: 2%;
    }
`;

const paginationBasic = () => {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
    <Styles>
    <div className="paginationStyle">
        <Pagination>{items}</Pagination>
    </div>
    </Styles>
    )
}


export default paginationBasic;