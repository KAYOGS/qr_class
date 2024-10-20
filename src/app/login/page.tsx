'use client'
import Image from "next/image";
import logo from "../public/logo.png";
import qrcode from "../public/qrcode.png";
import linhas from "../public/linhas.png";
import { useEffect, useState, useCallback } from "react";
import localFont from "next/font/local";
import {Inter} from 'next/font/google'; 
import { headers } from 'next/headers'

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

export default function Login() {
  const [linhasImg, setLinhasImg] = useState("");
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");
  
  const entrarButton = useCallback(() => {
    console.log(matricula, senha);
  }, [matricula, senha])

  useEffect(() => {
    setLinhasImg(linhas.src)
  }, [])

  return (
    <div className="flex justify-between flex-row">
      <div className="w-[50%] h-screen bg-[linear-gradient(to_right,#164094,#e30615)]">
        <div
          className="w-full h-full flex flex-col justify-between p-8"
          style={{
            backgroundImage: `url(${linhasImg})`,
            backgroundSize: 'cover', // ou qualquer ajuste necessário
            backgroundPosition: 'center',
          }}
        >
          <div className="flex flex-row h-fit gap-2">
            <Image src={qrcode} alt="" className="w-16" />
            <div className={`h-full flex flex-col justify-center`}>
              <p className={`${moreSugar.className}`} >QR Class</p>
            </div>
          </div>
          <div className={`flex flex-col justify-center items-center ${inter.className}`}>
            <p className={`text-2xl`}>Que bom te ver novamente!</p>
            <p className={`text-5xl mt-2`}>Seja Bem Vindo!</p>
            <p className={`text-center text-xl mt-6`}>Um software desenvolvido para melhorar o seu<br></br>aprendizado e acelerar o seu dia.</p>
          </div>
          <div></div>
        </div>
      </div>
      <div className="w-[50%] h-screen bg-white flex flex-col justify-between items-center gap-10">
        <div></div>
        <div className={`w-full flex flex-col items-center gap-4`}>
          <div className={'p-10'}>
            <Image src={logo} alt="" className="w-96" />
          </div>
          <input onChange={((e) => {setMatricula(e.target.value)})} type="text" className={`w-96 h-9 p-3 bg-[#d9d9d9] border border-black border-1px rounded-md text-black ${inter.className} input`} placeholder="Matricula"/>
          <br></br>
          <input onChange={(e) => {setSenha(e.target.value)}} type="password" className={`w-96 h-9 p-3 bg-[#d9d9d9] border border-black border-1px rounded-md text-black ${inter.className} input`} placeholder="Senha"/>
          <br />
          <button onClick={entrarButton} className={`w-24 h-8 bg-[#d9d9d9] border border-black border-1px rounded-md text-black hover:bg-[#a6a6a6]`}>
            Entrar
          </button>
        </div>
        <div>
        <p className={`text-black ${inter.className}`}>Made by QRClass</p>
        </div>
      </div>
    </div>
  );
}
