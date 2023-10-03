import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import User from '../userStore';

export const EditUser = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        mobile: ""
    });
    const { userId } = useParams();

    useEffect(() => {
        handleGetUser();
    }, []);

    const handleGetUser = async () => {
        const response = await User.getUser(userId);
        setInputs(response.data);
    }

    const handleUpdateUser = async (e) => {
        e.preventDefault();
        const response = await User.updateUser(userId, inputs);
        navigate('/');
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prevState) => ({ ...prevState, [name]: value }));
    }

    return (
        <div>
            <h1>Edit User</h1>
            <form onSubmit={handleUpdateUser}>
                <label>Name: </label>
                <input type='text' name='name' value={inputs.name} onChange={handleChange} />
                <br />
                <label>Email: </label>
                <input type='email' name='email' value={inputs.email} onChange={handleChange} />
                <br />
                <label>Mobile: </label>
                <input type='text' name='mobile' value={inputs.mobile} onChange={handleChange} />
                <br />
                <button>Save</button>
            </form>
        </div>
    )
}
