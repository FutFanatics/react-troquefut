import { SBox } from "../../componentsStyled/Box";
import Button from "../../componentsStyled/Button";
import Footer from "../../components/footer";
import { SH1, SspanText } from "../../componentsStyled/Text";
import CustomSelect from "../../componentsStyled/customselect";
import LogoFut from "../../componentsStyled/icon/LogoFut";
import { useState } from 'react';



export default function Order() {
    return (
        <section className="c-order">
           <div className="container">
                <div className="c-header w-100">
                    <div className="box-img"><LogoFut></LogoFut></div>
                    <div className="box-text d-flex justify-content-center">
                    <SBox typeBox="optionmenu-inative"
                    >
                        <SspanText typeOption="inative">Instruções do Pedido</SspanText>
                    </SBox>
                    <SBox typeBox="optionmenu"
                    >
                        <SspanText >Pedido</SspanText>
                    </SBox>
                    <SBox typeBox="optionmenu-inative"
                    >
                        <SspanText>Dados</SspanText>
                    </SBox>
                    <SBox typeBox="optionmenu-inative"
                    >
                        <SspanText>Formas de envio</SspanText>
                    </SBox>

                    </div>
                </div>

                <SH1 typeTitle="instruction">
                    <SH1 typeTitle="sublinhado">Selecione&nbsp;</SH1>
                    O pedido que deseja <SH1 typeTitle="sublinhado">&nbsp;devolver</SH1>
                </SH1>

                <div className="d-flex justify-content-center">
                </div>
            
            
                <div className="row justify-content-end">
                        <Button path="/data" typeButton="next" >Avançar</Button>
                </div>
                <Footer></Footer>
            </div>
        </section>
    )

}