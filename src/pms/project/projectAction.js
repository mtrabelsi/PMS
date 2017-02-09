import { CREATE_PROJECT, ASSIGN_TASK, DELETE_PROJECT } from './projectConst'

export function createProject(name, startDate, timeSlack) {
  return {
    type : CREATE_PROJECT,
    value : {
      name,
      startDate,
      timeSlack
    }
  }
}

export function assignTask(idProject, idTask) {
  return {
    type : ASSIGN_TASK,
    value : {
      idProject,
      idTask
    }
  }
}

export function deleteProject(idProject) {
  return {
    type : DELETE_PROJECT,
    value : {idProject}
  }
}
