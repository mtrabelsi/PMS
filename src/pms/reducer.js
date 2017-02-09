import { CREATE_EMPLOYEE, ASSIGN_PROJECT } from './employee/employeeConst'
import { CREATE_PROJECT, ASSIGN_TASK, DELETE_PROJECT } from './project/projectConst'
import orm from './orm'

export default function (state = orm.getEmptyState(), action) {
  const session = orm.session(state)
  const Employee = session.Employee
  const Project = session.Project

  switch(action.type) {
    case CREATE_EMPLOYEE : {
      Employee.create(action.value)
      break
    }
    case ASSIGN_PROJECT : {
      break
    }
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
  }

  return session.state
}
