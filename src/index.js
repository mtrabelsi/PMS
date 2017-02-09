import React from 'react'
import ReactDOM from 'react-dom'
import reducer from './pms/reducer'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
// those are functions to invoke
import { showAllEmployees, showAllTasksByProject } from './pms/queries'
// possible actions
import { createProject, assignTask, deleteProject } from './pms/project/projectAction'
import { createEmployee, assignProject } from './pms/employee/employeeAction'
import { createTask, deleteTask, reEstimateTask} from './pms/task/taskAction'

import orm from './pms/orm'
let session

const loggerMiddleware = createLogger()
let store = createStore(reducer, applyMiddleware(loggerMiddleware))

//always get the latest session update
// we'll use this session for our queries later - see below
const unsubscribe = store.subscribe( () => {
  session = orm.session(store.getState())
})

store.dispatch(createProject('p1', new Date(), 4))
store.dispatch(createEmployee('marwen','trabelsi', 1))

store.dispatch(createTask('task1',2, 'this is new task'))
store.dispatch(createTask('task2',1, 'this is new task'))

store.dispatch(assignTask(0, 0))
store.dispatch(assignTask(0, 1))
/*
showAllEmployees(session)
showAllTasksByProject(session, 0)
*/
//store.dispatch(assignTask(0, 1))
