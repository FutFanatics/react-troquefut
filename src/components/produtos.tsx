import React, { useState, useEffect } from "react";
import { SH1, SspanText } from "../componentsStyled/Text";
import { Box } from "../componentsStyled/Box";
import Button from "../componentsStyled/Button";
import ProductSelected from "./produtoselected";
import { Produto } from "./Types";
import { useNavigate } from "react-router-dom";

interface ProdutosProps {
  produtos: Produto[];
  className?: string;
  selectedId?: string;
  onSelect?: () => void;
  selected?: boolean;
  delivery_date?: string;

}
const Produtos: React.FC<ProdutosProps> = ({ produtos, className, delivery_date }) => {
  const [buttonText, setButtonText] = useState("Selecionar");
  const [produtosSelecionados, setProdutosSelecionados] = useState<Produto[]>([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);
  const [showProductSelected, setShowProductSelected] = useState(false);
  const [produtoSelecionadoData, setProdutoSelecionadoData] = useState<any>(null);
  const navigate = useNavigate();
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



  const handleDataUpdate = (data: any) => {
    console.log('Updated data from ProductSelected:', data);
  };
  const handleConfirmar = () => {
    const dadosSelecionados = {
      delivery_date: delivery_date,
      productId: produtosSelecionados[0]?.product_id,
    };
  
    console.log("Dados selecionados:", dadosSelecionados);
    setShowProductSelected(true);
    setProdutoSelecionadoData(dadosSelecionados);
  };

  return (
    <>
      {showProductSelected ? (
        <ProductSelected
          produto={produtosSelecionados[0]}
          onDataUpdate={handleDataUpdate}
          produtoSelecionadoData={produtoSelecionadoData}
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
                  Código:
                  <SspanText typeSpan="namProduct">{produto.product_id}</SspanText>
                  
                </SspanText>

                <SspanText typeSpan="namProduct">
                  Preço: <SspanText typeSpan="namProduct">{produto.price ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(produto.price)) : 'N/A'}</SspanText>
                </SspanText>

                <SspanText typeSpan="namProduct">
                  Variação:
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
            <Button onClick={handleConfirmar} className="mt-5">Continuar</Button>
          )}
        </>
      )}
    </>
  );
};

export default Produtos;