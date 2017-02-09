import React from 'react'
import ReactDOM from 'react-dom'
import ActionDispatcher from './actionDispatcher'

import reducer from './pms/reducer'
import { createStore } from 'redux'
import { createProject, assignTask, deleteProject } from './pms/project/projectAction'
import { createEmployee, assignProject } from './pms/employee/employeeAction'

let store = createStore(reducer)

/*
let unsubscribe = store.subscribe(() =>
) */

store.dispatch(createProject('p1', new Date(), 4))
store.dispatch(createEmployee('marwen','trabelsi', 1))


console.log(store.getState())
