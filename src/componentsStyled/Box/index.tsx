import { useNavigate } from "react-router-dom"
import styled from "styled-components";



interface SBoxIconFut {
    typeBoxIcon?: string;
}
interface Box{
    typeBox?:string;
    margin?: string;
    className?:string;
}



export const SBoxIconFut = styled.div<SBoxIconFut>`
    background-color: rgba(0, 0, 0, 0.57);
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
    
`


export const Box = styled.div<Box>`
    margin: ${(props) => props.margin || '0px 16px'};
    
    ${props => props.typeBox === 'estorno' && `
        border: 1px solid rgba(0, 0, 0, 0.40);
        display:flex;
        padding:32px 32px;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        border-radius:10px;
        margin-bottom:32px;
        margin-top:32px;
    `}
    ${props => props.typeBox === 'item' && `
        height:210px;
    `}
    ${props => props.typeBox === 'atention' && `
        border-radius: 16px;
        border: 1px solid rgba(25, 44, 83, 0.30);
        width:180px;
        height:160px;
        position:relative;
        display:flex;
        top:15%;
        justify-content:center;
        align-items:center;
        padding:10px 20px 0px 20px;

        svg{
            position:absolute;
            top:-20%;
        }
    `}
    ${props => props.typeBox === 'estorno-content' && `
        border-radius: 8px;
        border: 1px solid #00DF5E;
        padding:16px 24px;
        height:250px;
        margin:8px 0px 0px 0px;

    `}
    ${props => props.typeBox === 'icon' && `
        width:80px;
        height:80px;
        border-radius:100px;
        position: absolute;
        top: -20%;
        margin:0px;
        left: 50%;
        transform:translate(-50%);
        display:flex;
        justify-content:center;
        align-items:center;
        background:#F1F1F1;
        box-shadow:1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    `}
    ${props => props.typeBox === 'envio' && `
        margin: 24px 16px 16px 16px;
        padding:40px 40px;
        height:27rem;
        display:flex;
        flex-direction:column;
        align-items:center;
        border-radius:20px;
        border: 1px solid rgba(0, 0, 0, 0.40);
        background-color:transparent;
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);

        .icon{
            height:75px;
        }

        .box-text{
            padding:40px 0px 30px;
        }
        li{
            padding-top:16px;
        }

        &.selected-box{
            border:3px solid #192C53;
            background-color:#EFF4FF;
        }
    `}
    ${props => props.typeBox === 'productselected' && `
        margin: 32px 12px 16px 0px;
        padding:40px 40px;
        display:flex;
        justify-content:center
        align-items:center;
        border-radius:10px;
        border:1px solid rgba(00,00,00,0.4);

        .icon{
            height:75px;
        }

        .box-text{
            padding:40px 0px 50px;
        }
        li{
            padding-top:16px;
        }

        &:last-child{
            margin: 32px 0px 16px 0px;
        }
        @media screen and (max-width: 768px) {
            padding:10px;
            border:none;
        }
    `}
    ${props => props.typeBox === 'cam' && `
        width:40px;
        height:40px;
        border-radius:100px;
        display:flex;
        justify-content:center;
        align-items:center;
        margin:0px 8px 0px 0px;
        cursor:pointer;
        background:#192c53;
    `}
    ${props => props.typeBox === 'termos' && `
        border:1px solid rgba(0,0,0,0.5);
        padding:40px 30px;
        border-radius:20px;

        .box-content{
            max-height:180px;
            overflow:auto;
            padding:0px 5px;

            &::-webkit-scrollbar {
                width: 10px;
              }
              
            &::-webkit-scrollbar-track {
                background: #D9D9D9;
                border-radius: 10px;
            }
              
              
            &::-webkit-scrollbar-thumb {
               background: #192C53;
               border-radius: 10px;
            }
              
             
            &::-webkit-scrollbar-thumb:hover {
                background: #192C53;
            }
            @media screen and (max-width: 768px) {
                max-height:250px;
             }
        }
                
    `}
    @media screen and (max-width: 768px) {
        ${props => props.typeBox === 'estorno' && `
            border:none;
            padding:32px 8px;
            margin-top:0px;
        `}
        ${props => props.typeBox === 'termos' && `
            @media screen and (max-width: 768px) {
                padding:40px 10px;
                margin:12px 0px 0px 0px;
            }
        `}
    }
`