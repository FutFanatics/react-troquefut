import { SBox } from "../../componentsStyled/Box";
import Button, { ButtonNext } from "../../componentsStyled/Button";
import Footer from "../../components/footer";
import { STextParagraph, SH1, SspanText } from "../../componentsStyled/Text";
import LogoFut from "../../componentsStyled/icon/LogoFut";
import Correios from '../../img/icon/correios.png';
import Cliqueretire from '../../img/icon/cliqueretire.png';
import React, { useState } from 'react';
import IconFilter from "../../componentsStyled/icon/IconFilter";
import Locker from "../../img/locker.png";
import Header from "../../components/header";
import Menu from "../../components/menu";
import Options from "../../components/options";
import Lista from "../../components/lista";

export default function Shipping() {
    const [selectedContent, setSelectedContent] = useState('');

    const showContent1 = () => {
        setSelectedContent('content1');
      };
      const showContent2 = () => {
        setSelectedContent('content2');
      };
    
      const hideContent = () => {
        setSelectedContent('');
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
        <section className="c-shipping">
            <div className="container">
                <SH1 typeTitle="instruction">
                    <SH1 typeTitle="sublinhado">Selecione&nbsp;</SH1>A FORMA DE ENVIO
                </SH1>
                <Lista></Lista>
                <div className="row justify-content-center">
                    <SBox typeBox="envio">
                        <div className="box-img">
                                <img className="img-envio" src={Cliqueretire}/>
                        </div>
                        <div className="box-text_envio">
                        <STextParagraph typeParagraph="paragraphenvio" >
                            <li>Ao selecionar o envio pelo clique retire deverá ir até o locker desejado para realizar o auto atendimento;</li>
                            <li className="pt-2">Após a aprovação da devolução receberá um QR code via email para devolução.</li>
                        </STextParagraph>
                        </div>
                        
                        <button onClick={showContent1} className="select-envio">
                            Selecionar
                        </button>
                    </SBox>
                    <SBox typeBox="envio">
                        <div className="box-img">
                                <img className="img-envio" src={Correios}/>
                        </div>
                        <div className="box-text_envio">
                            <STextParagraph typeParagraph="paragraphenvio" >
                            <li>Ao selecionar o envio pelos correios deverá ir até uma agência;</li>
                            <li className="pt-2">Será emitido um código de reverso via email para que você possa realizar a devolução.</li>
                        </STextParagraph>
                        </div>
                        
                        <button onClick={showContent2} className="select-envio">
                            Selecionar
                        </button>
                    </SBox>
                </div>
            </div>

                {selectedContent == 'content1' &&(
                    <div className="c-clique">
                        <SH1 typeTitle="instructionminor">como funciona o <SH1 typeTitle='sublinhado'>&nbsp;Cliqueretire?</SH1></SH1>
                        <STextParagraph typeParagraph='paragraphclique'>Veja o vídeo logo abaixo para entender o funcionamento do clique retire</STextParagraph>
                        <div className="video-clique mb-4">
                        </div>
                        <SH1 typeTitle="instruction">
                        <SH1 typeTitle='sublinhado'>Escolha&nbsp;</SH1>
                        em que locker deseja retirar
                        </SH1>

                        <div className="container">
                            <div className="row justify-content-center mt-4 mb-5">
                                <div className="box-locker col-md-10 d-flex justify-content-center">
                                    <div className="col-md-6">
                                    <div className="d-flex">
                                        <SBox typeBox="boxforms">
                                            <input type='text' placeholder="Informe o CEP"></input>
                                        </SBox>
                                        <ButtonNext typeButtonNext="filter"><IconFilter></IconFilter><span>Filtro</span></ButtonNext>
                                    </div>
                                    <SBox typeBox="boxlocker">
                                        <div className="box-content">
                                        <SH1 typeTitle="locker">
                                            Shopping Tambore
                                        </SH1>
                                        <div><span className="type">e-Box:</span> <span className="describe">CR00115</span></div> 
                                        <div><span className="type">Av.Piracema,699</span></div> 
                                        <div><span className="type">Tamboré</span></div> <div className="d-flex justify-content-between">
                                            <div>
                                              <span className="type">CEP:</span> <span className="describe">06460-030</span>   
                                            </div>
                                            <ButtonNext typeButtonNext="more">
                                                Saiba mais
                                            </ButtonNext>
                                        </div>  
                                        </div>
                                        <div className="box-img_locker">
                                            <img src={Locker}/>
                                        </div>
                                        
                                    </SBox>
                                    <SBox typeBox="boxlocker">
                                        <div className="box-content">
                                        <SH1 typeTitle="locker">
                                            Shopping Tambore
                                        </SH1>
                                        <div><span className="type">e-Box:</span> <span className="describe">CR00115</span></div> 
                                        <div><span className="type">Av.Piracema,699</span></div> 
                                        <div><span className="type">Tamboré</span></div> <div className="d-flex justify-content-between">
                                            <div>
                                              <span className="type">CEP:</span> <span className="describe">06460-030</span>   
                                            </div>
                                            <ButtonNext typeButtonNext="more">
                                                Saiba mais
                                            </ButtonNext>
                                        </div>  
                                        </div>
                                        <div className="box-img_locker">
                                            <img src={Locker}/>
                                        </div>
                                        
                                    </SBox>
                                    <SBox typeBox="boxlocker">
                                        <div className="box-content">
                                        <SH1 typeTitle="locker">
                                            Shopping Tambore
                                        </SH1>
                                        <div><span className="type">e-Box:</span> <span className="describe">CR00115</span></div> 
                                        <div><span className="type">Av.Piracema,699</span></div> 
                                        <div><span className="type">Tamboré</span></div> <div className="d-flex justify-content-between">
                                            <div>
                                              <span className="type">CEP:</span> <span className="describe">06460-030</span>   
                                            </div>
                                            <ButtonNext typeButtonNext="more">
                                                Saiba mais
                                            </ButtonNext>
                                        </div>  
                                        </div>
                                        <div className="box-img_locker">
                                            <img src={Locker}/>
                                        </div>
                                        
                                    </SBox>
                                    </div>
                                    <div className="col-md-5 maps">
                                        <SBox typeBox="boxmaps">

                                        </SBox>

                                    </div>
                                    
                                </div>
                            </div>
                            <div className="w-100 d-flex justify-content-end">
                            <Button typeButton="next">Avançar</Button>
                        </div>
                        </div>

                        
                    </div>
                  
                )}
                {selectedContent === 'content2' && (
                    <div className="container">
                        <div className="w-100 d-flex justify-content-end">
                            <Button typeButton="next">Avançar</Button>
                        </div>
                    </div>
                    
                )}
                <Footer></Footer>
        </section>
        </>
    )

}