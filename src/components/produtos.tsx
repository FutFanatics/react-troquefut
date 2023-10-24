import { SH1, SspanText } from "../componentsStyled/Text";
import sp from '../img/img-camisa_sp.png';
import React, { useState } from 'react';
import ProductSelected from "./produtoselected";
import { Produto } from './Types';

interface ProdutosProps {
    produtos: Produto[];
    className?: string;
    selectedId?: string;
  }


  const Produtos: React.FC<ProdutosProps> = ({ produtos, className }) => {
    const [produtosSelecionados, setProdutosSelecionados] = useState<Produto[]>([]);

    const handleCheckboxChange = (produto: Produto) => {
        if (produtosSelecionados.some((p) => p.product_id === produto.product_id)) {
            const updatedProdutos = produtosSelecionados.filter((p) => p.product_id !== produto.product_id);
            setProdutosSelecionados(updatedProdutos);
        } else {
            setProdutosSelecionados([...produtosSelecionados, produto]);
        }
    };

    return(
        <>
            {produtos.map((produto, index) => (
                <div className="c-produto d-flex col-md-10" key={index}>
                    <div className="produto-box_img col-md-2">
                        <a href={produto.url} target="_blank">
                            <img src={produto.img} alt={produto.name} />
                        </a>
                    </div>
                    <div className="produto-box_text col-md-9 d-flex flex-column justify-content-center">
                        <SH1 fontSize="19px" textAlign="start" fontWeight={600} margin="0px 0px 8px 0px" color="#1D1B20">{produto.name}</SH1>
                        <div className="row d-flex justify content-between">
                            <div className="col-4">
                                <SspanText fontSize="16px" fontWeight={600} typeSpan='namProduct'>Código: <SspanText fontSize="16px">{produto.product_id}</SspanText></SspanText>
                            </div>
                            <div className="col-8">
                                <SspanText fontSize="16px" fontWeight={600} typeSpan='namProduct'>Preço: <SspanText fontSize="16px">{produto.price}</SspanText></SspanText>
                            </div>
                        </div>
                        <div className="row d-flex justify content-between">
                            <div className="col-4">
                                <SspanText fontSize="16px" fontWeight={600} typeSpan='namProduct'>Variação: <SspanText fontSize="16px"> {produto.variant_value}</SspanText></SspanText>
                            </div>
                        </div>
                    </div>
                    <div className="col-1 d-flex align-items-start justify-content-center pt-2">
                        <input
                            type="checkbox"
                            checked={produtosSelecionados.some((p) => p.product_id === produto.product_id)}
                            onChange={() => handleCheckboxChange(produto)}
                        />
                    </div>
                </div>
            ))}
            {produtosSelecionados.length > 0 && (
                <>
                    <SH1 typeTitle="product">Preencha a seguir as informações</SH1>
                    <SH1 typeTitle="product">dos produto que deseja devolver:</SH1>
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