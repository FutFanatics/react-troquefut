import { SBoxIconFut } from "../../componentsStyled/Box";
import Button from "../../componentsStyled/Button";
import Footer from "../../components/footer";
import { SH1, SspanText } from "../../componentsStyled/Text";
import IconCheck from "../../componentsStyled/icon/Iconcheck";
import React, { useState } from 'react';
import Header from "../../components/header";

import Options from "../../components/options";
import Menu from "../../components/menu";
import CampoTexto from "../../components/campotexto";
import FormularioPessoal from "../../components/formulario";

export default function Data() {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState(""); 
    const [celular, setCelular] = useState(""); 
    const [email, setEmail] = useState(""); 
    

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
        <>
        <Header></Header>
        <Menu typeOption="active">
            <Options options={[
                { text: 'Instruções do Pedido', path: '/instructions' },
                { text: 'Pedido', path: '/order' },
                { text: 'Dados', path: '/data' },
                { text: 'Formas de envio', path: '/shipping' },
            ]}/>
        </Menu>
        <section className="c-data">
            <div className="container">
                <SH1 fontSize="28px" textTransform="uppercase">
                    Preencha seus dados
                </SH1>
                
                {elementoAtivo === 'elemento1' && (
                <>
                <FormularioPessoal></FormularioPessoal>
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
                </>
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
                    <FormularioPessoal>
                    <CampoTexto
                        obrigatorio={true}
                        placeholder="Digite seu nome"
                        valor={nome}
                        aoAlterado={(valor) => setNome(valor)}
                    />

                    <CampoTexto
                        obrigatorio={true} 
                        placeholder="Digite seu telefone" 
                        valor={telefone}
                        aoAlterado={(valor) => setTelefone(valor)} 
                    />

                    <CampoTexto
                        obrigatorio={true}
                        placeholder="Digite seu celular" 
                        valor={celular}
                        aoAlterado={(valor) => setCelular(valor)} 
                    />

                    <CampoTexto
                        obrigatorio={true}
                        placeholder="Digite seu email" 
                        valor={email}
                        aoAlterado={(valor) => setEmail(valor)} 
                    />
                </FormularioPessoal>
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
            </div>
        </section>
        <Footer></Footer>
        </>
    )

}