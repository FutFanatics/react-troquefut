import { SBox } from "../../componentsStyled/Box";
import Button, { ButtonNext } from "../../componentsStyled/Button";
import Footer from "../../components/footer";
import { STextParagraph, STitle, STitleHeader } from "../../componentsStyled/Text";
import LogoFut from "../../componentsStyled/icon/LogoFut";
import Correios from '../../img/icon/correios.png';
import Cliqueretire from '../../img/icon/cliqueretire.png';
import React, { useState } from 'react';
import IconFilter from "../../componentsStyled/icon/IconFilter";
import Locker from "../../img/locker.png";

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
        <section className="c-shipping">
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
                    <SBox typeBox="optionmenu-inative"
                    >
                        <STitleHeader typeOption="inative">Dados</STitleHeader>
                    </SBox>
                    <SBox typeBox="optionmenu"
                    >
                        <STitleHeader>Formas de envio</STitleHeader>
                    </SBox>

                    </div>
                </div>
                <STitle typeTitle="instruction">
                    <STitle typeTitle="sublinhado">Selecione&nbsp;</STitle>A FORMA DE ENVIO
                </STitle>

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
                        <STitle typeTitle="instructionminor">como funciona o <STitle typeTitle='sublinhado'>&nbsp;Cliqueretire?</STitle></STitle>
                        <STextParagraph typeParagraph='paragraphclique'>Veja o vídeo logo abaixo para entender o funcionamento do clique retire</STextParagraph>
                        <div className="video-clique mb-4">
                        </div>
                        <STitle typeTitle="instruction">
                        <STitle typeTitle='sublinhado'>Escolha&nbsp;</STitle>
                        em que locker deseja retirar
                        </STitle>

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
                                        <STitle typeTitle="locker">
                                            Shopping Tambore
                                        </STitle>
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
                                        <STitle typeTitle="locker">
                                            Shopping Tambore
                                        </STitle>
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
                                        <STitle typeTitle="locker">
                                            Shopping Tambore
                                        </STitle>
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
    )

}