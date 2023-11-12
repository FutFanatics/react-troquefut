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

    ${props => props.typeButton === 'select' && `
        width:120px;
        border-radius:5px;
        height:40px;
        background:transparent;
        color:#192C53;
        font-size:15px;
        border:1px #192C53 solid;
        font-weight:400;

        &.clicked{
            background:#192C53;
            color:#fff;
        }
    `}
    ${props => props.typeButton === 'upload' && `
        width:150px;
        border-radius:5px;
        height:40px;
        font-size:15px;
        margin:24px auto 0px auto;
        border:1px #192C53 solid;
        font-weight:400;

        &.clicked{
            background:#192C53;
            color:#fff;
        }
    `}
    ${props => props.typeButton === 'back' && `
        width:80px;
        border-radius:5px;
        height:40px;
        font-size:15px;
        margin:24px auto 0px auto;
        border:1px #192C53 solid;
        font-weight:400;

        &.clicked{
            background:#192C53;
            color:#fff;
        }
    `}
    ${props => props.typeButton === 'select-estorno' && `
            border:none;
            width:auto;
            margin-bottom:0px;
            border-radius:0px;
            background:transparent;
            color:#777;
            height:auto;
            margin 0px 16px 0px 0px;

            &.active{
                color:#192c53;
                font-weight:600;
                border-bottom:#192c53 solid  1px
            }
    `}
    @media screen and (max-width: 768px) {
        ${props => props.typeButton === 'select' && `
            width:120px;
            height:45px;

            &.clicked{
                background:#192C53;
                color:#fff;
                height:45px;
                width:120px;
            }
        `}
        ${props => props.typeButton === 'back' && `
            width:150px;
            border-radius:5px;
            height:40px;
            font-size:15px;
            margin:24px auto 0px auto;
            border:1px #192C53 solid;
            font-weight:400;
        `}
        
    }
    
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
