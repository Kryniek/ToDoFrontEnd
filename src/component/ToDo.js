import React, { Component } from 'react';

import '../css/component/ToDo.css';

import TaskGridHeader from './TaskGridHeader';
import Task from './Task';
import TaskAdd from './TaskAdd';

export default class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [{
                id: 1,
                name: 'Zjeść jajka',
                deadline: '2019-03-01 12:00:00'
            }, {
                id: 2,
                name: 'Ugotować jajka',
                deadline: '2019-02-20 10:00:00'
            }, {
                id: 3,
                name: 'Kupić jajka',
                deadline: '2019-02-17 17:12:00'
            }]
        };
    }
    render() {
        const {
            tasks
        } = this.state;

        return (
            <div id="ToDoComponent">
                <div className="container">
                    <h1 className="pt-5 pb-5 mb-3 rounded display-4">TODO</h1>
                    <TaskAdd />
                    <div id="toDoTable" className="p-2 rounded">
                        <TaskGridHeader />
                        {tasks.map(task => (
                            <Task key={task.id} task={task} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}