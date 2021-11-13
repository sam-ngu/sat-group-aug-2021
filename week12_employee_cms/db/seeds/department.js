const faker = require('faker');
const { createDepartment, clearAllDepartments } = require('../../utils/operations/departments');

// CRUD



async function seedDepartments(num = 3){

    await clearAllDepartments();

    for (let index = 0; index < num; index++) {
        
        // generate a fake dept name    
        const dept = faker.commerce.department();


        // call the create dept function
        const created  = await createDepartment(dept);


        
    }


}

module.exports = {
    seedDepartments
}

