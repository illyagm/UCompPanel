import React from 'react';
import { Table } from 'react-bootstrap';
import OperationsChart from '../chartOperations/OperationsChart';

const StatsComponent = () => {
    return (
        <div>
        <Table striped bordered hover responsive="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Platforms</th>
                    <th>Clicks</th>
                    <th>Opened Ref Link</th>
                    <th>Last Search</th>
                    <th>Income $ (last 30 days)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Amazon</td>
                    <td>120.551</td>
                    <td>51.521</td>
                    <td>3 mins ago</td>
                    <td>560</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>2</td>
                    <td>InstantGaming</td>
                    <td>522.145</td>
                    <td>125.463</td>
                    <td>25 secs ago</td>
                    <td>1655</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>3</td>
                    <td>Kraken</td>
                    <td>25.565</td>
                    <td>12.332</td>
                    <td>4 hours ago</td>
                    <td>123</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>4</td>
                    <td>CoinBase</td>
                    <td>3401</td>
                    <td>1250</td>
                    <td>2 days ago</td>
                    <td>345</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>5</td>
                    <td>Aliexpress</td>
                    <td>54.022</td>
                    <td>25.668</td>
                    <td>13 mins ago</td>
                    <td>2356</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Total: </td>
                    <td>5036</td>
                </tr>
            </tbody>
        </Table>
        <OperationsChart/>
        </div>
    )
}

export default StatsComponent;