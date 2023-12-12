import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import { Box } from "../componentsStyled/Box";
import Button from "../componentsStyled/Button";
import ModalAnalise from "./modalAnalise";
import ModalDevolution from "./modaldevolution";
import { useMediaQuery } from "react-responsive";
import IconArrowBottom from "../componentsStyled/icon/Iconarrowbottom";
import IconArrowTop from "../componentsStyled/icon/Iconarrowtop";
import { SH1, SspanText } from "../componentsStyled/Text";

interface DetailsDevolutionProps {
  className?: string;
  devolutionId?: string;
}

interface Product {
  quant?: number;
  price: string;
  image?: string;
  name?: string;
  refundType: string;
  reasonSub: string;
  reasonMain: string;
  obs: string;
  variant: string | null;
}

interface HistoryItem {
  title: string;
  date: string;
  fileIcon: string;
  status: string;
}

interface Status {
  title: string;
  status: string;
  msg: string;
  color: string;
}

interface LDN {
  status: boolean;
  url: string;
}

export interface DataFollow {
  id: number;
  order_id: number;
  method_shipment: string | null;
  dateCreatedReturn: string;
  customer: {
    fullname?: string;
    fone: string;
    cellphone: string;
    cep: string;
    state: string;
    city: string;
    neigh_borhood: string;
    street: string;
    number: string;
    complement: string;
  };
  products: Product[];
  history: HistoryItem[];
  status: Status;
  coupon: string;
  ldn: LDN;
}

const DetailsDevolution: React.FC<DetailsDevolutionProps> = ({ className, devolutionId }) => {
  const [data, setData] = useState<DataFollow | null>(null);
  const [modalType, setModalType] = useState("");
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [isContentOpen, setIsContentOpen] = useState(!isMobile);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentProductIndex(newIndex),
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
      if (devolutionId) {
        let auth = localStorage.getItem("auth");

        if (auth) {
          const authObj = JSON.parse(auth);
          const username = authObj.email;
          const password = authObj.token;
          const customerId = authObj.customerId;
          const text: string = username + ":" + password;
          const encoder: TextEncoder = new TextEncoder();
          const data: Uint8Array = encoder.encode(text);

          const dataArray: number[] = Array.from(data);

          const binaryString: string = String.fromCharCode.apply(null, dataArray);
          const basicAuth: string = btoa(binaryString);

          try {
            const response = await axios.get(
              `https://api.troquefuthomologacao.futfanatics.com.br/api/accompany/${customerId}/${devolutionId}`,
              {
                timeout: 10000,
                headers: {
                  Authorization: "Basic " + basicAuth,
                },
              }
            );

            setData(response.data);
            console.log(response.data, "Dados do pedido recebidos com sucesso");
          } catch (error) {
            console.log(error, "Erro ao obter dados do pedido");
          }
        }
      }
    };

    fetchData();
  }, [devolutionId]);

  const handleButtonClick = () => {
    if (data) {
      const devolution = data;

      if (devolution.status && devolution.status.title) {
        if (devolution.status.title === "Em Análise") {
          setModalType("analise");
        } else if (devolution.status.title === "Negada") {
          setModalType("devolution");
        } else if (devolution.status.title === "Reembolso Aprovado") {
          setModalType("reembolso");
        } else if (devolution.status.title === "Devolução Finalizada") {
          setModalType("concluido");
        } else if (devolution.status.title === "Envio") {
          setModalType("envio");
        }
      }
    }
  };

  const closeModal = () => {
    setModalType("");
  };

  return (
    <>
      {data && (
        <Box typeBox="datafollow" className="col-md-12 mt-4">
          <h1 onClick={() => isMobile && setIsContentOpen(!isContentOpen)}>
            Sua Solicitação {isMobile && (isContentOpen ? <IconArrowTop width={14}/> : <IconArrowBottom width={14}/>)}
          </h1>
          {(isMobile && isContentOpen) || !isMobile ? (
            <>
              <h4>Solicitação: #{data.order_id}</h4>
              <div className="d-flex justify-content-between flex-column flex-md-row">
                <div className="content-img">
                  <Slider {...settings} className="slide">
                    {Array.isArray(data.products) &&
                      data.products.map((product, productIndex) => (
                        <div key={productIndex}>
                          <img src={product.image ?? undefined} alt={`Product Image ${productIndex + 1}`} />
                        </div>
                      ))}
                  </Slider>
                  <Button typeButton="followdevolution" onClick={handleButtonClick}>
                    {data.status.title}
                  </Button>
                </div>
                <div className="content-product_describe">
                  <h3>{data.products[currentProductIndex]?.name || "-"}</h3>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column content">
                      <label>Tamanho</label>
                      <p>{data.products[currentProductIndex]?.variant || "-"}</p>
                    </div>
                    <div className="d-flex flex-column content">
                      <label>Preço</label>
                      <p>R${parseFloat(data.products[currentProductIndex]?.price).toFixed(2)}</p>
                    </div>
                  <div className="d-flex flex-column content">
                    <label>Quantidade</label>
                    <p>{data.products[currentProductIndex]?.quant || "-"}</p>
                  </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column content">
                      <label>Motivo da Devolução</label>
                      <p>{data.products[currentProductIndex]?.reasonMain}</p>
                    </div>
                    <div className="d-flex flex-column content">
                      <label>Sub-Motivo</label>
                      <p>{data.products[currentProductIndex]?.reasonSub}</p>
                    </div>
                  <div className="d-flex flex-column content">
                    <label>Observação</label>
                    <p>{data.products[currentProductIndex]?.obs || "-"}</p>
                  </div>
                  </div>
                  <SspanText fontWeight={400} fontSize="14px" color="#474747" padding="0px 0px 16px 0px"> Solicitação</SspanText >
                  <div className="d-flex justify-content-between mt-2 ">
                  <div className="d-flex flex-column content">
                    <label>Tipo de Reembolso</label>
                    <p>{data.products[currentProductIndex]?.refundType || "-"}</p>
                  </div>
                  <div className="d-flex flex-column content">
                    <label>Forma de Envio</label>
                    <p>{data[currentProductIndex]?.method_shipment || "-"}</p>
                  </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}
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
