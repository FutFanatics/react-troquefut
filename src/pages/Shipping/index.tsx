import { SBox } from "../../componentsStyled/Box";
import Button, { ButtonNext } from "../../componentsStyled/Button";
import Footer from "../../components/footer";
import { STextParagraph, SH1, SspanText } from "../../componentsStyled/Text";
import React, { useState } from 'react';
import Menu from "../../components/menu";
import Options from "../../components/options";
import Lista from "../../components/lista";
import CliqueRetire from "../../components/cliqueretire";
import Header from "../../components/header";
import Correios from "../../components/correios";

export default function Shipping() {
    const [selectedContent, setSelectedContent] = useState('');

    const showContent1 = () => {
        setSelectedContent('content1');
      };
      const showContent2 = () => {
        setSelectedContent('content2');
      };
    
      const hideContent = () => {
        setSelectedContent('');
      };
    return (
        <>
        <Header></Header>
        <Menu typeOption="active">
            <Options options={[
                { text: 'Instruções do Pedido', path: '/instructions' },
                { text: 'Pedido', path: '/order' },
                { text: 'Dados', path: '/data' },
                { text: 'Formas de envio', path: '/shipping' },
            ]}/>
        </Menu>
        <section className="c-shipping">
            <SH1>
                FORMA DE ENVIO
            </SH1>
            <CliqueRetire></CliqueRetire>

            <Footer></Footer>
        </section>
        </>
    )

}