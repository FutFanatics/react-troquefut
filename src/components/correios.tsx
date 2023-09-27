import { Box } from "../componentsStyled/Box";
import Button from "../componentsStyled/Button";
import ImgClique from "../img/icon/correios.png"
import React, { useState } from 'react';
import ModalAceite from "./modalaceite";

interface CorreiosProps {
    className?: string;
  }
const Correios : React.FC<CorreiosProps> = ({ className }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    return(
        <div className="container">

            <div className="c-correios row align-items-center flex-column ">
                <Box typeBox="envio" className="col-10 col-md-3">
                    <img src={ImgClique} className="icon"/>
                    
                    <div className="box-text">
                        <li>
                            Ao selecionar o envio pelo clique retire deverá ir até o locker desejado para realizar o auto atendimento;
                        </li>
                        <li>
                            Após a aprovação da devolução receberá um QR code via email para devolução.
                        </li>
                    </div>

                </Box>
                <Button margin="16px 0px 32px 0px" onClick={openModal}>
                    Avançar
                </Button>
                <ModalAceite     isOpen={modalIsOpen} onRequestClose={closeModal}> </ModalAceite>
            </div>
                    
        </div>
    )

}
export default Correios;