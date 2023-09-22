import React from 'react';
import Modal from 'react-modal';

interface ModalCameraProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const ModalCamera: React.FC<ModalCameraProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Exemplo de Modal">
        
      <h2>Modal Title</h2>
      <p>Conteúdo do modal aqui.</p>
      <button onClick={onRequestClose}>Fechar Modal</button>
    </Modal>
  );
};

export default ModalCamera;
