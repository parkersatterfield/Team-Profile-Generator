// App imports
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const internList = [];
const internCardList = [];
const managerList = [];
const managerCardList = [];
const engineerList = [];
const engineerCardList = [];

// Add recursive ability to inquirer
inquirer.registerPrompt('recursive', require('inquirer-recursive'));

// Prompt User for Team Inputs
getInput = () => {
    inquirer.prompt([{
        type: 'recursive',
        message: 'Add a team member?',
        name: 'teamMember',
        prompts: [
            {
                type: 'input',
                name: 'name',
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
                when: function (data) {
                    if(data.role == 'Manager'){
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'Github Username: ',
                when: function (data) {
                    if(data.role == 'Engineer'){
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'School: ',
                when: function (data) {
                    if(data.role == 'Intern'){
                        // const intern = new Intern(response.teamMember.name);
                        return true;
                    }
                }
            }
        ]
    }])

    // Generate Team members from classes with info from response
    .then((response) => {
        for (let i=0; i<response.teamMember.length;i++) {
            // creates new employee
            const employee = new Employee(response.teamMember[i].name, response.teamMember[i].id, response.teamMember[i].email);
            // console.log(employee);
            
            // creates new intern
            if (response.teamMember[i].role == 'Intern') {
                const intern = new Intern(response.teamMember[i].name, response.teamMember[i].id, response.teamMember[i].email, response.teamMember[i].school);
                // console.log(intern);
                internList.push(intern);
            // creates new engineer
            } else if (response.teamMember[i].role == 'Engineer') {
                const engineer = new Engineer(response.teamMember[i].name, response.teamMember[i].id, response.teamMember[i].email, response.teamMember[i].github);
                // console.log(engineer);
                engineerList.push(engineer);
                
            // creates new manager
            } else if (response.teamMember[i].role == 'Manager') {
                const manager = new Manager(response.teamMember[i].name, response.teamMember[i].id, response.teamMember[i].email, response.teamMember[i].officeNumber);
                // console.log(manager);
                managerList.push(manager);

            }
        }
        createHTML();       
    })
}

createHTML = () => {
    // HTML Elements with info from response
    let fileName = './src/index.HTML';
    internList.forEach((intern => {
        const internCard = `
        <div class="card" style="width: 18rem;">
            <div class = 'card-body card-head-custom'>
                <h3>${intern.name}</h3>
                <h6>${'Intern'}</h6>
            </div>
            <div class="card-body">
                <p class="card-text">ID: ${intern.id}</p>
                <p class="card-text">email: ${intern.email}</p>
                <p class="card-text">School: ${intern.school}</p>
            </div>
        </div>
        `;
        internCardList.push(internCard);
    }));

    engineerList.forEach((engineer => {
        const engineerCard = `
        <div class="card" style="width: 18rem;">
            <div class = 'card-body card-head-custom'>
                <h3>${engineer.name}</h3>
                <h6>${'Engineer'}</h6>
            </div>
            <div class="card-body">
                <p class="card-text">ID: ${engineer.id}</p>
                <p class="card-text">email: ${engineer.email}</p>
                <p>Github: <a href="www.github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
        `;
        engineerCardList.push(engineerCard);
    }));
    
    managerList.forEach((manager => {
        const managerCard = `
        <div class="card" style="width: 18rem;">
            <div class = 'card-body card-head-custom'>
                <h3>${manager.name}</h3>
                <h6>${'Manager'}</h6>
            </div>
            <div class="card-body">
                <p class="card-text">ID: ${manager.id}</p>
                <p class="card-text">email: ${manager.email}</p>
                <p class="card-text">Office: ${manager.officeNumber}</p>
            </div>
        </div>
        `;
        managerCardList.push(managerCard);
    }));

    fs.writeFile(            
        fileName,
        `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>Team Generator</title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="./style.css">
        </head>
        <body class = 'container'>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                  <h1 class="display-4">Team Profile Generator</h1>
                </div>
            </div>
            <main class = 'row'>
                ${internCardList}
                ${engineerCardList}
                ${managerCardList}
            </main>
        </body>
    </html>
    
        `,
        (err) => {
            if (err) throw err;
        }
    )
}

getInput();
