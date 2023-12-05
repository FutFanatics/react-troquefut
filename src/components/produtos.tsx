import React, { useState, useEffect } from "react";
import { SH1, SspanText } from "../componentsStyled/Text";
import { Box } from "../componentsStyled/Box";
import Button from "../componentsStyled/Button";
import Slider from "react-slick";
import { Produto } from "./Types";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDataContext } from '../context/DataContext'; 
import ProductSelected from "./produtoselected";

interface ProdutosProps {
  produtos: Produto[];
  className?: string;
  delivery_date?: string;
  payment_method?: string;
  onSelect?: () => void;
  orderId?: any;
  selectedId?: string;
  allowed_clique_retire?: string;
}

const Produtos: React.FC<ProdutosProps> = ({
  produtos,
  className,
  delivery_date,
  payment_method,
  orderId,
  allowed_clique_retire,
}) => {
  const { data, updateData } = useDataContext();

  const [produtosSelecionados, setProdutosSelecionados] = useState<Produto[]>([]);
  const [showProductSelected, setShowProductSelected] = useState(false);
  const [produtoSelecionadoData, setProdutoSelecionadoData] = useState<any>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const storedSelectedProducts = localStorage.getItem('selectedProducts');
    if (storedSelectedProducts) {
      setProdutosSelecionados(JSON.parse(storedSelectedProducts));
      setIsButtonDisabled(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedProducts', JSON.stringify(produtosSelecionados));
    setIsButtonDisabled(produtosSelecionados.length === 0);
  }, [produtosSelecionados]);

  const handleCheckboxChange = (produto: Produto) => {
    const produtoIndex = produtosSelecionados.findIndex((p) => p.product_id === produto.product_id);

    if (produtoIndex !== -1) {
      const updatedProdutos = [...produtosSelecionados];
      updatedProdutos.splice(produtoIndex, 1);
      setProdutosSelecionados(updatedProdutos);
    } else {
      setProdutosSelecionados([...produtosSelecionados, produto]);
    }
  };

  const handleDataUpdate = (dadosSelecionados: any) => {
    console.log('Updated data from ProductSelected dados:', dadosSelecionados);
  };

  const handleConfirmar = () => {
    const dadosSelecionados = {
      delivery_date: delivery_date,
      payment_method: payment_method,
      products: produtosSelecionados,
      order_id: orderId,
      allowed_clique_retire: allowed_clique_retire,
    };

    console.log('Dados selecionados produtos.tsx:', dadosSelecionados);
    updateData(dadosSelecionados);

    setShowProductSelected(true);
    setProdutoSelecionadoData(dadosSelecionados);
  };

  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      {showProductSelected ? (
        <ProductSelected
          produtos={produtosSelecionados}
          onDataUpdate={handleDataUpdate}
          produtoSelecionadoData={produtoSelecionadoData}
          delivery_date={delivery_date}
        />
      ) : (
        <>
        <Slider {...sliderSettings} className={`col-md-6 c-slider-product ${className}`}>
          {produtos.map((produto, index) => (
            <Box typeBox="product" key={index}>
              <div className="produto-box_img ">
                <a href={produto.url} target="_blank" rel="noopener noreferrer">
                  <img src={produto.img} alt={produto.name} />
                </a>
              </div>
              <div className="produto-box_text d-flex flex-column justify-content-center">
                <SH1
                  typeTitle="title-product"
                  fontSize="16px"
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
                {produtosSelecionados.some((p) => p.product_id === produto.product_id) ? 'Selecionado' : 'Selecionar'}
              </Button>
            </Box>
          ))}
        </Slider>
          
          {produtosSelecionados.length > 0 && (
            <Button onClick={handleConfirmar} className={`mt- mb-3 ${isButtonDisabled ? 'disabled' : ''}`} disabled={isButtonDisabled} margin="0px auto">
              Continuar
            </Button>
          )}
        </>
      )}
    </>
  );
};

export default Produtos;
