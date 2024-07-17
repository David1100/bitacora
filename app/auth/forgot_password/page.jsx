import Image from "next/image";
import { RiMailFill } from "react-icons/ri";
import Link from "next/link";

export default function forgot_pass() {
    return <section className="h-full flex flex-col items-center justify-center">
        <div className="relative w-36 h-28 mb-6">
            <Image src='/user_forgot.svg' alt="Wallpaper" fill></Image>
        </div>

        <div className="w-full max-w-md">
            <form className="w-full" action="#">
                <div className="mb-8 grid grid-cols-1">
                    <strong className="text-xl mb-2">¿Olvidaste tu contraseña?</strong>
                    <p className="text-sm">Para recuperar tu contraseña, ingresa el E-mail de tu cuenta.</p>
                </div>
                <div className="relative mb-6">
                    <input type="text" className="py-2 pl-4 pr-9 w-full bg-gray-700 outline-none rounded-xl" placeholder="E-mail" />
                    <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 " >
                        <RiMailFill />
                    </button>
                </div>
                <div className="w-full pb-2">
                    <button type="button" className="w-full rounded-xl bg-red-500 p-2 hover:scale-105 transition-all">Recuperar</button>
                </div>
                <div className="text-center text-xs mt-3">
                    <Link href="./login">Volver al login</Link>
                </div>
            </form>
        </div>
    </section>
}