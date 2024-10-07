import { useState } from "react";
import axios from "axios";

const Login=()=>{
    const [username, setUsername] = useState('');
    const [password, setpassword] = useState('');

    const handleLogin = async(e: React.FormEvent)=>{
        e.preventDefault();
        const response = await fetch('/api/login',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({username,password}),
        });
    };

    return (
        <form onSubmit={handleLogin}>
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
            <button type="submit">login</button>
        </form>
    );
};

export default Login;