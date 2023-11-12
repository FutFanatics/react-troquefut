import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Devolution } from './Types';
import { Box } from '../componentsStyled/Box';
import Slider from 'react-slick';
import { SH1 } from '../componentsStyled/Text';

interface DevolutionProps {
  devolucao?: Devolution[];
}

const ListagemDevolucoes: React.FC<DevolutionProps> = ({ devolucao }) => {
  const [devolucoes, setDevolucoes] = useState<Devolution[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:5001/devolucoes')
      .then((response) => {
        setDevolucoes(response.data);
      })
      .catch((error) => {
        console.log('Erro ao buscar devoluções:', error);
      });
  }, []);
  const formatarData = (data: Date | undefined): string => {
    if (data) {
        const options: Intl.DateTimeFormatOptions = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        };
        return new Date(data).toLocaleDateString('pt-BR', options);
      }
      return '';
    };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className='box-devolution'>
    <SH1 color='#777' fontSize='16px' fontWeight={350} textAlign='start'>Lista de devoluções</SH1>
        <Box typeBox='product-devolution'>
        {devolucoes.map((devolucao) => (
          <div key={devolucao.id}>
             <Slider {...settings}>
            {Array.isArray(devolucao.imgs) &&
                devolucao.imgs.map((img, index) => (
                   
                      <div key={index} className='d-flex justify-content-center'>
                        <img src={img.url} alt="Devolução" />
                    </div>  
                    
                  
                ))}
            </Slider>
            <div className='mt-3'>
                <p><strong>ID:</strong> {devolucao.id}</p>
                <p> {formatarData(devolucao.created_at ? new Date(devolucao.created_at) : undefined)}</p>
                
            </div>
          </div>
        ))}
      </Box>
    </div>
  );
};

export default ListagemDevolucoes;
