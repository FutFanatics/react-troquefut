import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useNavigate, useLocation } from "react-router-dom";
import { useDataContext } from '../../context/DataContext'; 
import { Box } from "../../componentsStyled/Box";
import Header from "../../components/header";
import Menu from "../../components/menu";
import { SH1, STextParagraph, SspanText } from "../../componentsStyled/Text";
import IconFinance from "../../componentsStyled/icon/IconFinance";
import ValeCompras from "../../components/vale-compras";
import ValeEstorno from "../../components/ValeEstorno";
import Footer from "../../components/footer";
import Button from "../../componentsStyled/Button";
import IconHelp from "../../componentsStyled/icon/Iconhelp";
import IconBack from "../../componentsStyled/icon/Iconback";
import BankData from "../../components/BankData";

const Data: React.FC = () => {
  const location = useLocation();
  const [dadosSelecionados, setDadosSelecionados] = useState<any>(location.state || {});
  const [tipoReembolso, setTipoReembolso] = useState<string>(
    localStorage.getItem("tipoReembolso") || ""
  );
  const [todosCamposPreenchidosData, setTodosCamposPreenchidosData] = useState<boolean>(false);
  const [checkboxMarcado, setCheckboxMarcado] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const { updateData } = useDataContext(); // Use the DataContext

  useEffect(() => {
    console.log("Dados no componente Data:", dadosSelecionados);
  }, [dadosSelecionados]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxMarcado(event.target.checked);
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderReembolsoComponent = (produto: any) => {
    if (produto.tipoReembolso === "Cupom") {
      return <ValeCompras updateData={updateData} onCheckboxChange={handleCheckboxChange}/>;
    } else {
      return <ValeEstorno updateData={updateData} onCheckboxChange={handleCheckboxChange} />;
    }
  };

  const handleConfirmar = () => {
    console.log("Dados selecionados:", dadosSelecionados);
    const dadosData = {
      tipoReembolso,
    };
    console.log("Dados data:", dadosData);
    const todosCamposPreenchidosData = Object.values(dadosData).every(
      (value) => value !== ""
    );
    setTodosCamposPreenchidosData(todosCamposPreenchidosData);

    if (!todosCamposPreenchidosData) {
      console.error("Preencha todos os campos do componente Data antes de confirmar");
      return;
    }

    const dadosFinais = {
      ...dadosSelecionados,
      ...dadosData,
    };

    console.log("Dados finais:", dadosFinais);
    updateData(dadosFinais); 
    navigate("/shipping", {
      state: dadosFinais,
    });
  };

  const handleBack = () => {
    console.log("Voltando...");
    navigate("/order");
  };

  return (
    <>
      <Header />
      <Menu typeOption="active" />
      <div className="container c-container-options d-flex options flex-column flex-md-row">
        <Button typeButton="voltar" margin="0px" onClick={handleBack}>
          <IconBack width={20}></IconBack>
          Voltar
        </Button>
        <div className="box-options d-flex justify-content-center align-items-center">
          <Box typeBox="active" className="d-flex flex-md-row flex-column align-items-center justify-content-center">
            <Box typeBox="active-number"><SspanText color="#fff" fontSize="20px" fontWeight={600}>1</SspanText></Box>
            <SspanText typeSpan="active">Pedido</SspanText>
          </Box>
          <div className="line-options"></div>
          <Box typeBox="active" className="d-flex align-items-center justify-content-center flex-md-row flex-column">
            <Box typeBox="active-number"><SspanText color="#fff" fontSize="20px" fontWeight={600}>2</SspanText></Box>
            <SspanText typeSpan="active">Reembolso</SspanText>
          </Box>
          <div className="line-options"></div>
          <Box typeBox="active" className="d-flex align-items-center justify-content-center flex-md-row flex-column">
            <Box typeBox="inative-number"><SspanText color="#fff" fontSize="20px" fontWeight={600}>3</SspanText></Box>
            <SspanText typeSpan="inative">Envio do Produto</SspanText>
          </Box>
        </div>
      </div>
      <section className="c-data position-relative">
        <Box typeBox="icon-help">
          <div className="informação">
            Dúvidas de como funciona?
            Acesse nossa <a href="">Central de ajuda</a>
          </div>
          <IconHelp width={30}/>
        </Box>
        <div className="container">
          <SH1 textTransform="uppercase" fontSize="20px">Informações de reembolso</SH1>
          <div className="content d-flex flex-column align-items-center">
            <Slider {...sliderSettings} className="col-md-10 c-slide">
              {dadosSelecionados.map((produto: any, index: number) => (
                <Box key={index} typeBox="estorno" className="d-flex flex-column">
                  <IconFinance width={64}></IconFinance>
                  <div className="container-reembolso d-flex justify-content-center mt-4">
                    <div className="c-box-product d-flex flex-column justify-content-center align-items-center">
                    <img src={produto.img} className="picture"></img>
                    <h1>{produto.name}</h1>
                    <span>Variação: {produto.variant_value}</span>
                    </div>
                    {renderReembolsoComponent(produto)}
                  </div>
                  
                </Box>
              ))}
            </Slider>
            <button onClick={handleConfirmar} disabled={!checkboxMarcado} className="button-fut">
            Avançar
          </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Data;
