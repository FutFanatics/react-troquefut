import React, { useState, useEffect } from "react";
import ModalCamera from "./modalfoto";
import Modal from "react-modal";
import { Box } from "../componentsStyled/Box";
import { SH1, STextParagraph, SspanText } from "../componentsStyled/Text";
import IconCamera from "../componentsStyled/icon/Iconcamera";
import sp from "../img/img-camisa_sp.png";
import { Produto } from "./Types";
import ListaSelected from "./listaselected";

interface ProductSelectedProps {
  className?: string;
  produto?: Produto | null;
  produtosSelecionados?: Produto[];
  onDataUpdate?: (data: any) => void;
}

const ProductSelected: React.FC<ProductSelectedProps> = ({
  produto,
  produtosSelecionados,
  onDataUpdate,
}) => {
  const [tipoReembolso, setTipoReembolso] = useState<string>("");
  const [motivoDevolucao, setMotivoDevolucao] = useState<string>("");
  const [subDevolucao, setSubDevolucao] = useState<string>("");
  const [quantidade, setQuantidade] = useState<number | "">("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    console.log("produto:", produto);
    console.log("produtosSelecionados:", produtosSelecionados);
  }, [produto, produtosSelecionados]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const updateData = () => {
    if (onDataUpdate) {
      onDataUpdate({
        tipoReembolso,
        motivoDevolucao,
        quantidade,
        subDevolucao,
      });
    }
  };
  const closeModal = () => {
    setModalIsOpen(false);

    updateData();
  };

  if (!produto) {
    return null;
  }

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
            <div className="d-flex justify-content-between">
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
                options={[1, 2, 3, 4, 5]}
                onChange={(selectedValue) =>
                  setQuantidade(selectedValue as number | "")
                }
                selectedValue={quantidade}
              ></ListaSelected>
                </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column justify-content-center content-select">
              <STextParagraph typeParagraph="select">
              *Por que quer devolver?
            </STextParagraph>
            <ListaSelected
              options={["Motivo A", "Motivo B", "Motivo C"]}
              onChange={(selectedValue) => setMotivoDevolucao(selectedValue)}
              selectedValue={motivoDevolucao}
            ></ListaSelected>
              </div>
              <div className="d-flex flex-column justify-content-center content-select">
                <STextParagraph typeParagraph="select">*O que aconteceu?</STextParagraph>
                <ListaSelected
              options={["Motivo A", "Motivo B", "Motivo C"]}
              onChange={(selectedValue) => setSubDevolucao(selectedValue)}
              selectedValue={subDevolucao}
            ></ListaSelected>
                </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column justify-content-center content-select">
              <STextParagraph typeParagraph="select">Observações</STextParagraph>
            <input type="text"></input>
              </div>
              <div className="d-flex flex-column justify-content-center content-select">
              <Box
              className="d-flex align-items-center"
              margin="12px 0px 0px 0px"
            >
              <a onClick={openModal}>
                <Box typeBox="cam">
                  <IconCamera fill="#fff" width={25} ></IconCamera>
                </Box>
              </a>
              <STextParagraph typeParagraph="select">
                Anexar fotos
              </STextParagraph>
            </Box>
              </div>
            </div>
            <ModalCamera isOpen={modalIsOpen} onRequestClose={closeModal} />
          </Box>
        </div>
      </Box>
    </>
  );
};

export default ProductSelected;
