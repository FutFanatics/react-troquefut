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
import FormularioAdress from "../../components/formularioadress";
import FormularioBank from "../../components/formulariobank";

export default function Data() {
    const [screen, setScreen] = React.useState <"personal" | "adress" | "bank"> ("personal");

    const handleNavigateToPersonalScreen = () => {
        setScreen('personal')
     }
    const handleNavigateToAdressScreen = () =>{
        setScreen('adress')
    }
    const handleNavigateToBankScreen = () =>{
        setScreen('bank')
    }

    
    const onSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
    }

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
                    <SH1 textTransform="uppercase">
                        Preencha seus dados
                    </SH1>
                    <form onSubmit={onSubmit}>
                        {screen === "personal" &&(
                        <>
                            <FormularioPessoal></FormularioPessoal>
                            <Button type="submit" margin="32px auto 32px auto" onClick={handleNavigateToAdressScreen}>
                            Avançar
                            </Button>
                        </>
                        )}
                        {screen === "adress" &&(
                            <>
                            <FormularioAdress>
                            </FormularioAdress>
                            <Button type="submit" margin="32px auto 32px auto" onClick={handleNavigateToBankScreen}>
                            Avançar
                            </Button>
                            </>
                        )}
                        {screen === "bank" &&(
                            <>
                            <FormularioBank>
                            </FormularioBank>
                            <Button type="submit" margin="32px auto 32px auto" path="/shipping">
                            Avançar
                            </Button>
                            </>
                        )}
                    </form>
                
            
                    
                    
                
                
                </div>
            </section>
            <Footer></Footer>
        </>
    )

}