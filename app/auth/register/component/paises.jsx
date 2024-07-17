import { useState, useEffect } from 'react';
import indicativos from '../../../../public/indicativos.json';
import { RiArrowDropDownFill, RiArrowDropUpFill } from "react-icons/ri";

export default function Paises({ addIndicative }) {
    const [toggleCountry, setToggleCountry] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState({
        pais: 'Colombia',
        codigo: '+57',
        bandera: 'https://flagcdn.com/co.svg',
        abreviatura: 'Co'
    });

    const chooseCountry = (country) => {
        setToggleCountry(false);
        setSelectedCountry(country);
        addIndicative(country); // Envía el país seleccionado al componente padre
    }

    useEffect(() => {
        addIndicative(selectedCountry); // Asegúrate de enviar el país inicial al cargar
    }, []);    

    return (
        <>
            <button onClick={() => setToggleCountry(prev => !prev)} type='button' className='py-3 pl-4 pr-1 bg-gray-700 outline-none rounded-xl flex justify-between items-center'>
                <img src={selectedCountry.bandera} alt="" width={18} />
                {
                    !toggleCountry ? (
                        <RiArrowDropUpFill />
                    ) : (
                        <RiArrowDropDownFill />
                    )
                }
            </button>
            {
                toggleCountry && (
                    <ul className='absolute flex flex-col items-center rounded-xl bg-slate-700 px-1 py-2 mt-1 w-[80px] h-[152px] overflow-auto overflow-x-hidden'>
                        {indicativos.map((element, index) => (
                            <div className='flex w-full justify-between p-2 cursor-pointer rounded-xl hover:bg-gray-800' key={index} onClick={() => chooseCountry(element)}>
                                <p className='text-[9px]'>{element.abreviatura}</p>
                                <img src={element.bandera} alt="" width={25} className='pr-1' />
                            </div>
                        ))}
                    </ul>
                )
            }
        </>
    );
}
