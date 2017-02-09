import { CREATE_EMPLOYEE, ASSIGN_PROJECT } from './employee/employeeConst'
import { CREATE_PROJECT, ASSIGN_TASK, DELETE_PROJECT } from './project/projectConst'
import { CREATE_TASK, DELETE_TASK, RE_ESTIMATE_TASK } from './task/taskConst'
import orm from './orm'
import employeeReducer from './employee/employeeReducer'
import projectReducer from './project/projectReducer'
import taskReducer from './task/taskReducer'

export default function (state = orm.getEmptyState(), action) {
  let retState
  switch(action.type) {
    //employee
    case CREATE_EMPLOYEE :
    case ASSIGN_PROJECT : {
      retState =  employeeReducer(orm, state, action)
      break
    }
    //project
    case CREATE_PROJECT :
    case DELETE_PROJECT :
    case ASSIGN_TASK : {
      retState = projectReducer(orm, state, action)
      break
    }
    //task
    case CREATE_TASK :
    case DELETE_TASK :
    case RE_ESTIMATE_TASK :{
      retState = taskReducer(orm, state, action)
      break
    }
  }

  return retState
}
