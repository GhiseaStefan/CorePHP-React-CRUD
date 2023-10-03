import axios from 'axios';
import SERVER from './config';

class User {
    static async getUsers() {
        try {
            const response = await axios.get(`${SERVER}/api/users`);
            return response;
        } catch (err) {
            throw err;
        }
    }

    static async getUser(userId) {
        try {
            const response = await axios.get(`${SERVER}/api/user/${userId}`);
            return response;
        } catch (err) {
            throw err;
        }
    }

    static async deleteUser(userId) {
        try {
            const response = await axios.delete(`${SERVER}/api/user/delete/${userId}`);
            return response;
        } catch (err) {
            throw err;
        }
    }

    static async createUser(inputs) {
        try {
            const response = await axios.post(`${SERVER}/api/user/create`, inputs);
            return response;
        } catch (err) {
            throw err;
        }
    }

    static async updateUser(userId, inputs) {
        try {
            const response = await axios.put(`${SERVER}/api/user/${userId}/edit`, inputs);
            return response;
        } catch (err) {
            throw err;
        }
    }
}

export default User;