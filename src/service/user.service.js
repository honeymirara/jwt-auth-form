const { createUserDB, getAllUsersDB, getUserByIdDB, updateUserByIdDB } = require('../repository/user.repository');

async function createUser(name, surname, email, password) {
    const result = await createUserDB(name, surname, email, password);
    return result;
}

async function getAllUsers() {
    const result = await getAllUsersDB()
    return result;
}

async function getUserById(id) {
    const result = await getUserByIdDB(id)
    return result;
}

async function updateUserById( name, surname, email, password, id){
    const result = await updateUserByIdDB(name, surname, email, password, id)
    return result;
}

module.exports = { createUser, getAllUsers, getUserById, updateUserById }