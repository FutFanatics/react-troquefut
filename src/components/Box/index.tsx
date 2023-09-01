import { useNavigate } from "react-router-dom"
import styled from "styled-components";


interface SBox {
    typeBox?: string;
}
interface SBoxIconFut {
    typeBoxIcon?: string;
}

export const BoxIcon = styled.div`
    background-color: #FFF;
    border-radius: 50px;
    color: #FFF;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 20px;
        height: 30px;
    }
`

export const SBoxIconFut = styled.div<SBoxIconFut>`
    background-color: #192C53;
    border-radius: 50px;
    color: #FFF;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg{
        width: 30px;
    }
    ${props => props.typeBoxIcon === 'icondata' && `
        width:40px;
        height:40px;

        span{
            font-size: 24px;
            font-weight: 700;
            color: #d9d9d9;
        }
    `}

    
`

export const BoxTextFooter = styled.div`
    margin-left: 12px;
    
    p{
        font-weight: 600;
        color: #000;
        font-size: 13px;
        font-family: 'Gotham';
    }

`
export const BoxVideo = styled.div`
    height: 100vh;
    background-color:rgba(00,00,00,0.5) ;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
`

export const SBox = styled.div<SBox>`
    background-color:rgba(25, 44, 83, 0.92) ;
    padding:60px 0px;
    border-radius: 0px 80px 80px 0px;
    width: 90%;

    ${props => props.typeBox === 'boxicon' && `
        width:80px;
        height:80px;
        background:#F1F1F1;
        padding:0px;
        border-radius:100px;
        position: absolute;
        top: -20%;
        left: 50%;
        display:flex;
        justify-content:center;
        align-items:center;
        box-shadow:1px 1px 1px 1px rgba(0, 0, 0, 0.2);
        transform: translate(-50%);
        
    `}
     ${props => props.typeBox === 'optionmenu' && `
            margin: 0px 12px;
            width: auto;
            border-radius:none;
            background-color:transparent;
            position:relative;
            padding:0px;

            &::before{
                content: '';
                    position: absolute;
                    bottom:-3px;
                    background-color:#192C53 ;
                    width: 100%;
                    height: 3px;
                    border-radius: 2px;
            }
     `}
     ${props => props.typeBox === 'optionmenu-inative' && `
            margin: 0px 12px;
            width: auto;
            border-radius:none;
            padding:0px;
            background-color:transparent;
     `}
     
`