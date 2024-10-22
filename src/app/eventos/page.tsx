'use client'
import QRcode from '../public/qrcode.png';
import Image from 'next/image';
import localFont from "next/font/local";
import {Inter} from 'next/font/google';
import Link from 'next/link';

const moreSugar = localFont({
    src: "../fonts/more-sugar.regular.otf",
    variable: "--font-more-sugar",
    weight: "400",
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export default function Eventos() {
    const dataDay = new Date().toLocaleDateString('pt-BR', {timeZone: 'America/Sao_Paulo'});
    return (
        <div className={'flex justify-between flex-col'}>
            <div className={'bg-[rgb(19,112,237)] w-full h-[13vh] flex items-center flex-row p-4 gap-2'}>
                <Image src={QRcode} alt={'icone'} className={'w-[5%] h-[10vh]'}/>
                <p className={`${moreSugar.className} text-xl text-white mr-[4%]`}>QR Class</p>
                <div className={'flex flex-row gap-[15%]'}>
                    <Link className={`${inter.className} text-white`} href={'/aulas'}>Aulas</Link>
                    <Link className={`${inter.className} text-white`} href={''}>Eventos</Link>
                </div>
            </div>
            <div className={'bg-white w-full h-[10vh] flex flex-row pt-[2%] justify-between'}>
                <div className={'w-1/3 flex justify-center'}>
                    <p className={'text-black'}>Data: {dataDay}</p>
                </div>
                <div className={'w-1/3 flex justify-center'}>
                    <p className={'text-black'}>Eventos Marcados</p>
                </div>
                <div className={'w-1/3'}></div>
            </div>
            <div><p>OIIIIIII</p></div>
        </div>
    )
}