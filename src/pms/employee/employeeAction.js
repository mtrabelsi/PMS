import { CREATE_EMPLOYEE, ASSIGN_PROJECT } from './employeeConst'

export function createEmployee(firstName, lastName) {
  return {
    type : CREATE_EMPLOYEE,
    value : {
      firstName,
      lastName
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
