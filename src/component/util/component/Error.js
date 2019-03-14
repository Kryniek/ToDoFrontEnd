import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadTear } from '@fortawesome/free-solid-svg-icons'

import './../../../css/component/util/component/Error.css';

export default class Error extends Component {
    render() {
        return (
            <div className="ErrorComponent text-center pt-2 pb-2">
                <FontAwesomeIcon icon={faSadTear} />
                <p>Wystąpił błąd</p>
            </div>
        );
    }
}