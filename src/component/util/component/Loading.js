import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'

import './../../../css/component/util/component/Loading.css';

export default class Loading extends Component {
    render() {
        return (
            <div className="LoadingComponent text-center pt-2 pb-2">
                <FontAwesomeIcon className="LoadingAnimation" icon={faSyncAlt} />
            </div>
        );
    }
}