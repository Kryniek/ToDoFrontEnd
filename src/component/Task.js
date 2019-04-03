import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Moment from 'react-moment';
import moment from 'moment/moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

import './../css/component/task/Task.css';

import { DATE_FORMAT } from './constant/DateConstants';
import TaskEdit from './TaskEdit';
import TaskDelete from './TaskDelete';

export default class Task extends Component {
    constructor(props) {
        super(props);

        this.setIsEditingState = this.setIsEditingState.bind(this);
        this.setIsDeletingState = this.setIsDeletingState.bind(this);
        this.getRowColor = this.getRowColor.bind(this);

        this.state = {
            isEditing: false,
            isDeleting: false
        };
    }

    render() {
        var state = this.state;
        var {
            task,
            refreshState,
            setIsLoaded
        } = this.props;

        if (state.isEditing) {
            return (
                <TaskEdit
                    task={task}
                    setIsEditingState={this.setIsEditingState}
                    refreshState={refreshState}
                    setIsLoaded={setIsLoaded}
                />
            );
        } else if (state.isDeleting) {
            return (
                <TaskDelete
                    task={task}
                    setIsDeletingState={this.setIsDeletingState}
                    refreshState={refreshState}
                    setIsLoaded={setIsLoaded}
                />
            );
        }


        var taskDeadline = task.deadline;

        return (
            <div className={"TaskComponent pt-1 pb-1 ".concat(this.getRowColor(taskDeadline))}>
                <Row className="ml-0 mr-0 pt-2 pb-2 rounded">
                    <Col>
                        <p>{task.name}</p>
                    </Col>
                    <Col xs={3}>
                        <p><Moment date={taskDeadline} format={DATE_FORMAT} /></p>
                    </Col>
                    <Col xs={2}>
                        <Col xs={6} className="fakeSpan">
                            <span className="editButton" onClick={() => this.setIsEditingState(true)}>
                                <FontAwesomeIcon icon={faEdit} />
                            </span>
                        </Col>
                        <Col xs={6} className="fakeSpan">
                            <span className="deleteButton" onClick={() => this.setIsDeletingState(true)}>
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </span>
                        </Col>
                    </Col>
                </Row>
            </div>
        );
    }

    setIsEditingState(isEditing) {
        this.setState({
            isEditing: isEditing
        })
    }

    setIsDeletingState(isDeleting) {
        this.setState({
            isDeleting: isDeleting
        })
    }

    getRowColor(taskDeadline) {
        const nowAndTaskDeadlineDifference = moment().diff(taskDeadline, "days");
        var rowColorClass = "";

        if (nowAndTaskDeadlineDifference > 0) {
            rowColorClass = "missedDeadlineTaskRow";
        } else if (nowAndTaskDeadlineDifference === 0) {
            rowColorClass = "reachedDeadlineTaskRow";
        }

        return rowColorClass;
    }
}