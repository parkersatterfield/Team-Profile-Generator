//Import Employee class
const Employee = require('./Employee');
// Constructor function for Manager subclass
class Manager extends Employee {
    constructor (officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;
