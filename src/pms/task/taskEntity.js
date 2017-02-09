// models.js
import {fk, many, attr, Model} from 'redux-orm';

class Task extends Model {
    toString() {
        return 'Task';
    }
    // Declare any static or instance methods you need.
}
Task.modelName = 'Task';

// Declare your related fields.
Task.fields = {
    id: attr(), // non-relational field for any value; optional but highly recommended
    name: attr(),
    timeduration: attr(),
    description: attr(),
    estimation: attr()
};


export default Task
