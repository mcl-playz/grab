"use client"
import React, { useState } from 'react';

export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission
        fetch
    };

    return (
        <div className="bg-[url('https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?cs=srgb&dl=pexels-simon73-1183099.jpg&fm=jpg')] bg-no-repeat bg-cover h-screen flex flex-col items-center justify-center">
            <div className="p-4 flex-grow flex items-center justify-center backdrop-blur-[6px] w-full">
                <div className="p-6 bg-white dark:bg-neutral-900 rounded-lg shadow-lg w-full max-w-xs">
                    <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">Login</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-neutral-300">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none dark:bg-neutral-800 dark:border-neutral-600 dark:text-white"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-neutral-300">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none pr-10 dark:bg-neutral-800 dark:border-neutral-600"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <button type="submit" className="w-full px-4 py-2 rounded-md shadow-md bg-white hover:bg-neutral-200 focus:bg-white shadow-lx dark:bg-black dark:hover:bg-stone-800 dark:focus:bg-black transition-colors duration-300">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
}