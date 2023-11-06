import Footer from "../../components/footer";
import { SH1 } from "../../componentsStyled/Text";
import React, { useState } from "react";
import Options from "../../components/options";
import CliqueRetire from "../../components/cliqueretire";
import Header from "../../components/header";
import Correios from "../../components/correios";
import Button from "../../componentsStyled/Button";
import ModalAceite from "../../components/modalaceite";
import Slider from "react-slick";
import Menu from "../../components/menu";

export default function Shipping() {
  const [cliqueRetireSelected, setCliqueRetireSelected] = useState(false);
  const [correiosSelected, setCorreiosSelected] = useState(false);

  const handleCliqueRetireSelect = () => {
    setCliqueRetireSelected(true);
    setCorreiosSelected(false);
  };

  const handleCorreiosSelect = () => {
    setCorreiosSelected(true);
    setCliqueRetireSelected(false);
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    setModalOpen(true);
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
  return (
    <>
      <Header></Header>
      <Menu typeOption="active"></Menu>
      <section className="c-shipping">
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
          

          <Button margin="32px auto" onClick={openModal}>
            Confirmar
          </Button>
          <ModalAceite isOpen={modalIsOpen} onRequestClose={closeModal}>
            {" "}
          </ModalAceite>
        </div>
        <Footer></Footer>
      </section>
    </>
  );
}
