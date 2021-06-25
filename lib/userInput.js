const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

//-----USER INPUT CLASS-----//
class UserInput {
    constructor() {
        this.manager = {};
        this.engineer = [];
        this.intern = [];
    }
    //-----MAIN LOGIC FOR USER INPUT - GATHERS EMPLOYEE DETAILS-----//
    //role included in the call to this method
    getEmployeeDetails(role) {
        console.log(`<<<<<< ADD TEAM MEMBER >>>>>>`)
        inquirer
            //Common employee details
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
                }
            ])
            .then(teamDetails => {
                //if role is Team Manager
                if (role === 'Team Manager') {
                    //gets officeNumber
                    inquirer.prompt({
                        type: 'text',
                        name: 'officeNumber',
                        message: `Please provide office Number of the ${role}!`
                    })
                    .then(response => {
                        //adds office number
                        teamDetails.officeNumber = response.officeNumber;
                        this.manager = teamDetails;
                        //calls next member selection
                        this.nextMember();
                    })
                } 
                //if role is Engineer
                else if (role === 'Engineer') {
                    //gets github username
                    inquirer.prompt({
                        type: 'text',
                        name: 'github',
                        message: `Please provide github username of the ${role}!`
                    })
                    .then(response => {
                        //adds github username
                        teamDetails.github = response.github;
                        //adds it to the array
                        this.engineer.push(teamDetails);
                        //calls next member selection
                        this.nextMember();
                    })
                }   
                //if role is Intern
                else {
                    //gets school name
                    inquirer.prompt({
                        type: 'text',
                        name: 'school',
                        message: `Please provide school name of the ${role}!`
                    })
                    .then(response => {
                        //adds school name
                        teamDetails.school = response.school;
                        //adds it to the array
                        this.intern.push(teamDetails);
                        //calls next member selection
                        this.nextMember();
                    })
                }
            })
    }

    nextMember() {
        inquirer
            .prompt({
                //select next addition or finish
                type: "list",
                name: "member",
                message: "Please select next member to add or finish building team!",
                choices: ["Engineer", "Intern","Finish building team!"]
            })
            //call made based on selection, role included as parameter
            .then(answer => {
                if (answer.member === "Engineer") {
                    this.getEmployeeDetails(answer.member);
                } else if (answer.member === "Intern") {
                    this.getEmployeeDetails(answer.member);
                } else {
                    console.log(this.manager, this.engineer, this.intern);
                }
            })
    }
}

module.exports = UserInput;