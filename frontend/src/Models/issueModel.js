export default issue;

function issue(issue) {
    if (issue != undefined) {
        this._id = issue._id;
        this.name = issue.name;
        this.details = issue.details;
        this.steps = issue.steps;
        this.version = issue.version;
        this.priority = issue.priority;
        this.assigned = issue.assigned;
        this.creator = issue.creator;
        this.time = issue.time;
    }
}