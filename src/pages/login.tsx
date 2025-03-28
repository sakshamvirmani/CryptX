'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Hardcoded credentials
    const validEmail = 'km5861@srmist.edu.in';
    const validPassword = '1234';

    


    if (email === validEmail && password === validPassword) {
      console.log('Login successful');
      setError('');
      router.push('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 
      bg-[url('/background.png')] bg-cover bg-center bg-fixed">
      <h1 className="text-4xl font-bold text-black text-center mb-12">
        Welcome to CryptX
      </h1>
      <p className="text-black text-center mb-16">
        We are your one and only platform to manage and discover your cryptocurrency.
      </p>
      <div className="bg-yellow-100 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Log in</h2>
        
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 rounded-md transition"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
