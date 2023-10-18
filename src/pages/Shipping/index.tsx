
import Footer from "../../components/footer";
import { SH1 } from "../../componentsStyled/Text";
import React, { useState } from 'react';
import Menu from "../../components/menu";
import Options from "../../components/options";
import CliqueRetire from "../../components/cliqueretire";
import Header from "../../components/header";
import Correios from "../../components/correios";
import Button from "../../componentsStyled/Button";
import ModalAceite from "../../components/modalaceite";

export default function Shipping() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);


    const openModal = () => {
        setModalIsOpen(true);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    return (
        <>
        <Header></Header>
        <Menu typeOption="active">
        </Menu>
        <section className="c-shipping">
            <div className="container">

            
            <SH1>
                FORMA DE ENVIO
            </SH1>
            <div className="row justify-content-center">
                <CliqueRetire></CliqueRetire>
                <Correios></Correios>
            </div>
            
            <Button margin="32px auto" onClick={openModal}>
            Confirmar
            </Button>
            <ModalAceite isOpen={modalIsOpen} onRequestClose={closeModal}> </ModalAceite>
            </div>
            <Footer></Footer>

        </section>
        </>
    )

}