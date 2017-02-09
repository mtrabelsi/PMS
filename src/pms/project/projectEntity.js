// models.js
import {fk, many, attr, Model} from 'redux-orm';

class Project extends Model {
    toString() {
        return 'Project';
    }
    // Declare any static or instance methods you need.
}
Project.modelName = 'Project';

// Declare your related fields.
Project.fields = {
    id: attr(), // non-relational field for any value; optional but highly recommended
    name: attr(),
    startDate: attr(),
    slackTime: attr(),
    endDate: attr(),
    tasks : attr()
};

export default Project
