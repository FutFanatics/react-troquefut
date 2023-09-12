import React from 'react';
interface VerifiqueProps{
    className?:string;
    width?:number;
    fill?:string;
    height?:string;
}

const IconVerifique: React.FC<VerifiqueProps> = ({ className , width, height }) => (
    <svg className={className} width={width} height={height} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.9999 27.3346L18.6666 25.0013L22.9999 20.668L18.6666 16.3346L20.9999 14.0013L25.3333 18.3346L29.6666 14.0013L31.9999 16.3346L27.6666 20.668L31.9999 25.0013L29.6666 27.3346L25.3333 23.0013L20.9999 27.3346ZM24.2916 12.3346L18.3749 6.41797L20.7083 4.08464L24.2499 7.6263L31.3333 0.542969L33.6666 2.91797L24.2916 12.3346ZM0.333252 22.3346V19.0013H15.3333V22.3346H0.333252ZM0.333252 9.0013V5.66797H15.3333V9.0013H0.333252Z" fill="#1C1B1F"/>
    </svg>
    


    );
export default IconVerifique;