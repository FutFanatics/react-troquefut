import React, { useState } from 'react';
import { Box } from '../componentsStyled/Box';

interface TipoFotosProps {
    obrigatorio?:boolean;
    className?: string;
    label?:string;
    items?: { value: string; label: string }[];
    valor?: string;
    onChange?: (selectedOption: string) => void;
    
  }


const TipoFotos : React.FC<TipoFotosProps> = ({className}) => {
    return(
        <>
        <Box className='col-md-2'>

        </Box>
        </>
            
            )
        }
    export default TipoFotos;