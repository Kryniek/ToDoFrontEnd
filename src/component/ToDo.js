import React, { Component } from 'react';

import '../css/component/ToDo.css';

import { API_URL } from './constant/ApiConstants';

import TaskGridHeader from './TaskGridHeader';
import Task from './Task';
import TaskAdd from './TaskAdd';
import Loading from './util/Loading';
import Error from './util/Error';

export default class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            tasks: []
        };

        this.getLoadedView = this.getLoadedView.bind(this);
    }

    componentDidMount() {
        fetch(API_URL + '/tasks')
            .then(response => response.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    tasks: result
                });
            }, error => {
                this.setState({
                    isLoaded: true,
                    error: error
                });
            });
    }

    render() {
        const {
            isLoaded,
            error
        } = this.state;

        var view = null;

        if (isLoaded) {
            if (error) {
                view = <Error />
            } else {
                view = this.getLoadedView();
            }
        } else {
            view = <Loading />;
        }

        return (
            <div id="ToDoComponent">
                <div className="container">
                    <h1 className="pt-5 pb-5 mb-3 rounded display-4">TODO</h1>
                    <TaskAdd />
                    <div id="toDoTable" className="p-2 rounded">
                        {view}
                    </div>
                </div>
            </div>
        );
    }

    getLoadedView() {
        return (
            <span>
                <TaskGridHeader />
                {this.state.tasks.map(task => (
                    <Task key={task.id} task={task} />
                ))}
            </span>
        );
    }
}