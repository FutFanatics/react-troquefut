import styled from "styled-components";
import LogoFut from "../icon/LogoFut";
import { BoxTextFooter } from "../Box";

export default function Footer() {

    return (
        <div className="c-footer d-flex justify-content-center align-items-center">
            <div className="box-img"><LogoFut></LogoFut></div>
            <BoxTextFooter>
                <p>
                    FF.Com Esportes Ltda CNPJ 05.328.923/0001-90 Rodovia Arthur Boigues Filho, 59 CEP: 19026-650 Presidente Prudente - SP Copyright 2012-2023 www.futfanatics.com.br - TODOS OS DIREITOS RESERVADOS. É vetada a reprodução total ou parcial das informações aqui veiculadas sem a expressa autorização da administração do site. Os preços e condições de pagamento são válidos exclusivamente para compras realizadas via internet.
                </p>
             </BoxTextFooter>
        </div>
    )

}