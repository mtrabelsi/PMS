import { CREATE_EMPLOYEE, ASSIGN_PROJECT } from './employeeConst'

export function createEmployee(firstName, lastName, supervisorId) {
  return {
    type : CREATE_EMPLOYEE,
    value : {
      firstName,
      lastName,
      supervisorId
    }
  }
}

export function assignProject(idEmpl, idProject) {
  return {
    type : ASSIGN_PROJECT,
    value : {
      idEmpl,
      idProject
    }
  }
}
