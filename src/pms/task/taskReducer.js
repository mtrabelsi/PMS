import { CREATE_TASK, DELETE_TASK, RE_ESTIMATE_TASK } from './taskConst'
import projectReducer from './../project/projectReducer'

export default function (orm, state, action) {
  const session = orm.session(state)
  const Project = session.Project
  const Task = session.Task

  switch(action.type) {
    //task
    case CREATE_TASK :{
      Task.create(action.value)
      break
    }
    case DELETE_TASK :{
      Task.withId(action.value.idTask).delete()
      Project.all().toRefArray().forEach( (project) => {
        if(project.tasks) {
          let index = project.tasks.indexOf(action.value.idTask)
          project.tasks.splice(index, 1)
        }
      })
      break
    }
    case RE_ESTIMATE_TASK :{
      Task.withId(action.value.idTask).estimation = action.value.estimation
      break
    }
  }
  return session.state
}
