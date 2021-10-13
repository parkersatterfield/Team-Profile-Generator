const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe('Engineer Name', () => {
        it('should create a name field that is equal to the employee name input', () => {
            const employeeName = 'John Rogers';
            const employeeID = 215;
            const employeeEmail = 'john@test.com';
            const github = 'www.github.com';

            const engineer = new Engineer(employeeName, employeeID, employeeEmail, github);

            expect(engineer.name).toEqual(employeeName);
        })
    })
    describe('Engineer ID', () => {
        it('should create a ID field that is equal to the employee ID input', () => {
            const employeeName = 'John Rogers';
            const employeeID = 215;
            const employeeEmail = 'john@test.com';
            const github = 'www.github.com';

            const engineer = new Engineer(employeeName, employeeID, employeeEmail, github);

            expect(engineer.id).toEqual(employeeID);
        })
    })
    describe('Employee email', () => {
        it('should create a email field that is equal to the employee email input', () => {
            const employeeName = 'John Rogers';
            const employeeID = 215;
            const employeeEmail = 'john@test.com';
            const github = 'www.github.com';

            const engineer = new Engineer(employeeName, employeeID, employeeEmail, github);

            expect(engineer.email).toEqual(employeeEmail);
        })
    })
    describe('getRole', () => {
        it('should create a method that returns Engineer when called', () => {
            const employeeName = 'John Rogers';
            const employeeID = 215;
            const employeeEmail = 'john@test.com';
            const github = 'www.github.com';

            const engineer = new Engineer(employeeName, employeeID, employeeEmail, github);

            expect(engineer.getRole()).toEqual('Engineer');
        })
    })
})