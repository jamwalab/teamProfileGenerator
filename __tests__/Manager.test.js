const Manager = require('../lib/Manager');

test('Creates objects from Employee class', () => {
    const manager = new Manager('AJ', 'TOR01', 'abc@gmail.com');

    expect(manager.name).toEqual('AJ');
    expect(manager.id).toEqual('TOR01');
    expect(manager.email).toEqual('abc@gmail.com');

    expect(manager.getName()).toEqual(manager.name);
    expect(manager.getId()).toEqual(manager.id);
    expect(manager.getEmail()).toEqual(manager.email);
})

test('adds phone number', () => {
    const manager = new Manager('AJ', 'TOR01', 'abc@gmail.com', '15678');

    expect(manager.officeNumber).toEqual('15678');
})

test('Gets employee role', () => {
    const manager = new Manager('AJ', 'TOR01', 'abc@gmail.com', '15678');

    expect(manager.getRole()).toEqual('Manager');
})