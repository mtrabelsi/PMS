import { CREATE_EMPLOYEE, ASSIGN_PROJECT } from './employeeConst'

export default function (orm, state, action) {
  const session = orm.session(state)
  const Employee = session.Employee

  switch(action.type) {
    //employee
    case CREATE_EMPLOYEE : {
      Employee.create(action.value)
      break
    }
    case ASSIGN_PROJECT : {
      let assignedProjects = Employee.withId(action.value.idEmpl).assignedProjects
      assignedProjects ?  (assignedProjects.length<2) && assignedProjects.push(action.value.idProject) :
      Employee.withId(action.value.idEmpl).assignedProjects = [action.value.idProject]
      break
    }
  }
  return session.state
}
