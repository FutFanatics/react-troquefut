import React, { useState } from 'react';
import { SBox } from './Box';
import { STextParagraph, SH1 } from './Text';

import ImgText from '../img/imgproduto.png'
import { ButtonNext } from './Button';


const ItemOption = ItemOption.div`
  padding: 30px;
  border-radius: 40px;
  width: 100%;
  box-shadow: 1px 1px 2px 1px rgba(00,00,00,0.3);
  min-height: 20vh;
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid ${(props) => props.borderColor};

  .img-options{
        width: 40%;
        img{
            width: 100%;
        }
    }
    .text-options{
        margin-left: 16px;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }


`;


export default function CustomSelect() {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [contentToShow, setContentToShow] = useState('');

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    
    const content = optionsData[selectedValue] || '';
    setContentToShow(content);
  };

  function toggleDivColors() {
    setIsActive((prevActive) => !prevActive);
  }

  const backgroundColor = isActive  ? '#EEE' : '#FFF';
  const borderColor = isActive ? '2px solid #4CAF50 1px' : '1px solid rgba(00,00,00,0.4)';

  const optionsData = {
    opcao1: 
    <ItemOption backgroundColor={backgroundColor} borderColor={borderColor}>
          <div className='col-md-6 d-flex align-items-center' >
              <div className='img-options'><img src={ImgText}/></div>
              <div className='text-options'>
                  <SH1 typeTitle='dadosPedido'>Camisa são paulo</SH1>
                  <STextParagraph typeParagraph='paragraphpedido'><strong>Código:</strong>xxx</STextParagraph>
                  <STextParagraph typeParagraph='paragraphpedido'><strong>Variação:</strong>xxx</STextParagraph>
                  <STextParagraph typeParagraph='paragraphpedido'><strong>Preço:</strong>xxx</STextParagraph>
                  <STextParagraph typeParagraph='paragraphpedido'><strong>Link:</strong>xxx</STextParagraph>
              </div>
          </div>
          <div className='col-md-3 d-flex justify-content-center'>
            <ButtonNext typeButtonNext='order' onClick={toggleDivColors}>Selecionar</ButtonNext>
          </div>
    </ItemOption>,
    opcao2: 'Conteúdo para Opção 2',
    opcao3: 'Conteúdo para Opção 3',
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