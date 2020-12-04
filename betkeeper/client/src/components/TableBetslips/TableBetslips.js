import React, { useState, useEffect } from 'react';
import './style.css';
import BetSearchingAPI from '../../utils/betSearchingAPI';
import { Row, Col, Table } from 'react-bootstrap';

const TableBetSlip = () => {
    
    const [slips, setSlips] = useState([{
        team1: '',
        team2: '',
        odds: '',
        wager: '',
        payout: '',
    }]);

    useEffect(() => {
        loadBetslips();
    }, [])

    function loadBetslips() {
        BetSearchingAPI.getBets()
            .then(res =>
                setSlips(res.data)    
            )
            .catch(err => console.log(err));
    };

    function deleteSlip(id) {
        BetSearchingAPI.deleteBet(id)
            .then(res => {
            loadBetslips();
            console.log("This is the id:" ,id);
            })
            .catch(err => console.log(err));
    } 

    return (
    
        <Row>
            <Col>
            {slips.length ? (
            <Table>
                <thead>
                            <tr>
                                <th>Team 1</th>
                                <th>Team 2</th>
                                <th>Odds</th>
                                <th>Wager</th>
                                <th>Payout</th>
                                <th></th>
                            </tr>
                </thead>
            {slips.map(slip => (
                <React.Fragment>
                        <tbody>
                            <tr>
                                <td>{slip.team1}</td>
                                <td>{slip.team2}</td>
                                <td>{slip.odds}</td>
                                <td>{slip.wager}</td>
                                <td>{slip.payout}</td>
                                <td>
                                <button type="button" class="btn btn-success"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg></button>
                                <button onClick={() => deleteSlip(slip._id)} type="button" class="btn btn-danger"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                                </svg></button>
                                </td>
                            </tr>
                        </tbody>
                </React.Fragment>
            ))}
            </Table>
            ) : (
                <h3>No Results to Display</h3>
            )}
            </Col>
        </Row>
    );
}

export default TableBetSlip;