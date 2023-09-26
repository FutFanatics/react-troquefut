import React, { useState } from 'react';

interface ListaFotosProps {
    obrigatorio?:boolean;
    className?: string;
    label?:string;
    items?: { value: string; label: string }[];
    valor?: string;
    onChange?: (selectedOption: string) => void;
    
  }


const ListaFotos : React.FC<ListaFotosProps> = ({
    className,
    obrigatorio = false,
    label,
    items = [],
    valor,
    onChange,
  }) => {
    const [selectedOption, setSelectedOption] = useState(valor || '');

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);

        if (onChange) {
            onChange(selectedValue);
          }
        };
    return(
        <>
        <div className="c-lista_suspensa row justify-content-center mt-4">
            {label && <label></label>}
            <select required={obrigatorio} value={selectedOption} onChange={handleOptionChange} className='col-md-10 lista-select'>
            <option value="">Selecione uma opção</option>
                {items.map((item, index) => (
                <option key={index} value={item.value}>
                    {item.label}
                </option>
             ))}
             </select>
        </div>
        
        </>
            
            )
        }
    export default ListaFotos;