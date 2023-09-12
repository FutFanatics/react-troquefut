import { useNavigate } from "react-router-dom"
import styled from "styled-components";

interface IButton {
    path?: string;
    typeButton?: string;
    children: React.ReactNode;
    margin?: string;
    border?:string;
    color?:string;
    background?: string; 
    
}

interface SButtonProps {
    typeButton?: string;
    background?: string; 
    margin?: string;
    border?:string;
    color?:string;
}

interface ButtonNextProps {
    typeButtonNext?: string;
}

const SButton = styled.button<SButtonProps>`
    background: ${(props) => props.background || '#192C53'};
    border-radius: 50px;
    color: ${(props) => props.color || '#FFF'};
    font-weight: 350;
    border: ${(props) => props.border || 'none'}; 
    width: 380px;
    height: 45px;
    font-size: 16px;
    justify-content: center;
    display: flex;
    font-family: 'gotham';
    align-items: center;
    margin: ${(props) => props.margin || '0px 0px 16px 0px'};

    &:last-child{
        margin-bottom: 0px;
    }

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

    ${props => props.typeButton === 'devolucao' && `
        background-color: #222222;
        margin-top:16px;
    `}
`

export default function Button({ children, path = "", typeButton=""}: IButton) {

    const navigate = useNavigate();

    const handleClick = () => {

        if(path) {
            navigate(path);
        }
    };

    return (
        <SButton onClick={handleClick} typeButton={typeButton}>{ children }</SButton>
    )

}

export const ButtonTroque=styled.div`
    background-color: #222222;
    border-radius: 50px;
    font-family: 'gotham';
    color: #FFF;
    font-weight: 500;
    border: none; 
    width: 320px;
    height: 55px;
    padding: 0px 16px 0px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
`


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

    ${props => props.typeButtonNext === 'filter' && `
        margin-top:0px;
        border-radius:40px;
        width:25%;
        height:50px;
        margin-left:10px;

        svg{
            width:28px;
            fill:#FFF;
        }

        span{
            padding-left:8px
            font-size:17px; 
        }
    `}
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