import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box } from "../../componentsStyled/Box";
import Header from "../../components/header";
import Menu from "../../components/menu";
import { SH1, STextParagraph, SspanText } from "../../componentsStyled/Text";
import IconFinance from "../../componentsStyled/icon/IconFinance";
import ValeCompras from "../../components/vale-compras";
import ValeEstorno from "../../components/ValeEstorno";
import Footer from "../../components/footer";

const Data: React.FC = () => {
  const location = useLocation();
  const [dadosSelecionados, setDadosSelecionados] = useState<any>(location.state || {});
  const [tipoReembolso, setTipoReembolso] = useState<string>(
    localStorage.getItem("tipoReembolso") || ""
  );

  const navigate = useNavigate();

  const updateData = (data: any) => {
    setDadosSelecionados((prevData: any) => ({
      ...prevData,
      data,
      produtoSelecionadoData: {
        ...prevData.produtoSelecionadoData,
        additionalData: data.additionalData,
      },
    }));
  };

  const handleConfirmar = () => {
    console.log("Dados selecionados:", dadosSelecionados);
    const dadosData = {
      tipoReembolso,
    };

    const todosCamposPreenchidosData = Object.values(dadosData).every(
      (value) => value !== ""
    );

    if (!todosCamposPreenchidosData) {
      console.error("Preencha todos os campos do componente Data antes de confirmar");
      return;
    }

    const dadosFinais = {
      ...dadosSelecionados,
      ...dadosData,
    };

    console.log("Dados finais:", dadosFinais);
    navigate("/shipping", {
      state: dadosFinais,
    });
  };

  return (
    <>
      <Header />
      <Menu typeOption="active" />
      <div className="c-container-options d-flex justify-content-center options">
        <Box typeBox="active" className="d-flex flex-md-row flex-column align-items-center justify-content-center">
          <Box typeBox="active-number"><SspanText color="#fff" fontSize="24px" fontWeight={600}>1</SspanText></Box>
          <SspanText typeSpan="active">Pedido</SspanText>
        </Box>
        <div className="line-options"></div>
        <Box typeBox="active" className="d-flex align-items-center justify-content-center flex-md-row flex-column">
          <Box typeBox="active-number"><SspanText color="#fff" fontSize="24px" fontWeight={600}>2</SspanText></Box>
          <SspanText typeSpan="active">Reembolso</SspanText>
        </Box>
        <div className="line-options"></div>
        <Box typeBox="active" className="d-flex align-items-center justify-content-center flex-md-row flex-column">
          <Box
            typeBox="inative-number"><SspanText color="#fff" fontSize="24px" fontWeight={600}>3</SspanText></Box>
          <SspanText typeSpan="inative">Envio do Produto</SspanText>
        </Box>
      </div>
      <section className="c-data">
        <div className="container">
          <SH1 textTransform="uppercase">Informações de reembolso</SH1>
          <div className="row justify-content-center">
            <Box typeBox="estorno" className="col-md-10">
              <IconFinance width={64}></IconFinance>
              {tipoReembolso === "Vale-Compras" ? (
                <ValeCompras updateData={updateData} />
              ) : (
                <ValeEstorno updateData={updateData} />
              )}
              <div className="d-flex mt-5 justify-content-start col-md-10">
                <input type="checkbox" required></input>
                <STextParagraph fontSize="14px" padding="0px 0px 0px 8px">
                  Ao continuar, você declara que está de acordo com os termos
                  da&nbsp;
                  <a
                    href="https://www.futfanatics.com.br/politica-de-privacidade"
                    target="_blank"
                  >
                    Política de Privacidade
                  </a>
                </STextParagraph>
              </div>
              
            </Box>
            <button onClick={handleConfirmar}>
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
