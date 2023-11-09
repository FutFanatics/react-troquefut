import { Box } from "../../componentsStyled/Box";
import Button from "../../componentsStyled/Button";
import Footer from "../../components/footer";
import { SH1, STextParagraph, SspanText } from "../../componentsStyled/Text";
import React, { useState } from 'react';
import Header from "../../components/header";

import Options from "../../components/options";
import CampoTexto from "../../components/campotexto";
import IconFinance from "../../componentsStyled/icon/IconFinance";
import Estorno from "../../components/estorno";
import ValeCompras from "../../components/vale-compras";
import ValeEstorno from "../../components/ValeEstorno";
import Menu from "../../components/menu";
import ModalDevolution from "../../components/modaldevolution";


export default function Data() {
    const [IsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
        setModalIsOpen(true);
      };
    
      const closeModal = () => {
        setModalIsOpen(false);
      };
    
    const onSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
    }

    return (
        <>
            <Header></Header>
            
            <section className="c-data">
                <div className="container">
                    <SH1 textTransform="uppercase">
                        Informações de reembolso
                    </SH1>
                     <div className="row justify-content-center">
                        <Box typeBox="estorno" className="col-md-10">
                            <IconFinance width={64}></IconFinance>
                            <SspanText fontWeight={550} fontSize='20px' padding="20px 0px">Fique de olho!</SspanText>
                            <ValeCompras></ValeCompras>
                            <div className="d-flex mt-5 justify-content-start col-md-10">
                                <input type="checkbox" required></input>
                                <STextParagraph fontSize="14px" padding="0px 0px 0px 8px">
                                Ao continuar, você declara que está de acordo com os termos da&nbsp;
                                <a href="https://www.futfanatics.com.br/politica-de-privacidade" target="_blank">
                                Política de Privacidade
                                </a>
                                 
                                </STextParagraph>
                            </div>
                        </Box>
                     </div>
                     <Button margin="32px auto 32px auto" path="/shipping" typeButton="next" >Avançar</Button>
                </div>
                {/* <Button margin="32px auto" onClick={openModal}>
            Clica aqui corno
          </Button> */}
          <ModalDevolution isOpen={IsOpen} onRequestClose={closeModal}>
            {" "}
          </ModalDevolution>    
            </section>
            <Footer></Footer>
        </>
    )

}