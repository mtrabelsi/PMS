import React from 'react'
import ReactDOM from 'react-dom'
import ActionDispatcher from './actionDispatcher'
import reducer from './pms/reducer'
import { createStore } from 'redux'
// possible actions
import { createProject, assignTask, deleteProject } from './pms/project/projectAction'
import { createEmployee, assignProject } from './pms/employee/employeeAction'
import { createTask, deleteTask, reEstimateTask} from './pms/task/taskAction'

let store = createStore(reducer)

store.dispatch(createProject('p1', new Date(), 4))
store.dispatch(createEmployee('marwen','trabelsi', 1))
store.dispatch(createTask('task1',2, 'this is new task'))

console.log(store.getState())

store.dispatch(assignTask(0, 0))

console.log(store.getState())
