const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe('manager Name', () => {
        it('should create a name field that is equal to the employee name input', () => {
            const employeeName = 'John Rogers';
            const employeeID = 215;
            const employeeEmail = 'john@test.com';
            const office = 'D125';

            const manager = new Manager(employeeName, employeeID, employeeEmail, office);

            expect(manager.name).toEqual(employeeName);
        })
    })
    describe('manager ID', () => {
        it('should create a ID field that is equal to the employee ID input', () => {
            const employeeName = 'John Rogers';
            const employeeID = 215;
            const employeeEmail = 'john@test.com';
            const office = 'D125';

            const manager = new Manager(employeeName, employeeID, employeeEmail, office);

            expect(manager.id).toEqual(employeeID);
        })
    })
    describe('manager email', () => {
        it('should create a email field that is equal to the employee email input', () => {
            const employeeName = 'John Rogers';
            const employeeID = 215;
            const employeeEmail = 'john@test.com';
            const office = 'D125';

            const manager = new Manager(employeeName, employeeID, employeeEmail, office);

            expect(manager.email).toEqual(employeeEmail);
        })
    })
    describe('getRole', () => {
        it('should create a method that returns manager when called', () => {
            const employeeName = 'John Rogers';
            const employeeID = 215;
            const employeeEmail = 'john@test.com';
            const office = 'D125';

            const manager = new Manager(employeeName, employeeID, employeeEmail, office);

            expect(manager.getRole()).toEqual('Manager');
        })
    })
    describe('office', () => {
        it('should create field equal to the office number input', () => {
            const employeeName = 'John Rogers';
            const employeeID = 215;
            const employeeEmail = 'john@test.com';
            const office = 'D125';

            const manager = new Manager(employeeName, employeeID, employeeEmail, office);

            expect(manager.officeNumber).toEqual('D125');
        })
    })
})