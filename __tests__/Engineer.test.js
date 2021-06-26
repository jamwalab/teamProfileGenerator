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

test('adds GitHub username', () => {
    const manager = new Engineer('AJ', 'TOR01', 'abc@gmail.com', 'jamwalab');

    expect(manager.github).toEqual('jamwalab');
})

test('Gets GitHub', () => {
    const manager = new Engineer('AJ', 'TOR01', 'abc@gmail.com', 'jamwalab');

    expect(manager.getGithub()).toEqual(expect.stringContaining('jamwalab'));
})

test('Gets employee role', () => {
    const manager = new Engineer('AJ', 'TOR01', 'abc@gmail.com', 'jamwalab');

    expect(manager.getRole()).toEqual('Engineer');
})