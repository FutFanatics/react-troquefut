import React, { useState } from "react";
import { Produto } from "./Types";
import { SH1 } from "../componentsStyled/Text";  
import { Box } from "../componentsStyled/Box";  
import Button from "../componentsStyled/Button";
import ProductSelected from "./produtoselected";
import { Link } from 'react-router-dom';


interface ProdutosProps {
  produtos: Produto[];
  className?: string;
  selectedId: string;
  onSelect: () => void;
  selected?: boolean;
}

const Produtos: React.FC<ProdutosProps> = ({ produtos, className, selected }) => {
  const [buttonText, setButtonText] = useState("Selecionar");
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);
  const [showSelectedProducts, setShowSelectedProducts] = useState(false);

  const handleCheckboxChange = (produto: Produto) => {
    if (selectedProductIds.includes(produto.product_id)) {
      setSelectedProductIds((prevIds) =>
        prevIds.filter((id) => id !== produto.product_id)
      );
    } else {
      setSelectedProductIds((prevIds) => [...prevIds, produto.product_id]);
    }
  };

  const handleButtonClick = (produto: Produto) => {
    setButtonText("Selecionado");
  };

  const navigateToSelectedProducts = () => {
    setShowSelectedProducts(true);
  };

  return (
    <>
      {showSelectedProducts ? (
        <>
          <SH1 typeTitle="product">Preencha a seguir as informações</SH1>
          <SH1 typeTitle="product">dos produtos que deseja devolver:</SH1>
          <div className="row justify-content-center">
            {selectedProductIds.map((productId) => {
              const selectedProduct = produtos.find(
                (produto) => produto.product_id === productId
              );
              if (selectedProduct) {
                return <ProductSelected productId={productId} produto={selectedProduct} />;
              }
              return null;
            })}
          </div>
          <Button onClick={navigateToSelectedProducts}>
            Ver Produtos Selecionados
          </Button>
        </>
      ) : (
        <>
          <SH1>Selecione os produtos a serem devolvidos</SH1>
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

                {/* Resto do código do componente Produtos aqui */}

              </div>
              <div className="col-1 d-flex align-items-start justify-content-center pt-2">
                <Button
                  typeButton="select"
                  onClick={() => {
                    handleButtonClick(produto);
                    handleCheckboxChange(produto);
                  }}
                  className={selectedProductIds.includes(produto.product_id) ? "clicked" : ""}
                >
                  {selectedProductIds.includes(produto.product_id) ? "Selecionado" : "Selecionar"}
                </Button>
              </div>
            </Box>
          ))}
          <div>
          <Link to={`/objetos/${selectedProductIds[0]}`}>
            <ProductSelected productId={selectedProductIds[0]} />
            <Button>Seu Botão</Button>
          </Link>
          
        </div>
        </>
      )}
    </>
  );
};

export default Produtos;
