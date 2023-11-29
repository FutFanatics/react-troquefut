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
import Button from "../../componentsStyled/Button";
import IconHelp from "../../componentsStyled/icon/Iconhelp";
import IconBack from "../../componentsStyled/icon/Iconback";

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

  const updateData = (data: any) => {
    setDadosSelecionados((prevData: any) => ({
      ...prevData,
      data,
      produtoSelecionadoData: {
        ...prevData.produtoSelecionadoData,
        additionalData: data.chavePix !== undefined ? data : null,
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
    navigate("/shipping", {
      state: dadosFinais,
    });
  };
  
  const handleBack = () => {
    console.log("Voltando...");
    navigate("/order"); 
  };
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxMarcado(event.target.checked);
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
          <Box
            typeBox="inative-number"><SspanText color="#fff" fontSize="20px" fontWeight={600}>3</SspanText></Box>
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
          <div className="row justify-content-center">
            <Box typeBox="estorno" className="col-md-10">
              <IconFinance width={64}></IconFinance>
              {tipoReembolso === "Cupom" ? (
                <ValeCompras updateData={updateData} />
              ) : (
                <ValeEstorno updateData={updateData} />
              )}
              <div className="d-flex mt-5 justify-content-start align-items-center col-md-10">
                <input type="checkbox" required onChange={handleCheckboxChange} checked={checkboxMarcado}></input>
                <STextParagraph fontSize="14px"fontSizesm="12px" padding="0px 0px 0px 8px">
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
