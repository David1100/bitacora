"use client"
import Image from "next/image";
import { RiLock2Fill, RiMailFill } from "react-icons/ri";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from 'react-toastify';

// const [ showPassword,setShowPaswword ] = useState(false)

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if([email,password].includes("")){
            toast.error("Todos los campos son obligatorios",{
                theme: "dark"
            });
            return
        }
    }    

    return <section className="h-full flex flex-col items-center justify-center">
        <div className="relative w-36 h-28 mb-6">
            <Image src='/user_login.svg' alt="Wallpaper" fill></Image>
        </div>

        <div className="w-full max-w-md">
            <form onSubmit={handleSubmit} className="w-full" action="#">
                <div className="relative mb-3">
                    <input type="text" className="py-2 pl-4 pr-9 w-full bg-gray-700 outline-none rounded-xl" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 " >
                        <RiMailFill />
                    </button>
                </div>
                <div className="relative mb-4">
                    <input type="text" className="py-2 pl-4 pr-9 w-full bg-gray-700 outline-none rounded-xl" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 " >
                        <RiLock2Fill />
                    </button>
                </div>
                <div className="flex justify-end mb-10">
                    <Link href="./forgot_password"><p className="text-xs">Olvido su contraseña?</p></Link>
                </div>
                <div className="w-full pb-2">
                    <button className="w-full rounded-xl bg-red-500 p-2 hover:scale-105 transition-all">Ingresar</button>
                </div>
                <div className="text-center text-xs mt-3">
                    <Link href="./register">Quiero registrarme</Link>
                </div>
            </form>
        </div>
    </section>
}