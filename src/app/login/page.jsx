"use client"

import React, { useState } from 'react'
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react';

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const { data: session } = useSession();
    if (session) router.replace('welcome');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await signIn("credentials", {
                email, password, redirect: false
            });

            if (res.error) {
                setError("Invalid credentials");
                return;
            }

            router.replace("welcome");
        } catch(error) {
            console.error("Error during login:", error);
            setError("An error occurred during login.");
        }
    }

    return (
        <Container>
            <Navbar />
            <div className='flex-grow flex items-center justify-center bg-gray-100'>
                <div className='w-full max-w-md bg-white shadow-xl p-8 rounded-xl'>
                    <h3 className='text-3xl font-bold text-center mb-6'>Login to Your Account</h3>
                    <form onSubmit={handleSubmit} className='space-y-4'>
                        {error && (
                            <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative' role="alert">
                                <span className="block sm:inline">{error}</span>
                            </div>
                        )}
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
                        <button 
                            type='submit' 
                            className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300'
                        >
                            Sign In
                        </button>
                    </form>
                    <p className='mt-4 text-center'>
                        Don't have an account? <Link href="/register" className='text-blue-500 hover:underline'>Register</Link>
                    </p>
                </div>
            </div>
            <Footer />
        </Container>
    )
}

export default LoginPage