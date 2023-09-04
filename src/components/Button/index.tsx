import { useNavigate } from "react-router-dom"
import styled from "styled-components";

interface IButton {
    path?: string;
    typeButton?: string;
    children: React.ReactNode;
}

interface SButtonProps {
    typeButton?: string;
}

const SButton = styled.button<SButtonProps>`
    background-color: #192C53;
    border-radius: 50px;
    color: #FFF;
    font-weight: 500;
    border: none; 
    width: 320px;
    height: 55px;
    font-size: 16px;
    padding: 0px 16px 0px 32px;
    display: flex;
    justify-content: space-between;
    font-family: 'gotham';
    align-items: center;

    a{
        color: #fff;
        text-decoration: none;
        width: 100%;
        text-align: center;

        &:hover{
            color: #fff;
        }
    }

    ${props => props.typeButton === 'next' && `
        width: 200px;
        height: 50px;
        border-radius: 10px;
        margin-top: 32px;
        justify-content:center;
        padding:0px;
        font-size:17px;
        margin-bottom:32px;
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


export const ButtonNext=styled.div`
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
`