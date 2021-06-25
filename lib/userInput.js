const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class UserInput {
    constructor() {
        this.manager = {};
        this.engineer = [];
        this.intern = [];
    }
    
    getEmployeeDetails(role) {
        inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'name',
                    message: `Please provide name of the ${role}!`
                },
                {
                    type: 'text',
                    name: 'id',
                    message: `Please provide id of the ${role}!`
                },
                {
                    type: 'text',
                    name: 'email',
                    message: `Please provide email of the ${role}!`
                }/*,
                {
                    type: 'text',
                    name: 'officeNumber',
                    message: 'Please provide office Number of the Team Manager!'
                }*/
            ])
            .then(teamDetails => {
                if (role === 'Team Manager') {
                    inquirer.prompt({
                        type: 'text',
                        name: 'officeNumber',
                        message: `Please provide office Number of the ${role}!`
                    })
                    .then(response => {
                        teamDetails.officeNumber = response.officeNumber;
                        this.manager = teamDetails;
                        console.log(this.manager);
                    })
                } else {
                    return;
                }
            })
    }


}

module.exports = UserInput;