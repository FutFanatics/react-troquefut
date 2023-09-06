import { SBox } from "../../components/Box";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { STitle, STitleHeader } from "../../components/Text";
import CustomSelect from "../../components/customselect";
import LogoFut from "../../components/icon/LogoFut";
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
                        <STitleHeader typeOption="inative">Instruções do Pedido</STitleHeader>
                    </SBox>
                    <SBox typeBox="optionmenu"
                    >
                        <STitleHeader >Pedido</STitleHeader>
                    </SBox>
                    <SBox typeBox="optionmenu-inative"
                    >
                        <STitleHeader>Dados</STitleHeader>
                    </SBox>
                    <SBox typeBox="optionmenu-inative"
                    >
                        <STitleHeader>Formas de envio</STitleHeader>
                    </SBox>

                    </div>
                </div>

                <STitle typeTitle="instruction">
                    <STitle typeTitle="sublinhado">Selecione&nbsp;</STitle>
                    O pedido que deseja <STitle typeTitle="sublinhado">&nbsp;devolver</STitle>
                </STitle>

                <div className="d-flex justify-content-center">
                        <CustomSelect></CustomSelect>
                </div>
            
            
                <div className="row justify-content-end">
                        <Button path="/data" typeButton="next" >Avançar</Button>
                </div>
                <Footer></Footer>
            </div>
        </section>
    )

}