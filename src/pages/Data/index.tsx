import {  SBox, SBoxIconFut } from "../../componentsStyled/Box";
import Button from "../../componentsStyled/Button";
import Footer from "../../components/footer";
import { SH1, SspanText } from "../../componentsStyled/Text";
import IconCheck from "../../componentsStyled/icon/Iconcheck";
import LogoFut from "../../componentsStyled/icon/LogoFut";
import React, { useState } from 'react';

export default function Data() {

    const [elementoAtivo, setElementoAtivo] = useState('elemento1');
    const alternarElemento = () => {
    if (elementoAtivo === 'elemento1') {
      setElementoAtivo('elemento2');
    } else if(elementoAtivo ==='elemento2'){
        setElementoAtivo('elemento3')
    }else {
      setElementoAtivo('elemento1');
    }
  };
    return (
        <section className="c-data">
            <div className="container">
                <div className="c-header w-100">
                    <div className="box-img"><LogoFut></LogoFut></div>
                    <div className="box-text d-flex justify-content-center">
                    <SBox typeBox="optionmenu-inative"
                    >
                        <SspanText typeOption="inative">Instruções do Pedido</SspanText>
                    </SBox>
                    <SBox typeBox="optionmenu-inative"
                    >
                        <SspanText typeOption="inative">Pedido</SspanText>
                    </SBox>
                    <SBox typeBox="optionmenu"
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
                    Confirme seus dados
                </SH1>
                
                {elementoAtivo === 'elemento1' && (
                <section className="personal-forms">
                    <div className="row justify-content-center mt-3 mb-3">
                        <div className="col-md-3 d-flex align-items-center justify-content-center">
                            <SBoxIconFut typeBoxIcon = 'icondata'><span>1</span></SBoxIconFut>
                            <SH1 typeTitle='dados'>
                                Informações pessoais
                            </SH1>
                        </div>
                        <div className="line col-md-1"></div>
                        <div className="col-md-3 d-flex align-items-center justify-content-center">
                        <SBoxIconFut typeBoxIcon = 'icondata'><span>2</span></SBoxIconFut>
                            <SH1 typeTitle='dados'>
                                Confirme o seu endereço
                            </SH1>
                        </div>
                        <div className="line col-md-1"></div>
                        <div className="col-md-3 d-flex align-items-center justify-content-center">
                        <SBoxIconFut typeBoxIcon = 'icondata'><span>3</span></SBoxIconFut>
                            <SH1 typeTitle='dados'>
                                Insira os Dados Bancários
                            </SH1>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5 mb-3">
                        <div className="col-md-8 boxform d-flex justify-content-between">
                            <div className="col-md-3">
                                <SspanText typeOption="nameForms">Nome Completo</SspanText>
                            </div>
                            <div className="col-md-8 col-input">
                                <input type="text"></input>
                            </div>
                        </div>
                        <div className="col-md-8 boxform d-flex justify-content-between">
                            <div className="col-md-3">
                                <SspanText typeOption="nameForms">Telefone</SspanText>
                            </div>
                            <div className="col-md-8 col-input">
                                <input type="text" placeholder="(xx) xxxx - xxxx "></input>
                            </div>
                        </div>
                        <div className="col-md-8 boxform d-flex justify-content-between">
                            <div className="col-md-3">
                                <SspanText typeOption="nameForms">Celular</SspanText>
                            </div>
                            <div className="col-md-8 col-input">
                                <input type="text" placeholder="(xx) xxxxx - xxxx "></input>
                            </div>
                        </div>
                        <div className="col-md-8 boxform d-flex justify-content-between">
                            <div className="col-md-3">
                                <SspanText typeOption="nameForms">Email</SspanText>
                            </div>
                            <div className="col-md-8 col-input">
                                <input type="text" placeholder="xxxxxxx@xxxx.com"></input>
                            </div>
                        </div>
                        <div className="col-md-8 boxform d-flex justify-content-between">
                            <div className="col-md-3">
                                <SspanText typeOption="nameForms">Confirme Email</SspanText>
                            </div>
                            <div className="col-md-8 col-input">
                                <input type="text" placeholder="xxxxxxx@xxxx.com"></input>
                            </div>
                        </div>
                    </div>
                </section>
                )}
                {elementoAtivo === 'elemento2' && (
                    <section className="address-forms">
                    <div className="row justify-content-center mt-3 mb-3">
                    <div className="col-md-3 d-flex align-items-center justify-content-center">
                        <SBoxIconFut typeBoxIcon = 'icondata-checked'><IconCheck></IconCheck></SBoxIconFut>
                        <SH1 typeTitle='inative'>
                            Informações pessoais
                        </SH1>
                    </div>
                    <div className="line col-md-1"></div>
                    <div className="col-md-3 d-flex align-items-center justify-content-center">
                    <SBoxIconFut typeBoxIcon = 'icondata'><span>2</span></SBoxIconFut>
                        <SH1 typeTitle='dados'>
                            Confirme o seu endereço
                        </SH1>
                    </div>
                    <div className="line col-md-1"></div>
                    <div className="col-md-3 d-flex align-items-center justify-content-center">
                    <SBoxIconFut typeBoxIcon = 'icondata'><span>3</span></SBoxIconFut>
                        <SH1 typeTitle='dados'>
                            Insira os Dados Bancários
                        </SH1>
                    </div>
                    </div>
                    <div className="row justify-content-center mt-5 mb-3">
                    <div className="col-md-8 boxform d-flex justify-content-between">
                        <div className="col-md-3">
                            <SspanText typeOption="nameForms">Confirme seu CEP</SspanText>
                        </div>
                        <div className="col-md-8 col-input">
                            <input type="text" placeholder="xxxxx-xxx"></input>
                        </div>
                    </div>
                    <div className="col-md-8 boxform d-flex justify-content-between">
                        <div className="col-md-3">
                            <SspanText typeOption="nameForms">Estado</SspanText>
                        </div>
                        <div className="col-md-8 col-input">
                            <input type="text"></input>
                        </div>
                    </div>
                    <div className="col-md-8 boxform d-flex justify-content-between">
                        <div className="col-md-3">
                            <SspanText typeOption="nameForms">Cidade</SspanText>
                        </div>
                        <div className="col-md-8 col-input">
                            <input type="text" placeholder="xxxxxxx"></input>
                        </div>
                    </div>
                    <div className="col-md-8 boxform d-flex justify-content-between">
                        <div className="col-md-3">
                            <SspanText typeOption="nameForms">Bairro</SspanText>
                        </div>
                        <div className="col-md-8 col-input">
                            <input type="text" placeholder="xxxxxxx"></input>
                        </div>
                    </div>
                    <div className="col-md-8 boxform d-flex justify-content-between">
                        <div className="col-md-3">
                            <SspanText typeOption="nameForms">Endereço</SspanText>
                        </div>
                        <div className="col-md-8 col-input">
                            <input type="text" placeholder="xxxxxxxxx xxxxxxx"></input>
                        </div>
                    </div>
                    <div className="col-md-8 boxform d-flex justify-content-between">
                        <div className="col-md-3">
                            <SspanText typeOption="nameForms">Número</SspanText>
                        </div>
                        <div className="col-md-8 col-input">
                            <input type="text" placeholder="xxxx"></input>
                        </div>
                    </div>
                    <div className="col-md-8 boxform d-flex justify-content-between">
                        <div className="col-md-3">
                            <SspanText typeOption="nameForms">Complemento</SspanText>
                        </div>
                        <div className="col-md-8 col-input">
                            <input type="text" placeholder="xxxxxxxxxxx"></input>
                        </div>
                    </div>
                </div>
                    </section>
                )}
                {elementoAtivo === 'elemento3' && (
                    <section className="dada-payment-forms">
                    <div className="row justify-content-center mt-3 mb-3">
                    <div className="col-md-3 d-flex align-items-center justify-content-center">
                        <SBoxIconFut typeBoxIcon = 'icondata-checked'><IconCheck></IconCheck></SBoxIconFut>
                        <SH1 typeTitle='inative'>
                            Informações pessoais
                        </SH1>
                    </div>
                    <div className="line col-md-1"></div>
                    <div className="col-md-3 d-flex align-items-center justify-content-center">
                    <SBoxIconFut typeBoxIcon = 'icondata-checked'><IconCheck></IconCheck></SBoxIconFut>
                        <SH1 typeTitle='inative'>
                            Confirme o seu endereço
                        </SH1>
                    </div>
                    <div className="line col-md-1"></div>
                    <div className="col-md-3 d-flex align-items-center justify-content-center">
                    <SBoxIconFut typeBoxIcon = 'icondata'><span>3</span></SBoxIconFut>
                        <SH1 typeTitle='dados'>
                            Insira os Dados Bancários
                        </SH1>
                    </div>
                    </div>
                    <div className="row justify-content-center mt-5 mb-3">
                        <div className="col-md-8 boxform d-flex justify-content-between">
                            <div className="col-md-3">
                                <SspanText typeOption="nameForms">Nome Completo</SspanText>
                            </div>
                            <div className="col-md-8 col-input">
                                <input type="text"></input>
                            </div>
                        </div>
                        <div className="col-md-8 boxform d-flex justify-content-between">
                            <div className="col-md-3">
                                <SspanText typeOption="nameForms">Nome do titular</SspanText>
                            </div>
                            <div className="col-md-8 col-input">
                                <input type="text" placeholder="xxxxx xxxxxx"></input>
                            </div>
                        </div>
                    </div>
                    </section>
                )}
                
            
                <div className="row justify-content-end">
                    {elementoAtivo !== 'elemento3' ?(
                        <button onClick={alternarElemento} className="next-form" >Avançar</button>
                    )    :(
                        <Button path="/shipping" typeButton="next" >Avançar</Button>
                    )}
                        
                </div>
                <Footer></Footer>
            
            </div>
        </section>
    )

}