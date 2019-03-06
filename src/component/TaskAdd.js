import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

import '../css/component/TaskAdd.css';

export default class TaskAdd extends Component {
    constructor(props) {
        super(props);

        this.onAdd = this.onAdd.bind(this);
    }

    render() {
        return (
            <div className="TaskAddComponent mt-2 mb-2 pl-2 pr-2 pt-3 pb-3 rounded">
                <div className="row ml-0 mr-0">
                    <span className="col">
                        <input className="form-control" type="text" placeholder="Nowe zadanie" />
                    </span>
                    <span className="col-3">
                        <DateTime
                            defaultValue={new Date()}
                            dateFormat="YYYY-MM-DD"
                            timeFormat="HH:mm:ss"
                            locale="pl"
                        />
                    </span>
                    <div className="col-2">
                        <span className="col-12">
                            <span className="addButton" onClick={this.onAdd}>
                                <FontAwesomeIcon icon={faPlus} />
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    onAdd() {

    }
}