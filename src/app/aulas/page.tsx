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

export default function Aulas() {
    return (
        <div className={'flex justify-between flex-col'}>
            <div className={'bg-sky-600 w-full h-[10vh] flex items-center flex-row p-4 gap-2'}>
                <Image src={QRcode} alt={'icone'} className={'w-16 h-16'}/>
                <div>
                    <Link className={``${moreSugar.className} text-xl``}>Aulas</Link>
                    <Link>Eventos</Link>
                </div>
                <p className={`${moreSugar.className} text-xl`}>QR Class</p>
                <p className={`${inter.className} text-xl`}>Aulas</p>
            </div>
            <div className={'bg-white w-full h-[90vh]'}>
                <p className={'text-black'}>Olá</p>
            </div>
            <div></div>
        </div>
    )
}