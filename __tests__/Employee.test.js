const Employee = require('../lib/Employee.js');

test('Creates an Employee object', () => {
    const employee = new Employee('AJ', 'TOR01', 'abc@gmail.com');

    expect(employee.name).toBe('AJ');
    expect(employee.id).toBe('TOR01');
    expect(employee.email).toBe('abc@gmail.com');
})

test('Gets employee name', () => {
    const employee = new Employee('AJ', 'TOR01', 'abc@gmail.com');

    expect(employee.getName()).toEqual(employee.name);
})