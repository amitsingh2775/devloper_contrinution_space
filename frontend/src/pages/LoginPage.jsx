import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('http://localhost:5000/api/auth/login', { email, password });
    localStorage.setItem('token', data.token);
    window.location.href = '/'; // Redirect to homepage
  };

  return (
    <div className="p-4">
        
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
