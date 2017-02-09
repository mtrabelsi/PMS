
export function showAllEmployees(session) {
  const Employee = session.Employee
  console.log("### show all employees ###")
  Employee.all().toRefArray().forEach(employee => {
    console.log(employee)
  })
}

export function showAllTasksByProject(session, projectId) {
  const Project = session.Project
  const Task = session.Task
  console.log("### show all Tasks by Project ID ###")

  const project = Project.withId(projectId)
  project.tasks.forEach(taskId => {
    console.log(Task.withId(taskId))
  })
}
