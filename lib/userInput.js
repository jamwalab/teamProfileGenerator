const inquirer = require('inquirer');
const fs = require("fs");
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const generateTemplate = require('../src/pageTemplate');


//-----USER INPUT CLASS-----//
class UserInput {
    constructor() {
        this.manager = [];
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
                        //adds it to the array
                        const {name, id, email, officeNumber} = teamDetails;
                        this.manager.push(new Manager(name, id, email, officeNumber));
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
                        const {name, id, email, github} = teamDetails;
                        this.engineer.push(new Engineer(name, id, email, github));
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
                        const {name, id, email, school} = teamDetails;
                        this.intern.push(new Intern(name, id, email, school));
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
                    this.buildPage()
                }
            })
    }

    buildPage() {
        //console.log(this.manager, this.engineer, this.intern)
        const teamData = {
            manager: this.manager,
            engineer: this.engineer,
            intern: this.intern
        }
        const pageHTML = generateTemplate(teamData);
        //console.log(pageHTML);
        fs.writeFile('./dist/index.html', pageHTML, err => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('index.html was generated successfully!!')
        })
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('style.css was copied successfully!!')
        })
    }
}

module.exports = UserInput;