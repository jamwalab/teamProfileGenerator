const Engineer = require('../lib/Engineer');

test('Creates objects from Employee class', () => {
    const engineer = new Engineer('AJ', 'TOR01', 'abc@gmail.com');

    expect(engineer.name).toEqual('AJ');
    expect(engineer.id).toEqual('TOR01');
    expect(engineer.email).toEqual('abc@gmail.com');

    expect(engineer.getName()).toEqual(engineer.name);
    expect(engineer.getId()).toEqual(engineer.id);
    expect(engineer.getEmail()).toEqual(engineer.email);
})