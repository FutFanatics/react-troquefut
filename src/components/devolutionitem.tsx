import React, { useEffect, useState } from "react";
import axios from "axios";
import { SH1 } from "../componentsStyled/Text";
import { Box } from "../componentsStyled/Box";
import { Devolution } from "./Types";
import Slider from "react-slick";
import Button from "../componentsStyled/Button";
import IconArrowRight from "../componentsStyled/icon/Iconarrowright";
import IconSucess from "../componentsStyled/icon/Iconsucess";

interface DevolutionItemProps {
  devolucao: {
    id: string;
    imgs: { url: string }[];
    created_at: string;
    result?: string;
  };
}

const DevolutionItem: React.FC<DevolutionItemProps> = ({ devolucao }) => {
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
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const getStatusStyle = () => {
    return devolucao.result === "pending" ? "acompanhar" : "concluida";
  };
  const getIcon = () => {
    
    return devolucao.result === "pending" ? <IconArrowRight width={16} /> : <IconSucess width={16}/>;
  };
  return (
    <Box typeBox="product-devolution">
      <div key={devolucao.id}>
        <Slider {...settings}>
          {Array.isArray(devolucao.imgs) &&
            devolucao.imgs.map((img, index) => (
              <div key={index} className="d-flex justify-content-center">
                <img src={img.url} alt="Devolução" />
              </div>
            ))}
        </Slider>
        <div className="mt-3">
          <p>
            <strong>ID:</strong> {devolucao.id}
          </p>
          <p>{devolucao.created_at}</p>
          <Button typeButton="devolution-status" className={`${getStatusStyle()}`}>
          {devolucao.result === "pending" ? "Acompanhar" : "Concluída"}{getIcon()} 
          </Button>
        </div>
      </div>
    </Box>
  )

}
export default DevolutionItem;