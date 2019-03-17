import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import './../css/component/TaskDelete.css';

export default class TaskDelete extends Component {
    constructor(props) {
        super(props);

        this.onConfirm = this.onConfirm.bind(this);
        this.onReject = this.onReject.bind(this);
        this.setIsDeletingStateToFalse = this.setIsDeletingStateToFalse.bind(this);
    }
    
    render() {
        return (
            <div className="TaskDeleteComponent mt-3 pb-3">
                <div className="row ml-0 mr-0 rounded">
                    <span className="col">
                        <p><b>Czy na pewno chcesz usunąć zadanie: "{this.props.name}"?</b></p>
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
        this.setIsDeletingStateToFalse();
    }

    onReject() {
        this.setIsDeletingStateToFalse();
    }

    setIsDeletingStateToFalse() {
        this.props.setIsDeletingState(false);
    }
}