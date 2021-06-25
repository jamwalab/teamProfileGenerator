const Employee = require('../lib/Employee.js');

test('Creates an Employee object', () => {
    const employee = new Employee('AJ', 'TOR01', 'abc@gmail.com');

    expect(employee.name).toEqual('AJ');
    expect(employee.id).toEqual('TOR01');
    expect(employee.email).toEqual('abc@gmail.com');
})

test('Gets employee name', () => {
    const employee = new Employee('AJ', 'TOR01', 'abc@gmail.com');

    expect(employee.getName()).toEqual(employee.name);
})

test('Gets employee id', () => {
    const employee = new Employee('AJ', 'TOR01', 'abc@gmail.com');

    expect(employee.getId()).toEqual(employee.id);
})

test('Gets employee email', () => {
    const employee = new Employee('AJ', 'TOR01', 'abc@gmail.com');

    expect(employee.getEmail()).toEqual(employee.email);
})

test('Gets employee role', () => {
    const employee = new Employee('AJ', 'TOR01', 'abc@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
})