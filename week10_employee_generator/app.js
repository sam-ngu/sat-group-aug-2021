const inquirer = require('inquirer');
const questions = require('./utils/questions');



function askWhoElse(){
    return inquirer.prompt([
        {
            message: "WHo else u want ot add?",
            name: 'role',
            type: 'list',
            choices: [
                'engineer',
                'intern',
                'stop here pls',
            ]
        }
    ]).then(response => {
        return askNonManager(response.role);
    }).then(response => {

        if(response !== false){
            return askWhoElse();
        }

    })
}

function askNonManager(role){

    if(role.toLowerCase() === 'engineer'){
        return inquirer.prompt(questions.engineerQuestions)
    }
    if(role.toLowerCase() === 'intern'){
        return inquirer.prompt(questions.internQuestions);
    }
    return false;

}

// manager
inquirer.prompt(questions.managerQuestions)
    .then(response => {




        return askWhoElse()
    })


// who else
// add intern or engineer

// no one else
// generate the html


