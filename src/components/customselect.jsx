import React, { useState } from 'react';
import { SBox } from './Box';
import { STextParagraph, STitle } from './Text';

import ImgText from '../img/imgproduto.png'
import { ButtonNext } from './Button';

const optionsData = {
  opcao1: 
  <div className='item-options d-flex justify-content-between align-items-end'>
        <div className='col-md-6 d-flex align-items-center'>
            <div className='img-options'><img src={ImgText}/></div>
            <div className='text-options'>
                <STitle typeTitle='dadosPedido'>Camisa são paulo</STitle>
                <STextParagraph typeParagraph='paragraphpedido'><strong>Código:</strong>xxx</STextParagraph>
                <STextParagraph typeParagraph='paragraphpedido'><strong>Variação:</strong>xxx</STextParagraph>
                <STextParagraph typeParagraph='paragraphpedido'><strong>Preço:</strong>xxx</STextParagraph>
                <STextParagraph typeParagraph='paragraphpedido'><strong>Link:</strong>xxx</STextParagraph>
            </div>
        </div>
        <div className='col-md-3 d-flex justify-content-center'>
          <ButtonNext typeButtonNext='order'>Selecionar</ButtonNext>
        </div>
  </div>,
  opcao2: 'Conteúdo para Opção 2',
  opcao3: 'Conteúdo para Opção 3',
};

export default function CustomSelect() {
  const[isDivActive, setDivActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [contentToShow, setContentToShow] = useState('');

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    
    const content = optionsData[selectedValue] || '';
    setContentToShow(content);
  };

  function toggleDivColors(){
    setDivActive((prevActive)=>!prevActive);
  }

  const divStyles = {
    backgroundColor: isDivActive ? '#EEE' : '#FFF',
    border: isDivActive ? '1px solid rgba(00,00,00,0.4)' : '2px solid #4CAF50',
  };

  return (
    <div className='container-order w-100 d-flex flex-column align-items-center'>
        <SBox typeBox="boxforms">
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Escolha uma opção</option>
        {Object.keys(optionsData).map((optionKey) => (
          <option key={optionKey} value={optionKey}>
            {optionKey}
          </option>
        ))}
      </select>
      
    </SBox>
    <div className='row w-100 justify-content-center'>
    {contentToShow && <div className='col-md-9'>{contentToShow}</div>}
    </div>
    </div>
    
  );
}