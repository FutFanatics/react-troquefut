import { SH1, SspanText } from "../componentsStyled/Text";
import sp from '../img/img-camisa_sp.png';
import React, { useState } from 'react';
import ProductSelected from "./produtoselected";
import { Produto } from './TypeProduct';

interface ProdutosProps {
    produtos: Produto[];
    className?: string;
  }


const Produtos : React.FC<ProdutosProps> = ({ produtos , className }) => {
    const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);

    const handleCheckboxChange = (produto: Produto) => {
        if (produtoSelecionado && produtoSelecionado.codigo === produto.codigo) {
          setProdutoSelecionado(null);
        } else {
          setProdutoSelecionado(produto);
        }
      };

    return(
        <>
        {produtos.map((produto, index) => (
        <div className="c-produto d-flex col-md-10">
                <div className="produto-box_img col-md-2">
                    <img src={sp} alt={produto.nome}></img>
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
                        <div className="col-8">
                            <SspanText fontSize="16px"  fontWeight={600} typeOption ='namProduct'>Link: <SspanText fontSize="16px">{produto.url}</SspanText></SspanText>
                        </div>
                    </div>
                </div>
                <div className="col-1 d-flex align-items-start justify-content-center pt-2">
                    <input 
                        type="checkbox"
                        checked={produto === produtoSelecionado}
                        onChange={() => handleCheckboxChange(produto)}>
                        
                    </input>
                </div>
            </div>
         ))} 
         {produtoSelecionado && (
        <ProductSelected produto={produtoSelecionado} />
      )}
        </>
            
        )
    }
export default Produtos;