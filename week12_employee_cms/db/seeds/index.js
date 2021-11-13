const { connect } = require("../../config/connection");
const { seedDepartments } = require("./department");

require("dotenv").config();




async function main(){


    


    // generate fake data for dept
    seedDepartments(5);

    // generate fake data for roles

    // generate fake data for employees

}


main();