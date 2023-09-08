"use client"

import { useEffect, useState } from "react";
import Cookies from 'js-cookie'
import { useRouter } from "next/navigation";
import axios  from 'axios';


export default function Sample(){
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')

    const getData = async (e :any) => {
        e.preventDefault()

        axios.post('https://hi-clist-be.vercel.app/api/user/login', {
            headers :
            {
                'Content-Type' : 'application/json',
            },
            'email' : email,
            'password' : password
        }).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        }) 

    }

    return (
        <form onSubmit={getData}>
            <input 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text" 
                name="email" 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
            <br />
            <input 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="password" 
                name="password" 
                value={password}
                onChange={(e)=> setPass(e.target.value)}
                />
            <br />
            <input className="btn btn primary" type="submit" value="login"/>
        </form>
    )
}