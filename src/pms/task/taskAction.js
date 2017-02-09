import { CREATE_TASK, DELETE_TASK, RE_ESTIMATE_TASK } from './taskConst'


export function createTask(name, timeduration, description) {
  return {
    type : CREATE_TASK,
    value : {
      name,
      timeduration,
      description
    }
  }
}

export function delteTask(idTask) {
  return {
    type : DELETE_TASK,
    value : {idTask}
  }
}

export function reEstimateTask(idTask, estimation) {
  return {
    type : RE_ESTIMATE_TASK,
    value : {
      idTask,
      estimation
    }
  }
}
