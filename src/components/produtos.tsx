import { SH1, SspanText } from "../componentsStyled/Text";
import sp from '../img/img-camisa_sp.png';
import React, { useState } from 'react';
import ProductSelected from "./produtoselected";
import { Produto } from './Types';

interface ProdutosProps {
    produtos: Produto[];
    className?: string;
  }


const Produtos : React.FC<ProdutosProps> = ({ produtos , className }) => {
    const [produtosSelecionados, setProdutosSelecionados] = useState<Produto[]>([]);

    const handleCheckboxChange = (produto: Produto) => {
        
        if (produtosSelecionados.some((p) => p.codigo === produto.codigo)) {
         
          const updatedProdutos = produtosSelecionados.filter((p) => p.codigo !== produto.codigo);
          setProdutosSelecionados(updatedProdutos);
        } else {
          
          setProdutosSelecionados([...produtosSelecionados, produto]);
        }
      };

    return(
        <>
        {produtos.map((produto, index) => (
        <div className="c-produto d-flex col-md-10">
                <div className="produto-box_img col-md-2">
                    <a href={produto.url} target="_blank">
                       <img src={sp} alt={produto.nome}></img> 
                    </a>
                    
                </div>
                <div className="produto-box_text col-md-9 d-flex flex-column justify-content-center">
                    <SH1 fontSize="19px" textAlign="start" fontWeight={600} margin="0px 0px 8px 0px" color="#1D1B20">{produto.nome}</SH1>
                    <div className="row d-flex justify content-between">
                        <div className="col-4">
                            <SspanText fontSize="16px" fontWeight={600} typeOption ='namProduct'>Código: <SspanText fontSize="16px">{produto.codigo}</SspanText></SspanText>
                        </div>
                        <div className="col-8">
                            <SspanText fontSize="16px"  fontWeight={600} typeOption ='namProduct'>Preço: <SspanText fontSize="16px">{produto.preco}</SspanText></SspanText>
                        </div>
                    </div>
                    <div className="row d-flex justify content-between">
                        <div className="col-4">
                            <SspanText fontSize="16px"  fontWeight={600} typeOption ='namProduct'>Variação: <SspanText fontSize="16px"> {produto.variacao}</SspanText></SspanText>
                        </div>
                    </div>
                </div>
                <div className="col-1 d-flex align-items-start justify-content-center pt-2">
                    <input 
                        type="checkbox"
                        checked={produtosSelecionados.some((p) => p.codigo === produto.codigo)}
                        onChange={() => handleCheckboxChange(produto)}>
                    </input>
                </div>
            </div>
         ))} 
            {produtosSelecionados.length > 0 && (
                <>
                <SH1 fontSize="20px" fontWeight={500} margin="72px 0px 0px 0px ">Preencha a seguir as informações</SH1>          
                 <SH1 fontSize="20px" fontWeight={500} margin="0px 0px 32px 0px">dos produto que deseja devolver:</SH1>
                <div className="row justify-content-center">
                    {produtosSelecionados.map((produtoSelecionado, index) => (
                        <ProductSelected key={index} produto={produtoSelecionado} />
                    ))}
                </div>
                
                </>
            )}
        </>
            
        )
    }
export default Produtos;