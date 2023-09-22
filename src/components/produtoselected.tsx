import { Box } from "../componentsStyled/Box";
import Button from "../componentsStyled/Button";
import { SH1, STextParagraph, SspanText } from "../componentsStyled/Text";
import IconCamera from "../componentsStyled/icon/Iconcamera";
import sp from '../img/img-camisa_sp.png';
import { Produto } from './Types';
import ListaSelected from "./listaselected";
import React, { useState } from 'react';
import ModalCamera from "./modalfoto";
import Modal from 'react-modal';

interface ProductSelectedProps {
    className?: string;
    produto: Produto | null;
    
  }
const ProductSelected : React.FC<ProductSelectedProps> = ({ produto }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const [tipoReembolso, setTipoReembolso] = useState<string>('');
    const [motivoDevolucao, setMotivoDevolucao] = useState<string>('');
    const [quantidade, setQuantidade] = useState<number | ''>('');


    if (!produto) {
      return null; 
    }
    return(
        <>
        <Box typeBox="productselected" className="col-md-5 product-selected" >
            <div className="row">
                <Box className="flex-column d-flex align-items-center justify-content-center col-4" margin="0px">
                    <a href={produto.url} target="_blank"> 
                        <img className="product-selected-img" src={sp}/>
                    </a>
                    <SH1 fontSize="15px" margin="12px 0px 8px 0px" fontWeight={500}>{produto.nome}</SH1>
                    <SspanText fontSize="16px">Variação: {produto.variacao}</SspanText>
                </Box>
                <Box className="col-md-8" margin="0px">
                    <STextParagraph typeParagraph ='select'>*Tipo de Reembolso</STextParagraph>
                    <ListaSelected 
                    options={['Cupom', 'Estorno']}
                    onChange={(selectedValue) => setTipoReembolso(selectedValue)}
                    selectedValue={tipoReembolso}
                    ></ListaSelected>

                    <STextParagraph typeParagraph ='select'>*Motivo da Devolução</STextParagraph>
                    <ListaSelected 
                    options={['Motivo A', 'Motivo B', 'Motivo C']}
                    onChange={(selectedValue) => setMotivoDevolucao(selectedValue)}
                    selectedValue={motivoDevolucao}
                    ></ListaSelected>

                    <STextParagraph typeParagraph="select">*Quantidade</STextParagraph>
                    <ListaSelected 
                    options={[1, 2, 3, 4, 5]}
                    onChange={(selectedValue) => setQuantidade(selectedValue as number | '')}
                    selectedValue={quantidade}
                    ></ListaSelected>
                    <STextParagraph typeParagraph ='select'>Observações</STextParagraph>
                    <input type="text">
                    </input>
                    <Box className="d-flex align-items-center" margin="12px 0px 0px 0px">
                        <a onClick={openModal}>
                            <Box typeBox="cam">
                                <IconCamera fill="#fff" width={22}></IconCamera>
                            </Box>
                        </a>
                        <STextParagraph typeParagraph ='select'> Anexar fotos</STextParagraph>
                    </Box>
                    <ModalCamera isOpen={modalIsOpen} onRequestClose={closeModal} />
                </Box>
            </div>
            
        </Box>

        </>
    )

}
export default ProductSelected;