import {  SBox, SBoxIconFut } from "../../componentsStyled/Box";
import Button from "../../componentsStyled/Button";
import Footer from "../../components/footer";
import { STitle, STitleHeader } from "../../componentsStyled/Text";
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
                
                {elementoAtivo === 'elemento1' && (
                <section className="personal-forms">
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
                                <STitleHeader typeOption="nameForms">Nome Completo</STitleHeader>
                            </div>
                            <div className="col-md-8 col-input">
                                <input type="text"></input>
                            </div>
                        </div>
                        <div className="col-md-8 boxform d-flex justify-content-between">
                            <div className="col-md-3">
                                <STitleHeader typeOption="nameForms">Telefone</STitleHeader>
                            </div>
                            <div className="col-md-8 col-input">
                                <input type="text" placeholder="(xx) xxxx - xxxx "></input>
                            </div>
                        </div>
                        <div className="col-md-8 boxform d-flex justify-content-between">
                            <div className="col-md-3">
                                <STitleHeader typeOption="nameForms">Celular</STitleHeader>
                            </div>
                            <div className="col-md-8 col-input">
                                <input type="text" placeholder="(xx) xxxxx - xxxx "></input>
                            </div>
                        </div>
                        <div className="col-md-8 boxform d-flex justify-content-between">
                            <div className="col-md-3">
                                <STitleHeader typeOption="nameForms">Email</STitleHeader>
                            </div>
                            <div className="col-md-8 col-input">
                                <input type="text" placeholder="xxxxxxx@xxxx.com"></input>
                            </div>
                        </div>
                        <div className="col-md-8 boxform d-flex justify-content-between">
                            <div className="col-md-3">
                                <STitleHeader typeOption="nameForms">Confirme Email</STitleHeader>
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
                        <STitle typeTitle='inative'>
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
                    </section>
                )}
                {elementoAtivo === 'elemento3' && (
                    <section className="dada-payment-forms">
                    <div className="row justify-content-center mt-3 mb-3">
                    <div className="col-md-3 d-flex align-items-center justify-content-center">
                        <SBoxIconFut typeBoxIcon = 'icondata-checked'><IconCheck></IconCheck></SBoxIconFut>
                        <STitle typeTitle='inative'>
                            Informações pessoais
                        </STitle>
                    </div>
                    <div className="line col-md-1"></div>
                    <div className="col-md-3 d-flex align-items-center justify-content-center">
                    <SBoxIconFut typeBoxIcon = 'icondata-checked'><IconCheck></IconCheck></SBoxIconFut>
                        <STitle typeTitle='inative'>
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
                                <STitleHeader typeOption="nameForms">Nome Completo</STitleHeader>
                            </div>
                            <div className="col-md-8 col-input">
                                <input type="text"></input>
                            </div>
                        </div>
                        <div className="col-md-8 boxform d-flex justify-content-between">
                            <div className="col-md-3">
                                <STitleHeader typeOption="nameForms">Nome do titular</STitleHeader>
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