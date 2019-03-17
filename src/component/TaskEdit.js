import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

import './../css/component/TaskEdit.css';

export default class TaskEdit extends Component {
    constructor(props) {
        super(props);

        this.onConfirm = this.onConfirm.bind(this);
        this.onReject = this.onReject.bind(this);
        this.setIsEditingStateToFalse = this.setIsEditingStateToFalse.bind(this);
    }

    render() {
        var task = this.props.task;

        return (
            <div className="TaskEditComponent mt-3 pb-3">
                <div className="row ml-0 mr-0 rounded">
                    <span className="col">
                        <input className="form-control" type="text" placeholder={task.name} />
                    </span>
                    <span className="col-3">
                        <DateTime
                            defaultValue={new Date(task.deadline)}
                            dateFormat="YYYY-MM-DD"
                            timeFormat="HH:mm:ss"
                            locale="pl"
                        />
                    </span>
                    <div className="col-2">
                        <span className="col-6">
                            <span className="confirmButton" onClick={this.onConfirm}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                        </span>
                        <span className="col-6">
                            <span className="rejectButton" onClick={this.onReject}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    onConfirm() {
        this.setIsEditingStateToFalse();
    }

    onReject() {
        this.setIsEditingStateToFalse();
    }

    setIsEditingStateToFalse() {
        this.props.setIsEditingState(false);
    }
}