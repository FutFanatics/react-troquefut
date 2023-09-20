import { SBox } from "../../componentsStyled/Box";
import Button from "../../componentsStyled/Button";
import Footer from "../../components/footer";
import { SH1, SspanText } from "../../componentsStyled/Text";
import CustomSelect from "../../componentsStyled/customselect";
import LogoFut from "../../componentsStyled/icon/LogoFut";
import { useState } from 'react';
import Header from "../../components/header";
import Menu from "../../components/menu";
import Options from "../../components/options";
import ListaProdutos from "../../components/listaprodutos";
import ListaSuspensa from "../../components/listasuspensa";
import ProductSelected from "../../components/produtoselected";



export default function Order() {
    const optionsArray = ['Opção 1', 'Opção 2', 'Opção 3', 'Opção de Teste 1', 'Opção de Teste 2'];
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (selectedValue: string) => {
        setSelectedOption(selectedValue);
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
        <section className="c-order">
           <div className="container">
                <SH1 textTransform="uppercase" fontSize="28px" margin="16px 0px 0px 0px">
                    Selecione O pedido 
                </SH1>
                <ListaSuspensa
                    label="Selecione uma opção"
                    valor={selectedOption}
                    items={optionsArray}
                    obrigatorio={true}
                    onChange={handleOptionChange}
                    className="c-lista-suspensa"  
                ></ListaSuspensa>
                <ListaProdutos></ListaProdutos>  

                <Button margin="0 auto" path="/data" typeButton="next" >Avançar</Button>                
            </div>
        </section>
        <Footer></Footer>
        </>
    )

}