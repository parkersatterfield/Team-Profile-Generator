const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe('Employee Name', () => {
        it('should create a name field that is equal to the employee name input', () => {
            const employeeName = 'John Rogers';
            const employeeID = 215;
            const employeeEmail = 'john@test.com';

            const employee = new Employee(employeeName, employeeID, employeeEmail);

            expect(employee.name).toEqual(employeeName);
           
        })
    })
    describe('Employee ID', () => {
        it('should create a ID field that is equal to the employee ID input', () => {
            const employeeName = 'John Rogers';
            const employeeID = 215;
            const employeeEmail = 'john@test.com';

            const employee = new Employee(employeeName, employeeID, employeeEmail);

            expect(employee.id).toEqual(employeeID);
        })
    })
    describe('Employee email', () => {
        it('should create a email field that is equal to the employee email input', () => {
            const employeeName = 'John Rogers';
            const employeeID = 215;
            const employeeEmail = 'john@test.com';

            const employee = new Employee(employeeName, employeeID, employeeEmail);

            expect(employee.email).toEqual(employeeEmail);
        })
    })
    describe('getName', () => {
        it('should create a method that returns the employee name when called', () => {
            const employeeName = 'John Rogers';
            const employeeID = 215;
            const employeeEmail = 'john@test.com';

            const employee = new Employee(employeeName, employeeID, employeeEmail);

            expect(employee.getName()).toEqual(employeeName);
        })
    })
    describe('getID', () => {
        it('should create a method that returns the employee ID when called', () => {
            const employeeName = 'John Rogers';
            const employeeID = 215;
            const employeeEmail = 'john@test.com';

            const employee = new Employee(employeeName, employeeID, employeeEmail);

            expect(employee.getId()).toEqual(employeeID);
        })
    })
    describe('getEmail', () => {
        it('should create a method that return the employee email when called', () => {
            const employeeName = 'John Rogers';
            const employeeID = 215;
            const employeeEmail = 'john@test.com';

            const employee = new Employee(employeeName, employeeID, employeeEmail);

            expect(employee.getEmail()).toEqual(employeeEmail);
        })
    })
    describe('getRole', () => {
        it('should create a method that returns employee when called', () => {
            const employeeName = 'John Rogers';
            const employeeID = 215;
            const employeeEmail = 'john@test.com';

            const employee = new Employee(employeeName, employeeID, employeeEmail);

            expect(employee.getRole()).toEqual('Employee');
        })
    })
})