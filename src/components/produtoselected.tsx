import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ModalCamera from "./modalfoto";
import { Box } from "../componentsStyled/Box";
import { SH1, STextParagraph, SspanText } from "../componentsStyled/Text";
import IconCamera from "../componentsStyled/icon/Iconcamera";
import ListaSelected from "./listaselected";
import Button from "../componentsStyled/Button";
import { Produto } from "./Types";

interface ProductSelectedProps {
  className?: string;
  produto?: Produto | null;
  produtosSelecionados?: Produto[];
  onDataUpdate?: (data: any) => void;
  onSaveTipoReembolso?: (tipoReembolso: string) => void;
  produtoSelecionadoData?: any;
}

const ProductSelected: React.FC<ProductSelectedProps> = ({
  produto,
  produtosSelecionados,
  onDataUpdate,
  onSaveTipoReembolso,
  produtoSelecionadoData,
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

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.troquefuthomologacao.futfanatics.com.br/api/reasons")
      .then((response) => response.json())
      .then((data) => {
        setReasons(data);
      })
      .catch((error) => console.error("Error fetching reasons:", error));
  }, []);

  useEffect(() => {
    const selectedReason = reasons.find(
      (reason) => reason.description === motivoDevolucao
    );

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
  }, [motivoDevolucao, reasons]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const updateData = () => {
    const newData = {
      tipoReembolso,
      motivoDevolucao,
      quantidade,
      subDevolucao,
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

  const motivoDevolucaoOptions = reasons.map((reason) => reason.description);
  const subDevolucaoOptions = subReasons.map((subReason) => subReason.description);

  if (!produto) {
    return null;
  }

  const isFotoAdicaoValida = fotoAdicionada || motivoDevolucao !== "";
  localStorage.setItem("tipoReembolso", tipoReembolso);

  if (onSaveTipoReembolso) {
    onSaveTipoReembolso(tipoReembolso);
  }

  const handleConfirmar = () => {
    const dadosSelecionados = {
      tipoReembolso,
      motivoDevolucao,
      quantidade,
      subDevolucao,
      ...produtoSelecionadoData,
    };
  
    console.log("Dados selecionados:", dadosSelecionados);
  
    const todosCamposPreenchidos = Object.values(dadosSelecionados).every(
      (value) => value !== ""
    );
  
    if (todosCamposPreenchidos) {
      navigate("/data", {
        state: {
          ...dadosSelecionados,
        },
      });
    } else {
      console.error("Preencha todos os campos antes de confirmar");
    }
  };

  
  return (
    <>
      <SH1>Preencha as informações do(s) produto(s) selecionado(s)</SH1>
      <Box typeBox="productselected" className="col-md-9 product-selected">
        <div className="row w-100">
          <Box
            className="flex-column d-flex align-items-center justify-content-center col-md-4"
            margin="0px"
          >
            <a href={produto.url} target="_blank">
              <img
                className="product-selected-img"
                src={produto.img}
                alt={produto.name}
              />
            </a>
            <SH1 fontSize="15px" margin="12px 0px 8px 0px" fontWeight={500}>
              {produto.name}
            </SH1>
            <SspanText fontSize="16px">
              Variação: {produto.variant_value}
            </SspanText>
          </Box>
          <Box className="col-md-8" margin="0px">
            <div className="d-md-flex justify-content-between">
              <div className="d-flex flex-column justify-content-center content-select">
                <STextParagraph typeParagraph="select">
                  *Tipo de Reembolso
                </STextParagraph>
                <ListaSelected
                  options={["Cupom", "Estorno"]}
                  onChange={(selectedValue) => setTipoReembolso(selectedValue)}
                  selectedValue={tipoReembolso}
                ></ListaSelected>
              </div>
              <div className="d-flex flex-column justify-content-center content-select">
                <STextParagraph typeParagraph="select">*Quantidade</STextParagraph>
                <ListaSelected
                  options={[]}
                  quantityNumber={produto.quantity}
                  onChange={(selectedValue) =>
                    setQuantidade(selectedValue as number | "")
                  }
                  selectedValue={quantidade}
                ></ListaSelected>
              </div>
            </div>
            <div className="d-md-flex justify-content-between">
              <div className="d-flex flex-column justify-content-center content-select">
                <STextParagraph typeParagraph="select">
                  *Por que quer devolver?
                </STextParagraph>
                <ListaSelected
                  options={motivoDevolucaoOptions}
                  onChange={(selectedValue) => setMotivoDevolucao(selectedValue)}
                  selectedValue={motivoDevolucao}
                ></ListaSelected>
              </div>
              <div className="d-flex flex-column justify-content-center content-select">
                <STextParagraph typeParagraph="select">
                  *O que aconteceu?
                </STextParagraph>
                <ListaSelected
                  options={subDevolucaoOptions}
                  onChange={(selectedValue) => setSubDevolucao(selectedValue)}
                  selectedValue={subDevolucao}
                ></ListaSelected>
              </div>
            </div>
            <div className="d-md-flex justify-content-between">
              <div className="d-flex flex-column justify-content-center content-select">
                <STextParagraph typeParagraph="select">Observações</STextParagraph>
                <input type="text"></input>
              </div>
              <div className="d-flex flex-column justify-content-center content-select">
                <Box
                  className="d-flex align-items-center"
                  margin="12px 0px 0px 0px"
                >
                  {mediaRequired && <a onClick={openModal}>
                    <Box typeBox="cam">
                      <IconCamera fill="#fff" width={25}></IconCamera>
                    </Box>
                  </a>}
                  <STextParagraph typeParagraph="select">
                    Anexar fotos
                  </STextParagraph>
                </Box>
              </div>
            </div>
            <ModalCamera isOpen={modalIsOpen} onRequestClose={closeModal} onPhotoAdded={() => setFotoAdicionada(true)} />
          </Box>
        </div>
      </Box>

      <button onClick={handleConfirmar} disabled={!isFotoAdicaoValida} className="button-fut">
        Confirmar
      </button>
    </>
  );
};

export default ProductSelected;











