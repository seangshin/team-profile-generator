//Packages required for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");

//**Prompt user for their team members and information
//**Generate HTML file based on user input
//Invokes the inquirer and prompt method to get user input from the command line interface
//inquirer.prompt passes in questions (in the form of an array of objects) and returns a promise
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
      name: "office",
    }, 
    {
      type: "list",
      message: "Choose a license",
      name: "license",
      choices: ["Add Engineer", "Add intern", "Done"],
    },
  ])
  //for a resolved promise, use the generateREADME function and pass in the answers (object) given by prompt
  .then((answers) => {
    console.log(answers.name, answers.email);
    const manager = new Employee();//declares output and stores string (template literal) from generateREADME function
    console.log(manager.getName());
    /*
    //Create/write to file "README.md" by passing in string (template literal) stored in output
    fs.writeFile("README.md", output, (error) =>
      error ? console.log(error) : console.log ("README.md file generated!")
    );
    */
  })
  //for a rejected promise, output an error
  .catch((error) => console.error(error));