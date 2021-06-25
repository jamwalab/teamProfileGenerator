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