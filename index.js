// App imports
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

inquirer.registerPrompt('recursive', require('inquirer-recursive'));

// Prompt User for Team Inputs
getInput = () => {
    // inquirer.prompt([
    //     {
    //         type: 'input',
    //         name: 'Name',
    //         message: 'Employee Name: '
    //     },
    //     {
    //         type: 'input',
    //         name: 'email',
    //         message: 'Employee email: '
    //     },
    //     {
    //         type: 'input',
    //         name: 'id',
    //         message: 'Employee ID: '
    //     },
    //     {
    //         type: 'list',
    //         choices: [Manager, Engineer, Intern],
    //         name: 'role',
    //         message: 'Employee Role: '
    //     }
    // ])
    inquirer.prompt([{
        type: 'recursive',
        message: 'Add a team member?',
        name: 'teamMember',
        prompts: [
            {
                type: 'input',
                name: 'Name',
                message: 'Employee Name: '
            },
            {
                type: 'input',
                name: 'email',
                message: 'Employee email: '
            },
            {
                type: 'input',
                name: 'id',
                message: 'Employee ID: '
            },
            {
                type: 'list',
                choices: [Manager, Engineer, Intern],
                name: 'role',
                message: 'Employee Role: '
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Office Number: ',
                when: function (response) {
                    if(response.role == 'Manager'){
                        console.log('hi');
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'Github Username: ',
                when: function (response) {
                    if(response.role == 'Engineer'){
                        console.log('hi');
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'School: ',
                when: function (response) {
                    if(response.role == 'Intern'){
                        console.log('hi');
                        return true;
                    }
                }
            }
        ]
    }])
    // Generate HTML Elements with info from response
    .then((response) => {
        let fileName = './src/index.HTML'
        fs.appendFile(
            fileName,
            `
            <div class="card l3 m6 s12">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            `,
            (err) => {
                if (err) throw err;
            }
        )
    })
}
    
// addMember = () => {
//     inquirer.prompt(
//         {
//             type: 'list',
//             choices: ['yes', 'no'],
//             name: 'addAnother',
//             message: 'Add another team member? '
//         }
//     )
//     .then((addTeamMember) => {
//         if (addTeamMember.addAnother == 'yes') {
//         // Call function to restart prompts
//             getInput();
//         } else {
//             return;
//         }  
//     })
// }

getInput();
// addMember();


