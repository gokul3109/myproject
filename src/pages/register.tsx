import { useState } from "react";
import axios from "axios";

const Register=()=>{
    const [username, setUsername] = useState('');
    const [password, setpassword] = useState('');

    const handleSubmit = async(e: React.FormEvent)=>{
        e.preventDefault();
        const response = await fetch('/api/register',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({username,password}),
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
            <input 
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;