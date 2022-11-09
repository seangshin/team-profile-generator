//Packages required for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

var globalhtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!--CDN link to Bootstrap 4.3.1-->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
  <title>My Team Website</title>
</head>
<body class="container-fluid">
  <header class="jumbotron text-center display-4">My Team</header>
  
  <div class="row d-flex justify-content-center">`

function init() {
  getManager();
} init();

function generateHTML() {
  globalhtml = globalhtml + `</div>
  </div>
  
</body>
</html>`;

  fs.writeFile("./dist/index.html", globalhtml, (err) => {
    err ? console.log(err) :console.log('Successfully created index.html!')
  });
}

//**Prompt user for their team members and information
//**Generate HTML file based on user input
//Invokes the inquirer and prompt method to get user input from the command line interface
//inquirer.prompt passes in questions (in the form of an array of objects) and returns a promise
function getManager() {
  inquirer
  .prompt([
    {
      type: "input",
      message: "What is the team manager's name?",
      name: "name",
    },    
    {
      type: "input",
      message: "What is the team manager's employee ID?",
      name: "id",
    },  
    {
      type: "input",
      message: "What is the team manager's email address?",
      name: "email",
    },     
    {
      type: "input",
      message: "What is the team manager's office number?",
      name: "officeNumber",
    }, 
  ])
  //for a resolved promise, pass in the answers (object) given by prompt
  .then((answers) => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);//declares output and stores string (template literal) from generateREADME function
    const description = "Office Number";
    const attribute = answers.officeNumber;
    addCard(manager, globalhtml, manager.getRole(), description, attribute);
    //console.log(manager);
    optionMenu();
    
  })
  //for a rejected promise, output an error
  .catch((error) => console.error(error));
}

//function to prompt user for options
function optionMenu () {
  inquirer
  .prompt([
    {
      type: "list",
      message: "Select an option",
      name: "option",
      choices: ["Add engineer", "Add intern", "Finish building team"],
    }
  ])
  .then((result) => {
    console.log(result.option);
    if(result.option === "Add engineer") {
      getEngineer();
    } else if (result.option === "Add intern") {
      getIntern();
    } else if (result.option === "Finish building team") {
      generateHTML();
    }
    
  })
  .catch((error) => console.error(error));
}

function getEngineer() {
  inquirer
  .prompt([
    {
      type: "input",
      message: "What is the engineer's name?",
      name: "name",
    },    
    {
      type: "input",
      message: "What is the engineer's employee ID?",
      name: "id",
    },  
    {
      type: "input",
      message: "What is the engineer's email address?",
      name: "email",
    },     
    {
      type: "input",
      message: "What is the engineer's github?",
      name: "github",
    }, 
  ])
  //for a resolved promise, pass in the answers (object) given by prompt
  .then((answers) => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);//declares output and stores string (template literal) from generateREADME function
    const description = "GitHub";
    const attribute = `<a href="https://github.com/${answers.github}">${answers.github}</a>`;
    addCard(engineer, globalhtml, engineer.getRole(), description, attribute);
    optionMenu();
  })
  //for a rejected promise, output an error
  .catch((error) => console.error(error));
}

function getIntern() {
  inquirer
  .prompt([
    {
      type: "input",
      message: "What is the intern's name?",
      name: "name",
    },    
    {
      type: "input",
      message: "What is the intern's employee ID?",
      name: "id",
    },  
    {
      type: "input",
      message: "What is the intern's email address?",
      name: "email",
    },     
    {
      type: "input",
      message: "What is the intern's school?",
      name: "school",
    }, 
  ])
  //for a resolved promise, pass in the answers (object) given by prompt
  .then((answers) => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);//declares output and stores string (template literal) from generateREADME function
    const description = "School";
    const attribute = answers.school;
    addCard(intern, globalhtml, intern.getRole(), description, attribute);
    optionMenu();
  })
  //for a rejected promise, output an error
  .catch((error) => console.error(error));
}

const addCard = ({name, id, email}, html, role, description, attribute) => 
  globalhtml = html + `<div class="mx-auto">
  <div class="card bg-light mb-3" style="width: 18rem;">
    <div class="card-header">
      <h1 class="card-title">${name}</h1>
      <p id="title">${role}</p>
    </div>
    <div class="card-body text-secondary">
      <p class="card-text">ID: ${id}</p>
      <p class="card-text">Email: <a href="mailto:${email}">${email}</a></p>
      <p class="card-text">${description}: ${attribute}</p>
    </div>
  </div>
</div>`;