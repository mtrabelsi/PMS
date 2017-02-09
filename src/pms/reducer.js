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
      Project.withId(action.value.idProject).delete()
      break
    }
    case ASSIGN_TASK : {
      let tasks = Project.withId(action.value.idProject).tasks
      tasks ? tasks.push(action.value.idTask) : Project.withId(action.value.idProject).tasks = [action.value.idTask]
      //update the task ref
      tasks = Project.withId(action.value.idProject).tasks
      if(tasks) {
        let sumDays = 0
        tasks.forEach((task) => {
          sumDays+= Task.withId(task).timeduration
        })
        let project = Project.withId(action.value.idProject)
        Project.withId(action.value.idProject).endDate = project.startDate


        Project.withId(action.value.idProject).endDate.setDate(Project.withId(action.value.idProject).endDate.getDate() +  sumDays + project.slackTime)
      }
      break
    }
    //task
    case CREATE_TASK :{
      Task.create(action.value)
      break
    }
    case DELETE_TASK :{
      Task.withId(action.value.idTask).delete();
      break
    }
    case RE_ESTIMATE_TASK :{
      Task.withId(action.value.idTask).estimation = action.value.estimation
      break
    }
  }

  return session.state
}
