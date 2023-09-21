import { useNavigate } from "react-router-dom"
import styled from "styled-components";


interface SH1Props{
   typeTitle?:string;
   fontSize?: string;
   margin?: string;
   textTransform?: string;
   fontWeight?: number;
   textAlign?:string;
   color?:string;
}

interface STextParagraph{
   typeParagraph?:string;
   fontWeight?: number;
   color?: string;
   margin?: string;
   fontSize?: string;
   padding?: string;
}

interface SspanText{
   typeOption?:string;
   fontWeight?: number;
   fontSize?:string;
   padding?: string;
}

export const SH1 =styled.h1<SH1Props>`
    font-size: ${(props) => props.fontSize || '28px'};
    color: ${(props) => props.color || '#000'};
    font-weight: ${(props) => props.fontWeight || 700};
    text-align: ${(props) => props.textAlign || 'center'};
    margin: ${(props) => props.margin || '16px 0px'};
    font-family: 'Gotham';
    text-transform: ${(props) => props.textTransform || 'none'};

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
    font-size: ${(props) => props.fontSize || '18px'};
    line-height: 1.3rem;
    font-weight: ${(props) => props.fontWeight || 350};
    color: ${(props) => props.color || '#000'};
    font-family: 'Gotham';
    text-align: center;
    margin: ${(props) => props.margin || '0px'};
    padding: ${(props) => props.padding || '0px'};
    

    ${props => props.typeParagraph === 'paragraphenvio' && `
        font-weight:500;
        font-size:16px;
    `}
    ${props => props.typeParagraph === 'select' && `
        color:rgba(56,56,56, 0.7);
        font-size:14px;
        text-align:start;
        font-weight:400px;
    `}
    ${props => props.typeParagraph === 'pedido' && `
        text-align:start;
        font-weight:350;
        margin-bottom:0px;
        padding-bottom:8px;
        font-size:14px;

        &:last-child{
            padding-bottom:0px;
        }
    `}

    ${props => props.typeParagraph === 'paragraphfooter' && `
        padding-bottom:0px;
        font-size:10px;
        padding-top:0px;
        color:#192C53;
        font-weight:500;
        line-height:1rem;
        margin-bottom:0px;
    `}

 `


 export const SspanText = styled.span<SspanText>`
      font-size: ${(props) => props.fontSize || '18px'};
      font-family: 'gotham';
      padding: ${(props) => props.padding || '0px'};
      font-weight: ${(props) => props.fontWeight || 350};

      ${props => props.typeOption === 'inative' && `
        color:#777777;
        `}
        ${props => props.typeOption === 'active' && `
        color:#000;
        `}
        ${props => props.typeOption === 'nameForms' && `
            color:#000;
        `}
        ${props => props.typeOption === 'namProduct' && `
            color:#49454F;
            
        `}
 `