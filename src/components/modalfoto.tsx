import React from 'react';
import Modal from 'react-modal';
import IconClose from '../componentsStyled/icon/Iconclose';
import IconCamera from '../componentsStyled/icon/Iconcamera';
import { SH1, STextParagraph } from '../componentsStyled/Text';
import ListaFotos from './listafotos';
import TipoFotos from './tipofotos';

interface ModalCameraProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const ModalCamera: React.FC<ModalCameraProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="c-modal_foto">
      <div className='container'>
        <IconCamera width={50} fill='#192C53' className='icon-camera'></IconCamera>  
        <SH1 fontSize='22px' margin='32px 0px 16px 0px'>Anexar Fotos do Produto</SH1>

        <STextParagraph fontSize='17px'>
          Para garantir a qualidade das fotos anexadas, selecione abaixo o 
        </STextParagraph>

        <STextParagraph fontSize="17px" padding='8px 0px 0px 0px'>
          tipo de produto que está devolvendo e siga as instruções
        </STextParagraph>
        <ListaFotos></ListaFotos>
        <div className='row'>
          <TipoFotos></TipoFotos>
        </div>
        
      </div>
      
      <button onClick={onRequestClose} className='btn-close'></button>
    </Modal>
  );
};

export default ModalCamera;