import React, { useState, useEffect } from "react";
import { SH1, SspanText } from "../componentsStyled/Text";
import { Box } from "../componentsStyled/Box";
import Button from "../componentsStyled/Button";
import ProductSelected from "./produtoselected";
import { Produto } from "./Types";

interface ProdutosProps {
  produtos: Produto[];
  className?: string;
  selectedId?: string;
  onSelect?: () => void;
  selected?: boolean;
  shipmentDate?: string;
}
const Produtos: React.FC<ProdutosProps> = ({ produtos, className, shipmentDate }) => {
  const [buttonText, setButtonText] = useState("Selecionar");
  const [produtosSelecionados, setProdutosSelecionados] = useState<Produto[]>([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);
  const [showProductSelected, setShowProductSelected] = useState(false);

  useEffect(() => {
    const storedSelectedProducts = localStorage.getItem('selectedProducts');
    if (storedSelectedProducts) {
      setProdutosSelecionados(JSON.parse(storedSelectedProducts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedProducts', JSON.stringify(produtosSelecionados));
  }, [produtosSelecionados]);

  const handleCheckboxChange = (produto: Produto) => {
    if (produtosSelecionados.some((p) => p.product_id === produto.product_id)) {
      const updatedProdutos = produtosSelecionados.filter((p) => p.product_id !== produto.product_id);
      setProdutosSelecionados(updatedProdutos);
      setButtonText("Selecionar");
    } else {
      setProdutosSelecionados([...produtosSelecionados, produto]);
      setProdutoSelecionado(produto);
      setButtonText("Selecionado");
    }
  };

  const handleButtonClick = () => {
    setShowProductSelected(true);
  };

  const handleDataUpdate = (data: any) => {
    console.log('Updated data from ProductSelected:', data);
  };

  return (
    <>
      {showProductSelected ? (
        <ProductSelected
          produto={produtosSelecionados[0]}
          onDataUpdate={handleDataUpdate}
        />
      ) : (
        <>
          {produtos.map((produto, index) => (
            <Box typeBox="product" key={index}>
              <div className="produto-box_img">
                <a href={produto.url} target="_blank">
                  <img src={produto.img} alt={produto.name} />
                </a>
              </div>
              <div className="produto-box_text d-flex flex-column justify-content-center">
                <SH1
                  typeTitle="title-product"
                  fontSize="19px"
                  textAlign="start"
                  fontWeight={600}
                  margin="8px 0px 8px 0px"
                  color="#1D1B20"
                >
                  {produto.name}
                </SH1>

                <SspanText typeSpan="namProduct">
                  Código:{" "}
                  <SspanText typeSpan="namProduct">{produto.product_id}</SspanText>
                  
                </SspanText>

                <SspanText typeSpan="namProduct">
                  Preço: <SspanText typeSpan="namProduct">{produto.price}</SspanText>
                </SspanText>

                <SspanText typeSpan="namProduct">
                  Variação:{" "}
                  <SspanText typeSpan="namProduct"> {produto.variant_value}</SspanText>
                </SspanText>
              </div>
              <Button
                className={`mt-2 ${produtosSelecionados.some((p) => p.product_id === produto.product_id) ? 'clicked' : ''}`}
                typeButton="select"
                onClick={() => handleCheckboxChange(produto)}
              >
                {buttonText}
              </Button>
            </Box>
          ))}
          {produtosSelecionados.length > 0 && (
            <Button onClick={handleButtonClick} className="mt-5">Continuar</Button>
          )}
        </>
      )}
    </>
  );
};

export default Produtos;