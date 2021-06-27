const Intern = require('../lib/Intern');

test('Creates objects from Employee class', () => {
    const intern = new Intern('AJ', 'TOR01', 'abc@gmail.com');

    expect(intern.name).toEqual('AJ');
    expect(intern.id).toEqual('TOR01');
    expect(intern.email).toEqual('abc@gmail.com');

    expect(intern.getName()).toEqual(intern.name);
    expect(intern.getId()).toEqual(intern.id);
    expect(intern.getEmail()).toEqual(intern.email);
})

test('adds school name', () => {
    const intern = new Intern('AJ', 'TOR01', 'abc@gmail.com', 'UoT');

    expect(intern.school).toEqual('UoT');
})

test('Gets the school name', () => {
    const intern = new Intern('AJ', 'TOR01', 'abc@gmail.com', 'UoT');

    expect(intern.getSchool()).toEqual('UoT');
})

test('Gets employee role', () => {
    const intern = new Intern('AJ', 'TOR01', 'abc@gmail.com', 'UoT');

    expect(intern.getRole()).toEqual('Intern');
})