import { SBox } from "../../components/Box";
import Button, { ButtonNext } from "../../components/Button";
import Footer from "../../components/Footer";
import { STextParagraph, STitle, STitleHeader } from "../../components/Text";
import LogoFut from "../../components/icon/LogoFut";
import Correios from '../../img/icon/correios.png';
import Cliqueretire from '../../img/icon/cliqueretire.png';
import React, { useState } from 'react';


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
                    </div>
                  
                )}
                {selectedContent === 'content2' && (
                    <div className="manoela">
                    <p>Conteúdo da Div 2</p>
                    </div>
                )}
                <div className="container">
                    <Footer></Footer>
                </div>
                            
            
            


            <div>
                <h1>Escolha sua forma de Envio</h1>
                <Button><a href="https://www.futfanatics.com.br/">Concluir Solicitação </a></Button>                        <Button path="/">Voltar Página Inicial</Button>
                </div>
        </section>


        
    )

}