

function commonQuestions(role="MANAGER"){

    return [
        {
            name: "name",
            type: "input",
            message: `WHAT IS THE ${role} NAME`,
        },
        {
            name: "id",
            type: "input",
            message: `WHAT IS THE ${role} ID`,
        },
        {
            name: "email",
            type: "input",
            message: `WHAT IS THE ${role} email`,
        },
    ];
}

const managerQuestions = [
    ...commonQuestions("MANAGER"),
    {
        name: "officeNumber",
        type: "input",
        message: "WHAT IS THE MANAGERs office nnumber",
    },
];

const internQuestions = [
    ...commonQuestions("INTERN"),
    {
        name: "school",
        type: "input",
        message: "WHAT IS THE School ?",
    },
];

const engineerQuestions = [
    ...commonQuestions("ENGINERR"),
    {
        name: "github",
        type: "input",
        message: "WHAT IS THE gutghub ?",
    },
];

module.exports = {
    managerQuestions,
    engineerQuestions,
    internQuestions,
}
