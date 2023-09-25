import { registrationUserDB, getUserByEmailDB } from '../repository/api.repository'
import bcrypt from 'bcrypt';

const { registrationUserDB, getUserByEmailDB } = require('../repository/api.repository');
const bcrypt = require('bcrypt');

const salt = 7;
async function registrationUser(name, surname, email, password) {
    const foundUser = await getUserByEmailDB(email)
    if (foundUser) {
        throw new Error('This user already exists');
    }
    const hashPassword = await bcrypt.hash(password, salt)
    const result = await registrationUserDB(name, surname, email, hashPassword);

    return result;
}

async function authorizationUser(email, password) {
    const foundUser = await getUserByEmailDB(email);
    if (!foundUser) {
        throw new Error('This user does not exist');
    }

    const isMatched = await bcrypt.compare(password, foundUser.password);
    if (!isMatched) {
        throw new Error('Incorrect password');
    }

    return foundUser;
} 

module.exports = { registrationUser, authorizationUser };
