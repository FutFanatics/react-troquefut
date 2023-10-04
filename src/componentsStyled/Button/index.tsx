import { ClassNames } from "@emotion/react";
import { useNavigate } from "react-router-dom"
import styled from "styled-components";

interface IButton {
    className?:string;
    path?: string;
    typeButton?: string;
    children: React.ReactNode;
    margin?: string;
    border?:string;
    color?:string;
    onClick?: () => void;
    background?: string; 
    borderRadius?:string;   
    width?:string;
    height?: string;
    type?: string; 
}

interface SButtonProps {
    typeButton?: string;
    background?: string; 
    margin?: string;
    border?:string;
    color?:string;
    borderRadius?:string;
    width?:string;
    className?:string;
    height?: string; 
}

interface ButtonNextProps {
    typeButtonNext?: string;
}

const SButton = styled.button<SButtonProps>`
    background: ${(props) => props.background || '#192C53'};
    border-radius: ${(props) => props.borderRadius || '50px'};
    color: ${(props) => props.color || '#FFF'};
    font-weight: 350;
    border: ${(props) => props.border || 'none'}; 
    width: 380px; 
    height: ${(props) => props.height || '45px'};   
    font-size: 16px;
    justify-content: center;
    display: flex;
    font-family: 'gotham';
    align-items: center;
    margin: ${(props) => props.margin || '0px 0px 16px 0px'};

    

    a{
        color: #fff;
        text-decoration: none;
        width: 100%;
        
        text-align: center;

        &:hover{
            color: #fff;
        }
    }

    span{
        padding-left: 8px;
    }

    @media screen and (max-width: 768px) {
        width: 300px;
    }

    ${props => props.typeButton === 'devolucao' && `
        background-color: #222222;
        margin-top:16px;
    `}

    ${props => props.typeButton === 'payment' && `
        background-color: transparent;
        width:auto;
        padding:0px;
        font-size:18px;
        border:none;
        color:#000;
        margin:0px 16px;


        &.active{
            color:#192c53;
            font-weight:600;
            text-decoration:underline;
        }
    `}
    
`

export default function Button({ children, path = "", typeButton="", background="", border="", color="", margin="", onClick, borderRadius="", height="", className=""}: IButton) {

    const navigate = useNavigate();

    const handleClick = () => {

        if(path) {
            navigate(path);
        }
        if (onClick) {
            onClick(); 
          }
    };

    return (
        <SButton onClick={handleClick} typeButton={typeButton} background={background} border={border} color={color} margin={margin} borderRadius={borderRadius} height={height} className={className}>{ children }</SButton>
    )

}




export const ButtonNext=styled.div<ButtonNextProps>`
    background-color: #192C53;
    border-radius: 10px;
    font-family: 'gotham';
    color: #FFF;
    font-weight: 500;
    border: none; 
    width: 200px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
    margin-bottom: 16px;

    ${props => props.typeButtonNext === 'more' && `
        margin-top:0px;
        border-radius:8px;
        width:120px;
        height:40px;
        margin-left:10px;
        font-size:14px;
    `}
    ${props => props.typeButtonNext === 'order' && `
        width:170px;
        height:50px;
        margin-bottom:0px;
    `}
`