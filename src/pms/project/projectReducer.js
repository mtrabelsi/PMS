import { CREATE_PROJECT, ASSIGN_TASK, DELETE_PROJECT } from './projectConst'

export default function (orm, state, action) {
  const session = orm.session(state)
  const Employee = session.Employee
  const Project = session.Project
  const Task = session.Task

  switch(action.type) {
    //project
    case CREATE_PROJECT : {
      Project.create(action.value)
      break
    }
    case DELETE_PROJECT : {
      Project.withId(action.value.idProject).delete()
      Employee.all().toRefArray().forEach( (employee) => {
        if(employee.assignedProjects) {
          let index = employee.assignedProjects.indexOf(action.value.idProject)
          employee.assignedProjects.splice(index, 1)
        }
      })
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
        project.endDate = new Date(project.startDate.getTime())
        project.endDate.setDate(project.endDate.getDate() +  sumDays + project.timeSlack)
      }
      break
    }
  }
  return session.state
}
