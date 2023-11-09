import { SH1, SspanText } from "../componentsStyled/Text";
import sp from "../img/img-camisa_sp.png";
import React, { useState } from "react";
import ProductSelected from "./produtoselected";
import { Produto } from "./Types";
import { Box } from "../componentsStyled/Box";
import Button from "../componentsStyled/Button";

interface ProdutosProps {
  produtos: Produto[];
  className?: string;
  selectedId?: string;
  onSelect?: () => void;
  selected?: boolean;
}

const Produtos: React.FC<ProdutosProps> = ({ produtos, className, selected,}) => {
  const [buttonText, setButtonText] = useState("Selecionar");
  const [produtosSelecionados, setProdutosSelecionados] = useState<Produto[]>(
    []
  );
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);

  const handleCheckboxChange = (produto: Produto) => {
    if (produtosSelecionados.some((p) => p.product_id === produto.product_id)) {
      const updatedProdutos = produtosSelecionados.filter(
        (p) => p.product_id !== produto.product_id
      );
      setProdutosSelecionados(updatedProdutos);
    } else {
      setProdutosSelecionados([...produtosSelecionados, produto]);
      setProdutoSelecionado(produto); // Armazene o produto selecionado no estado.
    }
  };

  const handleButtonClick = () => {
    setButtonText("Selecionado");
  };
  const onSelectProduto = (produto: Produto) => {
    setProdutoSelecionado(produto);
  };
  return (
    <>
      {produtos.map((produto, index) => (
        <>
        <SH1>Selecione os produtos a serem devolvidos</SH1>
        <Box typeBox="product" key={index}>
          <div className="produto-box_img">
            <a href={produto.url} target="_blank">
              <img src={produto.img} alt={produto.name} />
            </a>
          </div>
          <div className="produto-box_text d-flex flex-column justify-content-center">
            <SH1 typeTitle="title-product"
              fontSize="19px"
              textAlign="start"
              fontWeight={600}
              margin="8px 0px 8px 0px"
              color="#1D1B20"
            >
              {produto.name}
            </SH1>

            <SspanText  typeSpan="namProduct">
              Código:{" "}
              <SspanText typeSpan="namProduct">{produto.product_id}</SspanText>
            </SspanText>

            <SspanText  typeSpan="namProduct">
              Preço: <SspanText typeSpan="namProduct">{produto.price}</SspanText>
            </SspanText>

            <SspanText  typeSpan="namProduct">
              Variação:{" "}
              <SspanText  typeSpan="namProduct"> {produto.variant_value}</SspanText>
            </SspanText>
          </div>
          <div className="col-1 d-flex align-items-start justify-content-center pt-2">
          <Button
            typeButton="select"
            onClick={() => {
              // Verifique se um produto foi selecionado antes de continuar.
              if (produtoSelecionado) {
                // Passe o produto selecionado como prop para o componente ProductSelected.
                onSelectProduto(produtoSelecionado);
              }
            }}
            className={selected ? "clicked" : ""}
          >
            Continuar
          </Button>
          </div>
        </Box>
        </>
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
  );
};
export default Produtos;
