import {  SBox, SBoxIconFut } from "../../components/Box";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { STitle, STitleHeader } from "../../components/Text";
import LogoFut from "../../components/icon/LogoFut";

export default function DataAdress() {

    return (
        <section className="c-data">
            <div className="container">
                <div className="c-header w-100">
                    <div className="box-img"><LogoFut></LogoFut></div>
                    <div className="box-text d-flex justify-content-center">
                    <SBox typeBox="optionmenu-inative"
                    >
                        <STitleHeader typeOption="inative">Instruções do Pedido</STitleHeader>
                    </SBox>
                    <SBox typeBox="optionmenu-inative"
                    >
                        <STitleHeader typeOption="inative">Pedido</STitleHeader>
                    </SBox>
                    <SBox typeBox="optionmenu"
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
                    Confirme seus dados
                </STitle>

                <div className="row justify-content-center mt-3 mb-3">
                    <div className="col-md-3 d-flex align-items-center justify-content-center">
                        <SBoxIconFut typeBoxIcon = 'icondata'><span>1</span></SBoxIconFut>
                        <STitle typeTitle='dados'>
                            Informações pessoais
                        </STitle>
                    </div>
                    <div className="line col-md-1"></div>
                    <div className="col-md-3 d-flex align-items-center justify-content-center">
                    <SBoxIconFut typeBoxIcon = 'icondata'><span>2</span></SBoxIconFut>
                        <STitle typeTitle='dados'>
                            Confirme o seu endereço
                        </STitle>
                    </div>
                    <div className="line col-md-1"></div>
                    <div className="col-md-3 d-flex align-items-center justify-content-center">
                    <SBoxIconFut typeBoxIcon = 'icondata'><span>3</span></SBoxIconFut>
                        <STitle typeTitle='dados'>
                            Insira os Dados Bancários
                        </STitle>
                    </div>
                </div>
                <div className="row justify-content-center mt-5 mb-3">
                    <div className="col-md-8 boxform d-flex justify-content-between">
                        <div className="col-md-3">
                            <STitleHeader typeOption="nameForms">Confirme seu CEP</STitleHeader>
                        </div>
                        <div className="col-md-8 col-input">
                            <input type="text" placeholder="xxxxx-xxx"></input>
                        </div>
                    </div>
                    <div className="col-md-8 boxform d-flex justify-content-between">
                        <div className="col-md-3">
                            <STitleHeader typeOption="nameForms">Estado</STitleHeader>
                        </div>
                        <div className="col-md-8 col-input">
                            <input type="text"></input>
                        </div>
                    </div>
                    <div className="col-md-8 boxform d-flex justify-content-between">
                        <div className="col-md-3">
                            <STitleHeader typeOption="nameForms">Cidade</STitleHeader>
                        </div>
                        <div className="col-md-8 col-input">
                            <input type="text" placeholder="xxxxxxx"></input>
                        </div>
                    </div>
                    <div className="col-md-8 boxform d-flex justify-content-between">
                        <div className="col-md-3">
                            <STitleHeader typeOption="nameForms">Bairro</STitleHeader>
                        </div>
                        <div className="col-md-8 col-input">
                            <input type="text" placeholder="xxxxxxx"></input>
                        </div>
                    </div>
                    <div className="col-md-8 boxform d-flex justify-content-between">
                        <div className="col-md-3">
                            <STitleHeader typeOption="nameForms">Endereço</STitleHeader>
                        </div>
                        <div className="col-md-8 col-input">
                            <input type="text" placeholder="xxxxxxxxx xxxxxxx"></input>
                        </div>
                    </div>
                    <div className="col-md-8 boxform d-flex justify-content-between">
                        <div className="col-md-3">
                            <STitleHeader typeOption="nameForms">Número</STitleHeader>
                        </div>
                        <div className="col-md-8 col-input">
                            <input type="text" placeholder="xxxx"></input>
                        </div>
                    </div>
                    <div className="col-md-8 boxform d-flex justify-content-between">
                        <div className="col-md-3">
                            <STitleHeader typeOption="nameForms">Complemento</STitleHeader>
                        </div>
                        <div className="col-md-8 col-input">
                            <input type="text" placeholder="xxxxxxxxxxx"></input>
                        </div>
                    </div>
                </div>
                
            
                <div className="row justify-content-end">
                        <Button path="/data" typeButton="next" >Avançar</Button>
                </div>
                <Footer></Footer>
            </div>
        </section>
    )

}