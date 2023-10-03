import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import User from '../userStore';

const CreateUser = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        mobile: ""
    });

    const handleCreateUser = async (e) => {
        e.preventDefault();
        const response = await User.createUser(inputs);
        navigate('/');
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prevState) => ({ ...prevState, [name]: value }));
    }

    return (
        <div>
            <h1>Create User</h1>
            <form onSubmit={handleCreateUser}>
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

export default CreateUser