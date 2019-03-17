import React, { Component } from 'react';
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
        var task = this.props.task;

        if (state.isEditing) {
            return (
                <TaskEdit
                    task={task}
                    setIsEditingState={this.setIsEditingState}
                />
            );
        } else if (state.isDeleting) {
            return (
                <TaskDelete
                    name={task.name}
                    setIsDeletingState={this.setIsDeletingState}
                />
            );
        }


        var taskDeadline = task.deadline;

        return (
            <div className={"TaskComponent pt-1 pb-1 ".concat(this.getRowColor(taskDeadline))}>
                <div className="row ml-0 mr-0 pt-2 pb-2 rounded">
                    <div className="col">
                        <p>{task.name}</p>
                    </div>
                    <div className="col-3">
                        <p><Moment date={taskDeadline} format={DATE_FORMAT} /></p>
                    </div>
                    <div className="col-2">
                        <span className="col-6">
                            <span className="editButton" onClick={() => this.setIsEditingState(true)}>
                                <FontAwesomeIcon icon={faEdit} />
                            </span>
                        </span>
                        <span className="col-6">
                            <span className="deleteButton" onClick={() => this.setIsDeletingState(true)}>
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </span>
                        </span>
                    </div>
                </div>
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