import React, { useState } from 'react';
import useStore from '../store';
import { useNavigate } from 'react-router-dom';

function Login() {
  const login = useStore((s) => s.login);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      login(name.trim());
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-light via-background-DEFAULT to-accent-DEFAULT">
      <form onSubmit={handleSubmit} className="bg-card-glass p-8 rounded-xl shadow-glass flex flex-col gap-4 min-w-[300px]">
        <h2 className="text-2xl font-bold text-primary-dark mb-2">Login</h2>
        <input
          className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter your name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
