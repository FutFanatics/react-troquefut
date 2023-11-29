import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import CliqueRetire from "../../components/cliqueretire";
import Correios from "../../components/correios";
import Button from "../../componentsStyled/Button";
import ModalAceite from "../../components/modalaceite";
import { Box } from "../../componentsStyled/Box";
import Footer from "../../components/footer";
import { SH1, SspanText } from "../../componentsStyled/Text";
import Header from "../../components/header";
import Menu from "../../components/menu";
import IconHelp from "../../componentsStyled/icon/Iconhelp";
import IconBack from "../../componentsStyled/icon/Iconback";

export default function Shipping() {
  const location = useLocation();
  const [cliqueRetireSelected, setCliqueRetireSelected] = useState(false);
  const [correiosSelected, setCorreiosSelected] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dadosFinais, setDadosFinais] = useState<any>(location.state || {});

  
  const navigate = useNavigate();

  const handleCliqueRetireSelect = () => {
    setCliqueRetireSelected(true);
    setCorreiosSelected(false);
  };

  const handleCorreiosSelect = () => {
    setCorreiosSelected(true);
    setCliqueRetireSelected(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const envios = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 478,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleConfirmar = () => {
    const novosDadosSelecionados = {
      ...dadosFinais,
      formaEnvio: cliqueRetireSelected ? "Clique Retire" : correiosSelected ? "Correios" : "",
      
    };

    setDadosFinais(novosDadosSelecionados);
    console.log("Dados finais:", novosDadosSelecionados);
    openModal();

  };
  const handleBack = () => {
    console.log("Voltando...");
    navigate(-1); 
  };
  return (
    <>
      <Header></Header>
      <Menu typeOption="active"></Menu>
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
          <Box typeBox="active-number"><SspanText color="#fff" fontSize="20px" fontWeight={600}>3</SspanText></Box>
          <SspanText typeSpan="active">Envio do Produto</SspanText>
        </Box>
        </div>
      </div>
      <section className="c-shipping position-relative">
      <Box typeBox="icon-help">
          <div className="informação">
            Dúvidas de como funciona?
            Acesse nossa <a href="">Central de ajuda</a>
          </div>
          <IconHelp width={30}/>
        </Box>
        <div className="container">
          <SH1>FORMA DE ENVIO</SH1>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <Slider {...envios}>
                <div className="item d-flex justify-content-end">
                  <CliqueRetire
                    onSelect={handleCliqueRetireSelect}
                    selected={cliqueRetireSelected}
                  ></CliqueRetire>
                </div>
                <div className="item">
                  <Correios
                    onSelect={handleCorreiosSelect}
                    selected={correiosSelected}
                  ></Correios>
                </div>
              </Slider>
            </div>
          </div>
          <Button margin="32px auto" onClick={handleConfirmar}>
            Confirmar
          </Button>
          <ModalAceite isOpen={modalIsOpen} onRequestClose={closeModal} dadosSelecionados={dadosFinais}>
          </ModalAceite>
        </div>
        <Footer></Footer>
      </section>
    </>
  );
}
