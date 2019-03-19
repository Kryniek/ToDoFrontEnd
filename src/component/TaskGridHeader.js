import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './../css/component/TaskGridHeader.css';

export default class TaskGridHeader extends Component {
    render() {
        return (
            <div id="TaskGridHeaderComponent">
                <Row>
                    <Col><b>Opis</b></Col>
                    <Col xs={3}><b>Realizacja do dnia</b></Col>
                    <Col xs={2}><b>Modyfikuj</b></Col>
                </Row>
                <hr></hr>
            </div>
        );
    }
}