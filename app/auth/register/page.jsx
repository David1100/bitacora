"use client"
import Image from "next/image";
import { RiFileUserFill, RiMailFill, RiPhoneFill } from "react-icons/ri";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Pasises from './component/paises.jsx'
import { toast } from 'react-toastify';

export default function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const [txtIndicative,setIndicative] = useState([])

    const onSubmit = handleSubmit((data) => {
        onSave(data)
    })


    const onSave = async (data) => {
        try {
            const response = await fetch('https://bitacoraenlinea.com/backend/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    txt_name: data.name,
                    txt_lastname: data.lastname,
                    txt_email: data.email,
                    txt_phone: data.phone,
                    txt_country: 'COLOMBIA',
                    txt_indicative: txtIndicative
                })
            });
    
            if (!response.ok) {
                throw new Error('Error al enviar los datos');
            }
    
            const responseData = await response.json();
            toast.error(`Respuesta del servidor:${responseData}`,{
                theme: "dark"
            });    
            res.redirect('/login');         
            
        } catch (error) {
            toast.error(`Error al enviar la solicitud:${error}`,{
                theme: "dark"
            });            
        }
    };
  
    const addIndicative = (indicative) => {
        setIndicative(indicative)
    }

    return <section className="h-full flex flex-col items-center justify-center">
        <div className="relative w-36 h-28 mb-6">
            <Image src='/user_register.svg' alt="Wallpaper" fill></Image>
        </div>

        <div className="w-full max-w-md">
            <form className="w-full" onSubmit={onSubmit}>
                <div className="mb-3">
                    <div className="relative">
                        <input type="text" className="py-2 pl-4 pr-9 w-full bg-gray-700 outline-none rounded-xl" placeholder="Nombres"  {...register("nombres", { required: true })} />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 " >
                            <RiFileUserFill />
                        </div>
                    </div>
                    {errors.nombres && <span className="text-red-500 text-xs ml-2">Campo es requerido.</span>}
                </div>
                <div className="mb-3">
                    <div className="relative">
                        <input type="text" className="py-2 pl-4 pr-9 w-full bg-gray-700 outline-none rounded-xl" placeholder="Apellidos"  {...register("apellidos", { required: true })} />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 " >
                            <RiFileUserFill />
                        </div>
                    </div>
                    {errors.apellidos && <span className="text-red-500 text-xs ml-2">Campo es requerido.</span>}
                </div>
                <div className="mb-3">
                    <div className="relative">
                        <input type="text" className="py-2 pl-4 pr-9 w-full bg-gray-700 outline-none rounded-xl" placeholder="E-mail"  {...register("email", {
                            required: "Campo es requerido.",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Email no es válido."
                            }
                        })} />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 " >
                            <RiMailFill />
                        </div>
                    </div>
                    {errors.email && <span className="text-red-500 text-xs ml-2">{errors.email.message}</span>}
                </div>
                <div className="mb-3">
                    <div className="relative">
                        <input
                            type="number"
                            className="py-2 pl-4 pr-9 pl-[60px] w-full bg-gray-700 outline-none rounded-xl"
                            placeholder="Teléfono"
                            {...register("telefono", {
                                required: "Campo es requerido.",
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "Teléfono no es válido."
                                }
                            })}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                            <RiPhoneFill />
                        </div>
                        <div className="absolute left-1 top-1/2 -translate-y-1/2">
                            <Pasises addIndicative = {addIndicative}/>
                        </div>
                    </div>
                    {errors.telefono && <span className="text-red-500 text-xs ml-2">{errors.telefono.message}</span>}
                </div>

                <div className="w-full pb-2">
                    <button className="w-full rounded-xl bg-red-500 p-2 hover:scale-105 transition-all">Registrarme</button>
                </div>
                <div className="text-center text-xs mt-3">
                    <Link href="./login">Volver al login</Link>
                </div>
            </form>
        </div>
    </section>
}