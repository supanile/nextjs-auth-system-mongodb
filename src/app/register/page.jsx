"use client"

import React, { useState, useEffect } from 'react'
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from 'next/link'
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation'

function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const { data: session } = useSession();
    if (session) redirect('/welcome');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        if (!name || !email || !password || !confirmPassword) {
            setError("Please complete all inputs.");
            return;
        }

        try {
            const resCheckUser = await fetch("http://localhost:3000/api/usercheck", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email })
            });

            const { user } = await resCheckUser.json();

            if (user) { 
                setError("User already exists.");
                return;
            }

            const res = await fetch("http://localhost:3000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, password
                })
            });

            if (res.ok) {
                setError("");
                setSuccess("User registration successful!");
                e.target.reset();
            } else {
                setError("User registration failed.");
            }

        } catch(error) {
            console.error("Error during registration: ", error);
            setError("An error occurred during registration.");
        }
    }

  return (
    <Container>
        <Navbar />
        <div className='flex-grow flex items-center justify-center bg-gray-100'>
            <div className='w-full max-w-md bg-white shadow-xl p-8 rounded-xl'>
                <h3 className='text-3xl font-bold text-center mb-6'>Create an Account</h3>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    {error && (
                        <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative' role="alert">
                            <span className="block sm:inline">{error}</span>
                        </div>
                    )}

                    {success && (
                        <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative' role="alert">
                            <span className="block sm:inline">{success}</span>
                        </div>
                    )}

                    <input 
                        type="text" 
                        onChange={(e) => setName(e.target.value)} 
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' 
                        placeholder='Enter your name' 
                    />
                    <input 
                        type="email" 
                        onChange={(e) => setEmail(e.target.value)} 
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' 
                        placeholder='Enter your email' 
                    />
                    <input 
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)} 
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' 
                        placeholder='Enter your password' 
                    />
                    <input 
                        type="password" 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' 
                        placeholder='Confirm your password' 
                    />
                    <button 
                        type='submit' 
                        className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300'
                    >
                        Sign Up
                    </button>
                </form>
                <p className='mt-4 text-center'>
                    Already have an account? <Link href="/login" className='text-blue-500 hover:underline'>Login</Link>
                </p>
            </div>
        </div>
        <Footer />
    </Container>
  )
}

export default RegisterPage