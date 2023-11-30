import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import ModalCamera from "./modalfoto";
import { Box } from "../componentsStyled/Box";
import { SH1, STextParagraph, SspanText } from "../componentsStyled/Text";
import OutOfDateModal from './OutOfDateModal'; // Import the OutOfDateModal component
import IconCamera from "../componentsStyled/icon/Iconcamera";
import ListaSelected from "./listaselected";
import { Produto } from "./Types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IconInformative from "../componentsStyled/icon/iconinformative";
import IconInfoVale from "../componentsStyled/icon/iconinfovale";
import ModalData from "./modaldata";

interface ProductSelectedProps {
  className?: string;
  produtos: Produto[];
  produtosSelecionados?: Produto[];
  onDataUpdate?: (data: any) => void;
  onSaveTipoReembolso?: (tipoReembolso: string) => void;
  produtoSelecionadoData?: any;
  orderId?: any;
}

const ProductSelected: React.FC<ProductSelectedProps> = ({
  produtos,
  produtosSelecionados,
  onDataUpdate,
  onSaveTipoReembolso,
  produtoSelecionadoData,
  orderId,
}) => {
  const [tipoReembolso, setTipoReembolso] = useState<string>("");
  const [motivoDevolucao, setMotivoDevolucao] = useState<string>("");
  const [subDevolucao, setSubDevolucao] = useState<string>("");
  const [quantidade, setQuantidade] = useState<number | "">("");
  const [reasons, setReasons] = useState<any[]>([]);
  const [subReasons, setSubReasons] = useState<any[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [fotoAdicionada, setFotoAdicionada] = useState(false);
  const [mediaRequired, setMediaRequired] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isBotaoConfirmarHabilitado, setIsBotaoConfirmarHabilitado] =
    useState(false);
  const [produtoData, setProdutoData] = useState<Record<number, any>>({});
  const [updatedData, setUpdatedData] = useState<any>({})
  const [outOfDateModalIsOpen, setOutOfDateModalIsOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.troquefuthomologacao.futfanatics.com.br/api/reasons")
      .then((response) => response.json())
      .then((data) => {
        setReasons(data);
        console.log("Fetched reasons:", data);
      })
      .catch((error) => console.error("Error fetching reasons:", error));
  }, []);

  useEffect(() => {
    const selectedReason = reasons.find(
      (reason) => reason.description === motivoDevolucao
    );

    console.log("Selected Reason:", selectedReason);

    if (selectedReason?.media_required === 1) {
      setMediaRequired(true);
    } else {
      setMediaRequired(false);
    }

    if (selectedReason && selectedReason.subReasons) {
      setSubReasons(selectedReason.subReasons);
    } else {
      setSubReasons([]);
    }

    
    if (motivoDevolucao) {
      const deadlineDate = calculateDeadlineDate();

      
      const currentDate = new Date();

      if (currentDate > deadlineDate) {
        
        setOutOfDateModalIsOpen(true);
      }
    }
  }, [motivoDevolucao, produtoSelecionadoData, reasons]);
  useEffect(() => {
    if (onDataUpdate) {
      onDataUpdate(updatedData);
    }
  }, [updatedData, onDataUpdate])
  ;
  console.log("vai", updatedData)
  const openModal = () => {
    setModalIsOpen(true);
  };

  const updateData = () => {
    const newData = {
      tipoReembolso,
      motivoDevolucao,
      quantidade,
      subDevolucao,
      orderId,
      ...produtoSelecionadoData,
    };
    if (onDataUpdate) {
      onDataUpdate(newData);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    updateData();
  };

  if (!produtos || produtos.length === 0) {
    return null;
  }

  const isFotoAdicaoValida = fotoAdicionada || motivoDevolucao !== "";
  localStorage.setItem("tipoReembolso", tipoReembolso);

  if (onSaveTipoReembolso) {
    onSaveTipoReembolso(tipoReembolso);
  }
  const handleSelectChange = (
    productId: string | number,
    key: string,
    selectedValue: any
  ) => {
    const updatedData = {
      ...produtoSelecionadoData,
      tipoReembolso,
      motivoDevolucao,
      quantidade,
      subDevolucao,
      [key]: selectedValue,
    };
  
    switch (key) {
      case "tipoReembolso":
        setTipoReembolso(selectedValue);
        break;
      case "motivoDevolucao":
        setMotivoDevolucao(selectedValue);
        break;
      case "quantidade":
        setQuantidade(selectedValue);
        break;
      case "subDevolucao":
        setSubDevolucao(selectedValue);
        break;
      default:
        break;
    }
  
    setUpdatedData(updatedData);
  };
  
  
  const handleConfirmar = () => {
  
    const dadosSelecionados = {
      ...produtoSelecionadoData,
      ...updatedData,      
    };
  
    console.log("Dados selecionados:", dadosSelecionados);
    
    const todosCamposPreenchidos = Object.values(dadosSelecionados).every(
      (value) => value !== "" || value == undefined || value == null
    );
    
    if (todosCamposPreenchidos) {
      if (onDataUpdate) {
        onDataUpdate(dadosSelecionados);
      }
  
      setIsBotaoConfirmarHabilitado(true);
  
      if (tipoReembolso === "Estorno") {
        setIsModalOpen(true);
      } else if (
        tipoReembolso === "estorno" &&
        dadosSelecionados.payment_method === "Cartão de Crédito"
      ) {
        navigate("/shipping", {
          state: dadosSelecionados,
        });
      } else {
        navigate("/data", {
          state: dadosSelecionados,
        });
        setIsModalOpen(true);
      }
    } else {
      console.error("Preencha todos os campos antes de confirmar");
      setIsBotaoConfirmarHabilitado(false);
    }
  };

  const calculateDeadlineDate = () => {
    const currentDate = new Date();
    const deadlineDate = new Date(currentDate);
    deadlineDate.setDate(currentDate.getDate() + 7);
    return deadlineDate;
  };

  const settings = {
    dots: false,
    arrow: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <SH1 fontSize="18px">
        Preencha as informações do(s) produto(s) selecionado(s)
      </SH1>
      <Slider {...settings} className="col-md-10 c-slider-product">
        {produtos.map((produto, index) => (
          <Box
            typeBox="productselected"
            className="product-selected"
            key={index}
          >
            <Box
              className="col-md-12 d-flex flex-md-row flex-column"
              style={{ padding: "20px 0px", margin: "0 auto" }}
            >
              <Box
                className="flex-md-column d-flex align-items-center justify-content-center col-md-4"
                margin="0px"
              >
                <a href={produto.url} target="_blank">
                  <img
                    className="product-selected-img"
                    src={produto.img}
                    alt={produto.name}
                  />
                </a>
                <div className="d-flex flex-column align-items-center">
                  <SH1
                    fontSize="15px"
                    fontSizesm="12px"
                    marginsm="0px 8px"
                    margin="12px 0px 8px 0px"
                    fontWeight={500}
                  >
                    {produto.name}
                  </SH1>
                  <SspanText fontSize="16px" fontSizesm="12px">
                    Variação: {produto.variant_value}
                  </SspanText>
                </div>
              </Box>
              <Box className="col-md-8" margin="0px" padding="0px">
                <div className="d-md-flex justify-content-between">
                  <div className="d-flex flex-column justify-content-center content-select">
                    <Box typeBox="informative">
                      <IconInformative
                        width={24}
                        height={24}
                        className="informative"
                      ></IconInformative>
                      <div className="box-informative">
                        <IconInfoVale width={48}></IconInfoVale>
                        <h1>
                          Diferença entre{" "}
                          <strong className="green">Cupom</strong> e{" "}
                          <strong className="blue">Estorno</strong>
                        </h1>
                        <p className="text-informative mt-1">
                          Caso escolha a devolução com <strong>Cupom</strong>,
                          você receberá um vale compras no valor do seu pedido
                          na FutFanatics{" "}
                          <strong className="italic">em até 5 dias.</strong>
                        </p>
                        <p className="text-informative">
                          Caso escolha o <strong>Estorno</strong>, você receberá
                          o valor da sua compra{" "}
                          <strong className="italic">em até 15 dias.</strong>
                        </p>
                      </div>
                    </Box>
                    <STextParagraph typeParagraph="select">
                      *Tipo de Reembolso
                    </STextParagraph>
                    <ListaSelected
                      options={["Cupom", "Estorno"]}
                      onChange={(selectedValue) =>
                        handleSelectChange(
                          produto.product_id,
                          "tipoReembolso",
                          selectedValue
                        )
                      }
                      selectedValue={
                        produtoData[produto.product_id]?.tipoReembolso
                      }
                    ></ListaSelected>
                  </div>
                  <div className="d-flex flex-column justify-content-center content-select">
                    <STextParagraph typeParagraph="select">
                      *Quantidade
                    </STextParagraph>
                    <ListaSelected
                      options={[]}
                      quantityNumber={produto.quantity}
                      onChange={(selectedValue) =>
                        handleSelectChange(
                          produto.product_id,
                          "quantidade",
                          selectedValue as number | ""
                        )
                      }
                      selectedValue={
                        produtoData[produto.product_id]?.quantidade
                      }
                    ></ListaSelected>
                  </div>
                </div>
                <div className="d-md-flex justify-content-between">
                  <div className="d-flex flex-column justify-content-center content-select">
                    <STextParagraph typeParagraph="select">
                      *Por que quer devolver?
                    </STextParagraph>
                    <ListaSelected
                      options={reasons.map((reason) => reason.description)}
                      onChange={(selectedValue) =>
                        handleSelectChange(
                          produto.product_id,
                          "motivoDevolucao",
                          selectedValue
                        )
                      }
                      selectedValue={
                        produtoData[produto.product_id]?.motivoDevolucao
                      }
                    ></ListaSelected>
                  </div>
                  <div className="d-flex flex-column justify-content-center content-select">
                    <STextParagraph typeParagraph="select">
                      *O que aconteceu?
                    </STextParagraph>
                    <ListaSelected
                      options={subReasons.map(
                        (subReason) => subReason.description
                      )}
                      onChange={(selectedValue) =>
                        handleSelectChange(
                          produto.product_id,
                          "subDevolucao",
                          selectedValue
                        )
                      }
                      selectedValue={
                        produtoData[produto.product_id]?.subDevolucao
                      }
                    ></ListaSelected>
                  </div>
                </div>
                <div className="d-md-flex justify-content-between">
                  <div className="d-flex flex-column justify-content-center content-select">
                    <STextParagraph typeParagraph="select">
                      Observações
                    </STextParagraph>
                    <input type="text"></input>
                  </div>
                  <div className="d-flex flex-column justify-content-center content-select">
                    <Box
                      className="d-flex align-items-center"
                      margin="12px 0px 0px 0px"
                    >
                      {mediaRequired && (
                        <a onClick={() => setModalIsOpen(true)}>
                          <Box typeBox="cam">
                            <IconCamera fill="#fff" width={25}></IconCamera>
                          </Box>
                        </a>
                      )}
                      <STextParagraph typeParagraph="select">
                        Anexar fotos
                      </STextParagraph>
                    </Box>
                  </div>
                </div>
                <ModalCamera
                  isOpen={modalIsOpen}
                  onRequestClose={() => setModalIsOpen(false)}
                  onPhotoAdded={() => setFotoAdicionada(true)}
                />
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
      <button
        onClick={handleConfirmar}
        className="button-fut"
      >
        Confirmar
      </button>
      <ModalData
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />
      <OutOfDateModal 
        isOpen={outOfDateModalIsOpen}
        onRequestClose={() => setOutOfDateModalIsOpen(false)}
        onClose={() => {}}
      />
    </>
  );
};

export default ProductSelected;
