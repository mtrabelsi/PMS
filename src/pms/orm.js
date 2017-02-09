// orm.js
import { ORM } from 'redux-orm';
import Employee from './employee/employeeEntity';
import Project from './project/projectEntity'

const orm = new ORM();
orm.register(Employee, Project);

export default orm;
