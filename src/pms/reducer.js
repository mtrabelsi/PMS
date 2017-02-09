import { CREATE_EMPLOYEE, ASSIGN_PROJECT } from './employee/employeeConst'
import { CREATE_PROJECT, ASSIGN_TASK, DELETE_PROJECT } from './project/projectConst'
import { CREATE_TASK, DELETE_TASK, RE_ESTIMATE_TASK } from './task/taskConst'
import orm from './orm'

export default function (state = orm.getEmptyState(), action) {
  const session = orm.session(state)
  const Employee = session.Employee
  const Project = session.Project
  const Task = session.Task

  switch(action.type) {
    //employee
    case CREATE_EMPLOYEE : {
      Employee.create(action.value)
      break
    }
    case ASSIGN_PROJECT : {
      break
    }
    //project
    case CREATE_PROJECT : {
      Project.create(action.value)
      break
    }
    case DELETE_PROJECT : {
      break
    }
    case ASSIGN_TASK : {
      break
    }
    //task
    case CREATE_TASK :{
      Task.create(action.value)
      break
    }
    case DELETE_TASK :{
      break
    }
    case RE_ESTIMATE_TASK :{
      break
    }
  }

  return session.state
}
