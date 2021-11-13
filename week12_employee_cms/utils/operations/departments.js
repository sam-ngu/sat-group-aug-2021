const { connect, SCHEMA: SCHEMA } = require("../../config/connection");



async function clearAllDepartments(){
    
    const query = "TRUNCATE `" + SCHEMA + "`.`departments`";
    const connection = await connect();
    
    await connection.execute("SET FOREIGN_KEY_CHECKS=0;");
    const result = await connection.execute(query);
    await connection.execute("SET FOREIGN_KEY_CHECKS=1;");

    return result[0];
}

// create dept
async function createDepartment(name) {
    // logic
    const connection = await connect();

    const query = `INSERT INTO \`${SCHEMA}\`.\`departments\` (\`name\`) VALUES (\'${name}\');`;
    const result = await connection.execute(query);

    return result[0];
    
}

// update dept
function updateDepartment(id, newName) {
    // logic
}

// read dept
function getDepartments() {
    // logic
}

// delete dept
function deleteDepartment(id){
    // logic
}


module.exports = {
    createDepartment,
    updateDepartment,
    getDepartments,
    deleteDepartment,
    clearAllDepartments,
}
