import { SBox } from "../../componentsStyled/Box";
import Button, { ButtonNext } from "../../componentsStyled/Button";
import Footer from "../../components/footer";
import { STextParagraph, SH1, SspanText } from "../../componentsStyled/Text";
import React, { useState } from 'react';
import Menu from "../../components/menu";
import Options from "../../components/options";
import CliqueRetire from "../../components/cliqueretire";
import Header from "../../components/header";
import Correios from "../../components/correios";

export default function Shipping() {
    const [selectedContent, setSelectedContent] = useState('');
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