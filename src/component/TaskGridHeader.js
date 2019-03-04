import React, { Component } from 'react';

import './../css/component/TaskGridHeader.css';

export default class TaskGridHeader extends Component {
    render() {
        return (
            <div id="TaskGridHeaderComponent">
                <div className="row">
                    <div className="col"><b>Opis</b></div>
                    <div className="col-3"><b>Realizacja do dnia</b></div>
                    <div className="col-2"><b>Modyfikuj</b></div>
                </div>
                <hr></hr>
            </div>
        );
    }
}