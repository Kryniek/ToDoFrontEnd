import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import './../css/component/TaskDelete.css';

import { API_URL } from './constant/ApiConstants';

export default class TaskDelete extends Component {
    constructor(props) {
        super(props);

        this.onConfirm = this.onConfirm.bind(this);
        this.onReject = this.onReject.bind(this);
    }

    render() {
        return (
            <div className="TaskDeleteComponent mt-3 pb-3">
                <Row className="ml-0 mr-0 rounded">
                    <Col className="fakeSpan">
                        <p><b>Czy na pewno chcesz usunąć zadanie: "{this.props.task.name}"?</b></p>
                    </Col>
                    <Col xs={2}>
                        <Col xs={6} className="fakeSpan">
                            <span className="confirmButton" onClick={this.onConfirm}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                        </Col>
                        <Col xs={6} className="fakeSpan">
                            <span className="rejectButton" onClick={this.onReject}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        </Col>
                    </Col>
                </Row>
            </div>
        );
    }

    onConfirm() {
        const {
            task,
            refreshState,
            setIsLoaded
        } = this.props;

        setIsLoaded(false);

        fetch(API_URL + "/tasks/" + task.id, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            refreshState();
        });
    }

    onReject() {
        this.props.setIsDeletingState(false);
    }
}