// orm.js
import { ORM } from 'redux-orm';
import Employee from './employee/employeeEntity';
import Project from './project/projectEntity'
import Task from './task/taskEntity'

const orm = new ORM();
orm.register(Employee, Project, Task);

export default orm;
