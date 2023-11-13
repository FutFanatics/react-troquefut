import React, { useState, useEffect } from "react";
import { DataFollow } from "./Types";
import { Box } from "../componentsStyled/Box";
import Slider from "react-slick";
import Button from "../componentsStyled/Button";

interface DetailsDevolutionProps {
  className?: string;
}

const DetailsDevolution: React.FC<DetailsDevolutionProps> = ({ className }) => {
  const [devolutionData, setDevolutionData] = useState<DataFollow | undefined>(undefined);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5001/acompanhe");
        if (response.ok) {
          const data = await response.json();
          
          setDevolutionData(data[0]);
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:");
      }
    };

    fetchData();
  }, []);
  return (
    <>
    {devolutionData && (
      <Box typeBox="datafollow" className="col-md-12 mt-4">
        <h1>Sua Solicitação</h1>
        <h4>Solicitação: #{devolutionData.orderId}</h4>
        <div className="d-flex justify-content-between">
          <div className="content-img">
            <Slider {...settings} className="slide">
                {Array.isArray(devolutionData.imgs)&& devolutionData.imgs.map((img,index)=> (
                <div key={index}>
                  <img src={img.url} alt={`Product Image ${index + 1}`} />
                </div>
              ))}
            </Slider>
            <Button typeButton="followdevolution">{devolutionData.status.title}</Button>
          </div>
          <div className="content-product_describe">
            <h3>{devolutionData.name}</h3>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column content">
                <label>Tamanho</label>
                <p>{devolutionData.variant.value}</p>
              </div>
              <div className="d-flex flex-column content">
                <label>Preço</label>
                <p>R${devolutionData.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="d-flex flex-column content">
              <label>Quantidade</label>
              <p>{devolutionData.quant}</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column content">
                <label>Motivo da Devolução</label>
                <p>{devolutionData.reasonMain}</p>
              </div>
              <div className="d-flex flex-column content">
                <label>Sub-Motivo</label>
                <p>{devolutionData.reasonSub}</p>
              </div>
            </div>
            <div className="d-flex flex-column">
              <label>Observação</label>
              <p>{devolutionData.obs}</p>
            </div>
          </div>
        </div>
      </Box>
    )}
  </>
  );
};

export default DetailsDevolution;
