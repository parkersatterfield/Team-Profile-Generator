const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe('Intern Name', () => {
        it('should create a name field that is equal to the employee name input', () => {
            const employeeName = 'John Rogers';
            const employeeID = 215;
            const employeeEmail = 'john@test.com';
            const school = 'Auburn University';

            const intern = new Intern(employeeName, employeeID, employeeEmail, school);

            expect(intern.name).toEqual(employeeName);
        })
    })
    describe('intern ID', () => {
        it('should create a ID field that is equal to the employee ID input', () => {
            const employeeName = 'John Rogers';
            const employeeID = 215;
            const employeeEmail = 'john@test.com';
            const school = 'Auburn University';

            const intern = new Intern(employeeName, employeeID, employeeEmail, school);

            expect(intern.id).toEqual(employeeID);
        })
    })
    describe('Employee email', () => {
        it('should create a email field that is equal to the employee email input', () => {
            const employeeName = 'John Rogers';
            const employeeID = 215;
            const employeeEmail = 'john@test.com';
            const school = 'Auburn University';

            const intern = new Intern(employeeName, employeeID, employeeEmail, school);

            expect(intern.email).toEqual(employeeEmail);
        })
    })
    describe('getRole', () => {
        it('should create a method that returns Intern when called', () => {
            const employeeName = 'John Rogers';
            const employeeID = 215;
            const employeeEmail = 'john@test.com';
            const school = 'Auburn University';

            const intern = new Intern(employeeName, employeeID, employeeEmail, school);

            expect(intern.getRole()).toEqual('Intern');
        })
    })
})