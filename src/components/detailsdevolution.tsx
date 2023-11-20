import React, { useState, useEffect } from "react";
import { DataFollow } from "./Types";
import { Box } from "../componentsStyled/Box";
import Slider from "react-slick";
import Button from "../componentsStyled/Button";
import ModalAnalise from "./modalAnalise";
import ModalDevolution from "./modaldevolution";
import axios from "axios";
interface DetailsDevolutionProps {
  className?: string;
}

const DetailsDevolution: React.FC<DetailsDevolutionProps> = ({ className }) => {
  const [devolutionData, setDevolutionData] = useState<DataFollow | undefined>(undefined);
  const [modalType, setModalType] = useState("");

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
    let auth = localStorage.getItem('auth');
    if(auth) {
        const authObj = JSON.parse(auth);
        console.log(authObj)
  
        const username = authObj.email;
        const password = authObj.token;
        const customerId = authObj.id;
        const text: string = username + ':' + password;
        const encoder: TextEncoder = new TextEncoder();
        const data: Uint8Array = encoder.encode(text);

        
        const dataArray: number[] = Array.from(data);

        
        const binaryString: string = String.fromCharCode.apply(null, dataArray);
        const basicAuth: string = btoa(binaryString);
          
        const fetchData = async () => {
          try {
              const response = await axios.get("https://api.troquefuthomologacao.futfanatics.com.br/api/accompany/"+customerId,
              {
                  timeout: 10000,
                  headers: {
                    'Authorization': 'Basic ' + basicAuth
                  }
              }
              
              );
              
              if (response.status === 200) {
              const data = response.data;
              setDevolutionData(data[0]);
              } else {
              console.error("Error fetching data:", response.statusText);
              }
          } catch (error) {
              console.error("Error fetching data:");
          }
        };
        fetchData();
    }

  }, []);
  const handleButtonClick = () => {
    if (devolutionData) {
      if (devolutionData.status.title === "Em Análise") {
        setModalType("analise"); 
      }
      if (devolutionData.status.title === "Negada") {
        setModalType("devolution"); 
      }
      if (devolutionData.status.title === "Reembolso Aprovado") {
        setModalType("reembolso"); 
      }
      if (devolutionData.status.title === "Devolução FInalizada ") {
        setModalType("concluido"); 
      }
      if (devolutionData.status.title === "Envio") {
        setModalType("envio"); 
      }
    }
  };
  const closeModal = () => {
    setModalType("");
  };

  console.log('devolutionData', devolutionData)
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
            <Button typeButton="followdevolution" onClick={handleButtonClick}>{devolutionData.status.title}</Button>
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
        {modalType === "analise" && (
            <ModalAnalise isOpen={true} onRequestClose={closeModal} />
          )}
          {modalType === "devolution" && (
            <ModalDevolution isOpen={true} onRequestClose={closeModal} />
          )}
          {modalType === "reembolso" && (
            <ModalDevolution isOpen={true} onRequestClose={closeModal} />
          )}
          {modalType === "concluido" && (
            <ModalDevolution isOpen={true} onRequestClose={closeModal} />
          )}
          {modalType === "envio" && (
            <ModalDevolution isOpen={true} onRequestClose={closeModal} />
          )}
      </Box>
    )}
  </>
  );
};

export default DetailsDevolution;
