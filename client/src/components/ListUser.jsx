import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import User from '../userStore';

const ListUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        handleGetUsers();
    }, []);

    const handleGetUsers = async () => {
        const response = await User.getUsers();
        setUsers(response.data);
    }

    const handleDeleteUser = async (userId) => {
        const response = await User.deleteUser(userId);
        handleGetUsers();
    }

    return (
        <div>
            <h1>List Users</h1>
            <tabel>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>mobile</th>
                        <th>created_at</th>
                        <th>updated_at</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.mobile}</td>
                                <td>{user.created_at}</td>
                                <td>{user.updated_at}</td>
                                <td>
                                    <Link to={`user/edit/${user.id}`}>Edit</Link>
                                    <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </tabel>
        </div>
    )
}

export default ListUser