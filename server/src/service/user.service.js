const { createUserDB, getAllUsersDB, getUserByIdDB, updateUserByIdDB, deleteUserByIdDB, getUserByEmailDB } = require('../repository/user.repository');
const bcrypt = require('bcrypt')

const salt = 7;
async function createUser(name, surname, email, password) {
    const foundUser = await getUserByEmailDB(email)
    if (foundUser.length) throw new Error('this user already exists')
    const hashPassword = await bcrypt.hash(password, salt)
    const result = await createUserDB(name, surname, email, hashPassword);

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

async function updateUserById(name, surname, email, password, id) {
    const result = await updateUserByIdDB(name, surname, email, password, id)
    return result;
}

async function deleteUserById(id) {
    const result = await deleteUserByIdDB(id)
    return result;
}




module.exports = { createUser, getAllUsers, getUserById, updateUserById, deleteUserById }