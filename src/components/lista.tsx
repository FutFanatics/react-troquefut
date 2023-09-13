import { SH1 } from "../componentsStyled/Text";
import Produtos from "./produtos";
import {useState} from 'react'

interface ListaProps {
    className?: string;
  }

const Lista : React.FC<ListaProps> = ({ className }) => {
    
    const produtosData = [
        {
          nome: 'Camisa São Paulo Hype Preta',
          codigo: 'SP123',
          preco: 'R$29,99',
          imagem: '../img/img-camisa_sp.png',
          variacao: 'M',
          url: 'https://www.futfanatics.com.br/camisa-sao-paulo-hype-preta',
        },

        {
            nome: 'Camisa São Paulo Hype Preta',
            codigo: 'SP123',
            preco: 'R$29,99',
            imagem: '../img/img-camisa_sp.png',
            variacao: 'M',
            url: 'https://www.futfanatics.com.br/camisa-sao-paulo-hype-preta',
          },
    ];
    
    return(
        <>
        <hr></hr>
        <section className="c-Lista">
            <div className="container">
                <SH1 textAlign="start" color="#777777" fontWeight={350} fontSize="16px">Lista de Produtos do Pedido:</SH1>
                <div className="row justify-content-center lista-content">
                   <Produtos produtos={produtosData}></Produtos>
                </div>
            </div>
        </section>
        
        </>
    )
}
export default Lista