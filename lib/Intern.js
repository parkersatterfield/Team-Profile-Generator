//Import Employee class
const Employee = require('./Employee');
// Constructor function for Intern subclass
class Intern extends Employee {
    constructor (school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return 'Intern';
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;