import { useNavigate } from "react-router-dom"
import styled from "styled-components";


interface STitleProps{
   typeTitle?:string;
}

interface STextParagraph{
   typeParagraph?:string;
}

interface STitleHeader{
   typeOption?:string;
}

export const STitle =styled.h1<STitleProps>`
    font-size: 42px;
    color: #000;
    font-weight: 700;
    margin-bottom: 16px;
    text-align: center;
    margin-top: 16px;
    font-family: 'Gotham';

    ${props => props.typeTitle === 'instruction' && `
        text-transform:uppercase;
        display:flex;
        align-items:center;
        justify-content:center;
        text-align:center;
        margin-bottom:0px;
    `}
    ${props => props.typeTitle === 'instructionminor' &&`
        text-transform:uppercase;
        display:flex;
        align-items:center;
        justify-content:center;
        text-align:center;
        margin-bottom:-15px;
    `}
     ${props => props.typeTitle === 'sublinhado' && `
        color:#192C53;
        text-align:center;
    `}
    ${props => props.typeTitle === 'duvida' && `
        font-size: 18px;
        color:#000;
        font-weight:500;
        padding-top:16px;
      `}
    ${props => props.typeTitle === 'dados' && `
        font-size: 18px;
        color:#000;
        font-weight:500;
        padding-top:0px;
        padding-bottom:0px;
        padding-left:8px;
      `} 
    ${props => props.typeTitle === 'inative' && `
        font-size: 18px;
        color:#a8a8a8;
        font-weight:500;
        padding-top:0px;
        padding-bottom:0px;
        padding-left:8px;
      `} 

    ${props => props.typeTitle === 'locker' && `
            font-size: 16px;
            color:#000;
            font-weight:500;
            text-align:start;
            padding-top:0px;
            margin-top:0px;
            margin-bottom:0px;
            padding-bottom:6px;
        `}
    ${props => props.typeTitle === 'dadosPedido' && `
            font-size: 16px;
            color:#000;
            font-weight:500;
            text-align:start;
            padding-top:0px;
            margin-top:0px;
            margin-bottom:0px;
            padding-bottom:6px;
        `}
 `

 export const STextParagraph=styled.p<STextParagraph>`
    font-size: 20px;
    color: #000;
    font-weight: 350;
    font-family: 'Gotham';
    text-align: center;
    padding-bottom:32px;

    ${props => props.typeParagraph === 'paragraphinstruction' && `
        font-weight:500;
        font-size:18px;
    `}
    ${props => props.typeParagraph === 'paragraphduvida' && `
        font-weight:350;
        font-size:16px;
        padding-bottom:0px;
    `}
    ${props => props.typeParagraph === 'paragraphenvio' && `
        font-weight:500;
        font-size:16px;
    `}
    ${props => props.typeParagraph === 'paragraphclique' && `
        font-weight:500;
        font-size:16px;
        padding-bottom:16px;
    `}
    ${props => props.typeParagraph === 'paragraphpedido' && `
        text-align:start;
        font-weight:350;
        margin-bottom:0px;
        padding-bottom:8px;
        font-size:14px;

        &:last-child{
            padding-bottom:0px;
        }
    `}
 `


 export const STitleHeader = styled.span<STitleHeader>`
      font-size: 18px;
      font-family: 'gotham';
      font-weight: 500;

      ${props => props.typeOption === 'inative' && `
        color:#777777;
    `}
     ${props => props.typeOption === 'nameForms' && `
        color:#000;
    `}
 `