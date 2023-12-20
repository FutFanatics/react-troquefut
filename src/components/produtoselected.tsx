import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Slider from "react-slick";
import ModalCamera from "./modalfoto";
import { Box } from "../componentsStyled/Box";
import { SH1, STextParagraph, SspanText } from "../componentsStyled/Text";
import OutOfDateModal from "./OutOfDateModal";
import IconCamera from "../componentsStyled/icon/Iconcamera";
import ListaSelected from "./listaselected";
import { Produto } from "./Types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IconInformative from "../componentsStyled/icon/iconinformative";
import IconInfoVale from "../componentsStyled/icon/iconinfovale";
import ModalData from "./modaldata";
import { useDataContext } from "../context/DataContext";
/* import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; */
interface ProductSelectedProps {
  className?: string;
  produtos?: Produto[];
  produtosSelecionados?: Produto[];
  onDataUpdate?: (data: any) => void;
  onSaveTipoReembolso?: (tipoReembolso: string) => void;
  produtoSelecionadoData?: any;
  orderId?: string;
  allowed_clique_retire?: string;
  delivery_date?: string;
  payment_method?:string;
}

const ProductSelected: React.FC<ProductSelectedProps> = ({
  produtos,
  onDataUpdate,
  onSaveTipoReembolso,
  produtoSelecionadoData,
  orderId,
  payment_method,
  allowed_clique_retire,
  delivery_date,
}) => {
  const location = useLocation();
  const { data, updateData } = useDataContext();
  const [tipoReembolso, setTipoReembolso] = useState("");
  const [motivoDevolucao, setMotivoDevolucao] = useState("");
  const [subDevolucao, setSubDevolucao] = useState<number | string>("");
  const [quantidade, setQuantidade] = useState<number | "">("");
  const [reasons, setReasons] = useState<any[]>([]);
  const [obsDev, setObsDev] = useState<string>("");
  const [subReasons, setSubReasons] = useState<any[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [fotoAdicionada, setFotoAdicionada] = useState(false);
  const [mediaRequired, setMediaRequired] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isBotaoConfirmarHabilitado, setIsBotaoConfirmarHabilitado] =
    useState(false);
  const [dadosSelecionados, setDadosSelecionados] = useState(
    location.state || {}
  );
  const [produtoData, setProdutoData] = useState<Record<number, any>>({});
  const [modalData, setModalData] = useState<any>(null);
  const [updatedData, setUpdatedData] = useState<any>({});
  const [outOfDateModalIsOpen, setOutOfDateModalIsOpen] =
    useState<boolean>(false);
  const [reasonDeadlines, setReasonDeadlines] = useState<
    Record<string, string>
  >({});
  const [obsDevByProduct, setObsDevByProduct] = useState<Record<string, string>>(
    {}
  );
  const [isMediaRequiredError, setIsMediaRequiredError] = useState(false);
  const navigate = useNavigate();
  


  const areAllFieldsFilled = () => {
    return produtos.every((produto) => {
      const data = produtoData[produto.product_id]?.[produto.variant_value] || {};
      const selectedReason = reasons.find(
        (reason) => reason.description === data.motivoDevolucao
      );
  
      return (
        data.tipoReembolso &&
        data.motivoDevolucao &&
        data.quantidade !== "" &&
        data.subDevolucao !== "" &&
        data.obsDev !== "" &&
        (!selectedReason || selectedReason.media_required !== 1 || fotoAdicionada)
      );
    });
  };
  

  const updateProdutoData = (productId, key, value, variant_value?, subReasonId?, name?, selectedValue?) => {
    setProdutoData((prevProdutoData) => ({
      ...prevProdutoData,
      [productId]: {
        ...prevProdutoData[productId],
        [variant_value]: {
          ...prevProdutoData[productId]?.[variant_value],
          [key]: value,
        },
      },
    }));
  };

  useEffect(() => {
    fetch("https://api.troquefuthomologacao.futfanatics.com.br/api/reasons")
      .then((response) => response.json())
      .then((data) => {
        setReasons(data);

        const deadlines = {};

        data.forEach((reason) => {
          const currentDate = new Date();
          const deadlineDate = new Date(currentDate);
          deadlineDate.setDate(currentDate.getDate() + reason.days_allowed);
          const formattedDeadlineDate = formatDate(
            delivery_date,
            reason.days_allowed
          );
          deadlines[reason.description] = formattedDeadlineDate;
        });

        setReasonDeadlines(deadlines);
      })
      .catch((error) => console.error("Error fetching reasons:", error));
  }, [delivery_date]);

  useEffect(() => {
    const selectedReason = reasons.find(
      (reason) => reason.description === motivoDevolucao
    );

    if (selectedReason && outOfDateModalIsOpen) {
      setMotivoDevolucao("");
    }

    if (selectedReason && selectedReason.media_required === 1) {
      setMediaRequired(true);
      setIsMediaRequiredError(!fotoAdicionada);
    } else {
      setMediaRequired(false);
      setIsMediaRequiredError(false);
    }
    if (selectedReason && selectedReason.subReasons) {
      setSubReasons(selectedReason.subReasons);
    } else {
      setSubReasons([]);
    }

    if (selectedReason) {
      const deadlineDate = new Date(reasonDeadlines[motivoDevolucao]);
      const currentDate = new Date();

      if (currentDate > deadlineDate) {
        setOutOfDateModalIsOpen(true);
      }
    }
  }, [motivoDevolucao, produtoSelecionadoData, reasons, reasonDeadlines,outOfDateModalIsOpen]);

  const handlePhotoUploadComplete = () => {
    setIsMediaRequiredError(false);
    setFotoAdicionada(true);
  };

  useEffect(() => {
    if (onDataUpdate) {
      onDataUpdate(updatedData);
    }
  }, [updatedData, onDataUpdate, fotoAdicionada]);

  const formatDate = (baseDate, daysToAdd) => {
    const deadlineDate = new Date(baseDate);
    deadlineDate.setDate(deadlineDate.getDate() + daysToAdd);

    const year = deadlineDate.getFullYear();
    const month = String(deadlineDate.getMonth() + 1).padStart(2, "0");
    const day = String(deadlineDate.getDate()).padStart(2, "0");

    return `${year}-${month}-${day} 00:00:00`;
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const upData = () => {
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
console.log('iai', payment_method)
  const closeModal = () => {
    setModalIsOpen(false);
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
    variant_value: string,
    key: string,
    selectedValue: any,
    subReasonId?: number | React.ChangeEvent<HTMLInputElement>,
    e?: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (key === "obsDev" && e) {
      const { value } = e.target;
  
      updateProdutoData(
        productId,
        key,
        value,
        variant_value,
        subReasonId,
        "inputName"
      );
  
      setObsDevByProduct((prevObsDev) => ({
        ...prevObsDev,
        [`${productId}-${variant_value}`]: value,
      }));
    } else {
      updateProdutoData(
        productId,
        key,
        selectedValue,
        variant_value,
        subReasonId,
        "inputName"
      );
  
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
    }
  
    const updatedProductData = {
      ...produtoSelecionadoData,
      tipoReembolso,
      motivoDevolucao,
      quantidade,
      subDevolucao,
      subReasonId,
      variant_value,
      obsDev: key === "obsDev" ? selectedValue : obsDev,
      [key]: selectedValue,
    };
    setObsDev(key === "obsDev" ? selectedValue : obsDev);
  
    console.log("obsDevInput:", obsDev);
  
    const selectedProductIndex = produtos.findIndex(
      (produto) =>
        produto.product_id === productId &&
        produto.variant_value === variant_value
    );
  
    if (selectedProductIndex !== -1) {
      const selectedProduct = produtos[selectedProductIndex];
  
      selectedProduct.selectedProduct = {
        ...selectedProduct.selectedProduct,
        [key]: selectedValue,
      };
  
      const updatedProducts = [
        ...produtos.slice(0, selectedProductIndex),
        selectedProduct,
        ...produtos.slice(selectedProductIndex + 1),
      ];
  
      updateData({
        ...updatedProductData,
        products: updatedProducts,
      });
    }
  };
  

  const handleConfirmar = () => {
    const dadosSelecionadosAtualizados = produtos.map((produto) => {
      const dadosProduto = produtoData[produto.product_id] || {};
      return {
        ...dadosSelecionados,
        ...produtoSelecionadoData,
        ...produto,
      };
    });
  
    console.log("Dados selecionados poroduct:", dadosSelecionadosAtualizados);
  
    const todosCamposPreenchidos = areAllFieldsFilled();
    const isMediaRequiredFilled = !isMediaRequiredError;
  
    if (todosCamposPreenchidos && isMediaRequiredFilled) {
      if (onDataUpdate) {
        onDataUpdate(dadosSelecionadosAtualizados);
      }
  
      setIsBotaoConfirmarHabilitado(true);
  
      if (payment_method.toLowerCase() === "cartão") {
        navigate("/shipping", {
          state: dadosSelecionadosAtualizados,
        });
      } else if (tipoReembolso.toLowerCase() === "estorno") {
        setIsModalOpen(true);
        setDadosSelecionados(dadosSelecionadosAtualizados);
      } else {
        navigate("/data", {
          state: dadosSelecionadosAtualizados,
        });
        setIsModalOpen(true);
        setDadosSelecionados(dadosSelecionadosAtualizados);
      }
    } else {
      console.error("Preencha todos os campos antes de confirmar");
      setIsBotaoConfirmarHabilitado(false);
      setIsMediaRequiredError(!isMediaRequiredFilled);
    }
  };
  

  const settings = {
    dots: true,
    arrow: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },

    ],
    
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
                          produto.variant_value,
                          "tipoReembolso",
                          selectedValue
                        )
                      }
                      selectedValue={produtoData[produto.product_id]?.[produto.variant_value]?.tipoReembolso}

                    ></ListaSelected>
                  </div>
                  <div className="d-flex flex-column justify-content-center content-select">
                    <STextParagraph typeParagraph="select">
                      *Quantidade
                    </STextParagraph>
                    <ListaSelected
                    options={Array.from({ length: produto.quantity }, (_, i) => i + 1)}
                    onChange={(selectedValue) =>
                      handleSelectChange(
                        produto.product_id,
                        produto.variant_value,
                        "quantidade",
                        selectedValue as number | ""
                      )
                    }
                    selectedValue={produtoData[produto.product_id]?.[produto.variant_value]?.quantidade}
                  />
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
                          produto.variant_value,
                          "motivoDevolucao",
                          selectedValue
                        )
                      }
                      selectedValue={produtoData[produto.product_id]?.[produto.variant_value]?.motivoDevolucao
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
                      optionsSubReason={subReasons.map((subReason) => {
                        return {
                          id: subReason.id,
                          name: subReason.description,
                        };
                      })}
                      onChange={(selectedValue) =>
                        handleSelectChange(
                          produto.product_id,
                          produto.variant_value,
                          "subDevolucao",
                          selectedValue
                        )
                      }
                      selectedValue={produtoData[produto.product_id]?.[produto.variant_value]?.subDevolucao
                      }
                    ></ListaSelected>
                  </div>
                </div>
                <div className="d-md-flex justify-content-between">
                  <div className="d-flex flex-column justify-content-center content-select">
                    <STextParagraph typeParagraph="select">
                      Observações
                    </STextParagraph>
                    <input
                    type="text"
                    name={`obsDev-${produto.product_id}-${produto.variant_value}`}
                    value={obsDevByProduct[`${produto.product_id}-${produto.variant_value}`] || ''}
                    onChange={(e) =>
                      handleSelectChange(
                        produto.product_id,
                        produto.variant_value,
                        'obsDev',
                        e.target.value,
                        undefined,
                        e
                      )
                    }
                  />
                  </div>
                  <div className="d-flex flex-column justify-content-center content-select">
                    <Box
                      className="d-flex flex-column justify-content-center"
                      margin="12px 0px 0px 0px"
                    >   <div className="d-flex align-items-center">
                        <a onClick={() => setModalIsOpen(true)}>
                          <Box typeBox="cam">
                            <IconCamera fill="#fff" width={25}></IconCamera>
                          </Box>
                        </a>
                      <STextParagraph typeParagraph="select">
                        Anexar fotos
                      </STextParagraph>
                    </div>
                      {isMediaRequiredError && (
                      <p style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
                        O envio de fotos é obrigatório
                      </p>
                    )}
                    </Box>
                  </div>
                </div>
                <ModalCamera
                  isOpen={modalIsOpen}
                  onRequestClose={() => setModalIsOpen(false)}
                  onPhotoAdded={() => {
                    setFotoAdicionada(true);
                    handlePhotoUploadComplete();
                  }}
                  dadosSelecionados= {produto}
                  onPhotoUploadComplete={handlePhotoUploadComplete}

                />
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
      {(!isFotoAdicaoValida || !areAllFieldsFilled()) && (
        <p style={{ color: "red", fontSize: "12px", marginTop: "8px", textAlign:"center", marginBottom:"-24px" }}>
          Por favor, preencha todos os campos obrigatórios antes de confirmar.
        </p>
      )}
      <button
        onClick={handleConfirmar}
        disabled={!isFotoAdicaoValida || !areAllFieldsFilled()}
        className="button-fut"
      >
        Confirmar
      </button>
      <ModalData
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        modalData={modalData}
        dadosSelecionados={dadosSelecionados}
        onConfirm={() => navigate("/data", { state: dadosSelecionados })}
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
