
import Button from "../../componentsStyled/Button";
import Footer from "../../components/footer";
import { SH1 } from "../../componentsStyled/Text";
import { useState } from 'react';
import Header from "../../components/header";
import Menu from "../../components/menu";
import Options from "../../components/options";
import ListaProdutos from "../../components/listaprodutos";
import ListaSuspensa from "../../components/listasuspensa";



export default function Order() {
    const produtosData = [
        {
          nome: 'Camisa São Paulo Hype Preta',
          codigo: 'SP123',
          pedido:'344556',
          preco: 'R$29,99',
          imagem: '../img/img-camisa_sp.png',
          variacao: 'M',
          url: 'https://www.futfanatics.com.br/camisa-sao-paulo-hype-preta',

        },

        {
            nome: 'Camisa Flamengo Essay Preta e Vermelha',
            codigo: '121055',
            pedido:'344555',
            preco: 'R$ 299,90',
            imagem: '../img/img-camisa_sp.png',
            variacao: 'M',
            url: 'https://www.futfanatics.com.br/camisa-flamengo-essay-preta-e-vermelha',
          },
    ];
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (selectedValue: string) => {
        setSelectedOption(selectedValue);
      };
    
    const pedidoOptions = produtosData.map((produto) => ({
    value: produto.pedido,
    label: produto.pedido,
    }));
    
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
                    items={pedidoOptions} 
                    obrigatorio={true}
                    onChange={handleOptionChange}
                    className="c-lista-suspensa"  
                ></ListaSuspensa>
                <ListaProdutos selectedOption={selectedOption}></ListaProdutos>  

                <Button margin="0px auto 32px auto" path="/data" typeButton="next" >Avançar</Button>                
            </div>
        </section>
        <Footer></Footer>
        </>
    )

}