// models.js
import {fk, many, attr, Model} from 'redux-orm';

class Employee extends Model {
    toString() {
        return 'Employee';
    }
    // Declare any static or instance methods you need.
}
Employee.modelName = 'Employee';

// Declare your related fields.
Employee.fields = {
    id: attr(), // non-relational field for any value; optional but highly recommended
    firstName: attr(),
    lastName: attr()
};

export default Employee
