'use client'

import { useState } from "react"
import Cookies from 'js-cookie'
import { useRouter } from "next/navigation"
import axios from 'axios'

export default function Login(){
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e: any) => {
        e.preventDefault()

        axios.post(`https://hi-clist-be.vercel.app/api/user/login`,{ 
            headers: {
                'Content-Type' : 'application/json',
            },
            email, 
            password
        }).then((res) => {
            Cookies.set('authToken', res.data.accessToken)
            router.push('/dashboard')
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="h-screen bg-gray-200 w-full flex justify-center items-center">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <div className="card-body">
            <h1 className="card-title text-3xl font-bold">Login</h1>
            <form onSubmit={handleLogin}>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="name@flowbite.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required/>
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input 
                        type="password" 
                        id="password" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
      </div>
    )
}